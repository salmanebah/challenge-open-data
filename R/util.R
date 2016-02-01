RemoveComma <- function(x, from = 3) {
  # Removes comma from a character numeric matrix and return the corresponding numeric 
  # values as vector 
  # Args:
  #   x   : The 2d matrix containing characters number containing commas
  #   from: The number of column to start 
  # Returns:
  #   The numeric vector corresponding to the values contained in the x matrix    
  for (i in from:ncol(x)) {
    x[, i] <- as.numeric(gsub(",", "", x[, i]))
  }
  return(as.vector(x))
}

inc <- function(x)
{
  eval.parent(substitute(x <- x + 1))
}


ClassificationToJSON <- function(regions, use.crime = TRUE, use.age = TRUE, use.diploma = TRUE, 
                                 use.gdp = TRUE, use.unemployment = TRUE, 
                                 path = "../mongoDB-init/", filename = "classification", year) {
  # Writes the result of the classification in JSON
  # Args:
  #   regions  : A vector containing the region ids, its names, the result of the clustering
  #              process
  #   use.x    : TRUE means the x variable was used for the clustering. 
  #   path     : The directory where the file will be stored. 
  #   filename : The JSON filename
  
  # Checks the required libraries are loaded. 
  for (package in c('jsonlite', 'hash')) {
    if (!require(package, character.only=T, quietly=T)) {
      install.packages(package)
      library(package, character.only=T)
    }
  }
 
  regions$hash <- hash(keys=regions$code, values=regions$names)
  regions$invertedGroups <- invert(hash(regions[[year]]$groups)) # inverts the hash map
  
  # Builds the JSON schema
  classes <- c()
  list.regions <- list()
 
  # Gets the ids of the medoids for this classfication
  medoid.ids <- keys(hash(regions[[year]]$groups))
  print(medoid.ids)
  for (class in keys(regions$invertedGroups)) {
    regionSection = list()  # Creates the value of the key 'classes'
    medoid.id <- medoid.ids[as.numeric(class)]
    medoid.name <- regions$hash[[medoid.id]]
    medoid <- list('id' = as.numeric(medoid.id), 'name' = medoid.name)
    
    medoid.values <- regions$data[year, medoid.id,]
    print(paste("medoid id", medoid.id))
    print(paste("medoid values", medoid.values))
    print(names(medoid.values))
    medoid.values.names <- names(medoid.values)
    if (is.null(medoid.values.names)) {   # Case only one criterion is selected,
      if (use.crime) {
        colname <- "crime"
      } else if (use.age) {
        colname <- "age"
      } else if (use.diploma) {
        colname <- "diploma"
      } else if (use.gdp) {
        colname <- "gdp"
      } else {
        colname <- "unemployment"
      }
      medoid[[colname]] <- medoid.values
    } else {
      # Adds monoid criteria values. 
      for (colname in medoid.values.names) {
        print(paste("colname", colname))
        medoid[[colname]] <- medoid.values[[colname]]
      }      
    }
    
    # Aggregates the region ids and their names to a array for each group
    for (codeRegion in regions$invertedGroups[[class]]) {
      regionSection[[length(regionSection) + 1]] <- list('id' = as.numeric(codeRegion),
                                                        'name' = regions$hash[[codeRegion]])
    }
    list.regions[[length(list.regions) + 1]] <- list('medoid' = medoid, 'regions' = c(regionSection))
  }
  
  classes <- list.regions 
  criteria = list('crime' = as.numeric(use.crime), 'population' = as.numeric(use.age),
                  'education' = as.numeric(use.diploma), 'APB' = as.numeric(use.gdp),
                  'employment' = as.numeric(use.unemployment))
  
  #tmp <- list(year=2009, criteria=criteria)
  tmp <- list(criteria = criteria, 'year' = as.numeric(year), 'score' = regions[[year]]$score, classes = c(classes))
  
  # Converts to JSON and writes the result to a file. 
  regions$jsonResult <- toJSON(tmp, pretty = TRUE, auto_unbox = TRUE)
  return(regions$jsonResult)
  #write(regions.jsonResult, file = paste(path, filename, sep = ""))
}

# Clustering
ClassifyRegions <- function(regions, criteria, years = seq(1990, 2015), cluster.min = 3, 
                            cluster.max = 10, filename = "classification.json",
                            path = "../mongoDB-init/") {
  # Checks the required libraries are loaded. 
  for (package in c('fpc', 'TSclust')) {
    if (!require(package, character.only=T, quietly=T)) {
      install.packages(package)
      library(package, character.only=T)
    }
  }
  
  criteria$nbCriteria <- 0
  crime <- NULL
  age   <- NULL
  diploma <- NULL
  gdp   <- NULL
  unemployment <- NULL
  variableNames <- c()
  
  #Sorts regions according to their code
  if (!is.null(criteria$crime)) {
    variableNames <- c("crime")
    crime <- criteria$crime[order(criteria$crime$Code),]
    inc(criteria$nbCriteria)
  }
  
  if (!is.null(criteria$unemployment)) {
    variableNames <- c(variableNames, "unemployment")
    unemployment <- criteria$unemployment[order(criteria$unemployment$Code),]
    inc(criteria$nbCriteria)
  }
  
  if (!is.null(criteria$gdp)) {
    variableNames <- c(variableNames, "GDP")
    gdp <- criteria$gdp[order(criteria$gdp$Code),]
    inc(criteria$nbCriteria)
  }
  
  if (!is.null(criteria$diploma)) {
    variableNames <- c(variableNames, "diploma")
    diploma <- criteria$diploma[order(criteria$diploma$Code),]
    inc(criteria$nbCriteria)
  }
  
  if(!is.null(criteria$age)) {
    age.names <- names(criteria$age[['2009']][,-c(1,2, 8)])
    age <- criteria$age  # Must be ordered by region codes
    variableNames <- c(variableNames, age.names)
    inc(criteria$nbCriteria)
  }

  # Builds a 3d matrix containing all the time series dim(1) corresponds to time 
  # dim(2) the regions and dim(3) the variables. 

  regions$data <- array(dim = c(length(years), length(regions$names), length(variableNames)),
                        dimnames = list(years, regions$code, variableNames))

    # Fills the matrix by year.
  year.valid <- c()
  for (year in as.character(years)) {
    nbValidCriteria <- 0  # Number of criterion containing data for the this 'year'. 
    if (!is.null(age[[year]])) {
      regions$data[year, ,'0 à 19 ans'] <- age[[year]][,'0 à 19 ans']
      regions$data[year, ,'20 à 39 ans'] <- age[[year]][,'20 à 39 ans']
      regions$data[year, ,'40 à 59 ans'] <- age[[year]][,'40 à 59 ans']
      regions$data[year, ,'60 à 74 ans'] <- age[[year]][,'60 à 74 ans']
      regions$data[year, ,'75 ans et plus'] <- age[[year]][,'75 ans et plus']
      inc(nbValidCriteria)
    }
    
    if (!is.null(crime[[year]])) {
      regions$data[year, , 'crime'] <- crime[[year]]
      inc(nbValidCriteria)
    }
    
    if (!is.null(unemployment[[year]])) {
      regions$data[year, , 'unemployment'] <- unemployment[[year]]
      inc(nbValidCriteria)
    }
    
    if (!is.null(gdp[[year]])) {
      regions$data[year, , 'GDP'] <- gdp[[year]]
      inc(nbValidCriteria)
    }
    
    if (!is.null(diploma[[year]])) {
      regions$data[year, , 'diploma'] <- diploma[[year]]
      inc(nbValidCriteria)
    }
    if (nbValidCriteria == criteria$nbCriteria) {
      year.valid <- c(year.valid, year)
    }
  }
  
  # Hierarchical Clustering based on similarity of permutation distributions
#   regions$pdclust <- pdclust(regions$data, clustering.method = "average")
#   plot(regions$pdclust, hang = -0.01, cex = 0.7, xlab = paste("Classification selon le ", 
#                                                               variableNames, collapse = ", "), 
#        timeseries.as.labels = FALSE, labels = regions$names)
#   
  # Estimates the best number of clusters according to the silhouette criterion
  #pamk.best <- pamk(regions$pdclust$D, krange = cluster.min:cluster.max) 
  
  result.json <- ''
  for (year in as.character(year.valid)) {
    print(year)
    pamk.best <- pamk(regions$data[year, ,], krange = cluster.min:cluster.max)
    pamk.scaled.best <- pamk(regions$data[year, ,], krange = cluster.min:cluster.max, 
                             scaling = TRUE)
    if (pamk.best$pamobject$silinfo$avg.width <  pamk.scaled.best$pamobject$silinfo$avg.width) {
      regions[[year]]$nbclust <- pamk.scaled.best$nc
      regions[[year]]$pam <- pamk.scaled.best$pamobject
    } else {
      regions[[year]]$nbclust <- pamk.best$nc
      regions[[year]]$pam <- pamk.best$pamobject
    } 
    print(pamk.best$pamobject$silinfo$avg.width)
    print(pamk.scaled.best$pamobject$silinfo$avg.width)
    print(regions[[year]]$nbclust)
    # Clusters
    
    regions[[year]]$groups <- regions[[year]]$pam$clustering
    # Draws dendogram with red borders around the nbclust clusters
    #rect.hclust(regions$pdclust, k=regions$nbclust, border="red") 
    # Summarizes clusters 
    regions[[year]]$id.medoids <- regions[[year]]$pam$id.med
    regions[[year]]$score <- regions[[year]]$pam$silinfo$avg.width
    
    # Writes the result in JSON
    tmp <- ClassificationToJSON(regions,
                                   filename    =  filename, 
                                   use.crime   = ifelse(is.null(crime), FALSE, TRUE), 
                                   use.age     = ifelse(is.null(age), FALSE, TRUE), 
                                   use.diploma = ifelse(is.null(diploma), FALSE, TRUE),
                                   use.gdp     = ifelse(is.null(gdp), FALSE, TRUE),
                                   use.unemployment = ifelse(is.null(unemployment), FALSE, TRUE), 
                                   year = year)
    result.json <- paste(result.json, tmp, sep = "\n")
    
  }
  regions$result.json <- result.json
  write(regions$result.json, file = paste(path, filename, sep = ""))
  return(regions)
}