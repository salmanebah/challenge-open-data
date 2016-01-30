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


ClassificationToJSON <- function(regions.code, regions.names, regions.groups, use.crime = TRUE, use.age = TRUE, use.diploma = TRUE, 
                                 use.gdp = TRUE, use.unemployment = TRUE, 
                                 path = "../mongoDB-init/", filename = "classification") {
  # Writes the result of the classification in JSON
  # Args:
  #   regions  : The variable containing the region ids, its names, the result of the clustering
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
  
  regions.hash <- hash(keys=regions.code, values=regions.names)
  regions.invertedGroups <- invert(hash(regions.groups)) # inverts the hash map
  
  # Builds the JSON schema
  classes <- c()
  list.regions <- list()
  for (class in keys(regions.invertedGroups)) {
    regionSection = list()  # Creates the value of the key 'classes'
    
    # Aggregates the region ids and their names to a array for each group
    for (codeRegion in regions.invertedGroups[[class]]) {
      regionSection[[length(regionSection) + 1]] <- list('id' = as.numeric(codeRegion),
                                                        'name' = regions.hash[[codeRegion]])
    }
    list.regions[[length(list.regions) + 1]] <- list('regions' = c(regionSection))
  }
  
  classes <- list.regions 
  criteria = list('crime' = as.numeric(use.crime), 'population' = as.numeric(use.age),
                  'education' = as.numeric(use.diploma), 'APB' = as.numeric(use.gdp),
                  'employment' = as.numeric(use.unemployment))
  
  #tmp <- list(year=2009, criteria=criteria)
  tmp <- list(criteria = criteria, classes = c(classes))
  
  # Converts to JSON and writes the result to a file. 
  regions.jsonResult <- toJSON(tmp, pretty = TRUE, auto_unbox = TRUE)
  return(regions.jsonResult)
  #write(regions.jsonResult, file = paste(path, filename, sep = ""))
}

# Clustering
ClassifyRegions <- function(regions, crime = NULL, age = NULL, unemployment = NULL, gbp = NULL, 
                            diploma = NULL, years = seq(1990, 2015), cluster.min = 3, 
                            cluster.max = 10) {
  
  # Checks the required libraries are loaded. 
  for (package in c('fpc', 'TSclust')) {
    if (!require(package, character.only=T, quietly=T)) {
      install.packages(package)
      library(package, character.only=T)
    }
  }
  
  #Sorts regions according to their code
  if (!is.null(crime)) {
    variableNames <- c("crimes")
    crimes <- crimes[order(crimes$Code),]
  }
  
  if (!is.null(unemployment)) {
    variableNames <- c(variableNames, "unemployment")
    unemployment <- unemployment[order(unemployment$Code),]
  }
  
  if (!is.null(gdp)) {
    variableNames <- c(variableNames, "GDP")
    gdp <- gdp[order(gdp$Code),]
  }
  
  if (!is.null(diploma)) {
    variableNames <- c(variableNames, "diploma")
    diploma <- diploma[order(diploma$Code),]
  }
  
  if(!is.null(age)) {
    age.names <- names(age[['2009']][,-c(1,2, 8)])
    variableNames <- c(variableNames, age.names)
  }

  # Builds a 3d matrix containing all the time series dim(1) corresponds to time 
  # dim(2) the regions and dim(3) the variables. 

  regions.data <- array(dim = c(length(years), length(regions.names), length(variableNames)),
                        dimnames = list(years, regions.code, variableNames))
  # Fills the matrix by year. 
  for (year in as.character(years)) {
    if(!is.null(age[[year]])) {
      regions.data[year, ,'0 à 19 ans'] <- age[[year]][,'0 à 19 ans']
      regions.data[year, ,'20 à 39 ans'] <- age[[year]][,'20 à 39 ans']
      regions.data[year, ,'40 à 59 ans'] <- age[[year]][,'40 à 59 ans']
      regions.data[year, ,'60 à 74 ans'] <- age[[year]][,'60 à 74 ans']
      regions.data[year, ,'75 ans et plus'] <- age[[year]][,'75 ans et plus'] 
    }
    
    if (!is.null(crimes[[year]])) {
      regions.data[year, , 'crimes'] <- crimes[[year]]
    }
    
    if (!is.null(unemployment[[year]])) {
      regions.data[year, , 'unemployment'] <- unemployment[[year]]
    }
    
    if (!is.null(gdp[[year]])) {
      regions.data[year, , 'GDP'] <- gdp[[year]]
    }
    
    if (!is.null(diploma[[year]])) {
      regions.data[year, , 'diploma'] <- diploma[[year]]
    }
  }
  
  # Hierarchical Clustering based on similarity of permutation distributions
  regions.pdclust <- pdclust(regions.data, clustering.method = "average")
  plot(regions.pdclust, hang = -0.01, cex = 0.7, xlab = paste("Classification selon le ", 
                                                              variableNames, collapse = ", "), 
       timeseries.as.labels = FALSE, labels = regions.names)
  
  # Estimates the best number of clusters
  pamk.best <- pamk(regions.pdclust$D, krange = cluster.min:cluster.max) 
  regions.nbclust <- pamk.best$nc
  
  # Cuts tree into nbclust clusters
  regions.groups <- cutree(regions.pdclust, k = regions.nbclust)
  
  # Draws dendogram with red borders around the nbclust clusters
  rect.hclust(regions.pdclust, k=regions.nbclust, border="red") 
  
  # Writes result in JSON
   result <- ClassificationToJSON(regions.code = regions.code, regions.names = regions.names,
                                  regions.groups = regions.groups,
                                  filename    = "classification.json", 
                                  use.crime   = ifelse(is.null(crime), FALSE, TRUE), 
                                  use.age     = ifelse(is.null(age), FALSE, TRUE), 
                                  use.diploma = ifelse(is.null(diploma), FALSE, TRUE),
                                  use.gdp     = ifelse(is.null(gbp), FALSE, TRUE),
                                  use.unemployment = ifelse(is.null(unemployment), FALSE, TRUE))
   return(result)
}
