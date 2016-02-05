
ClassifyRegionsAllCombination <- function(crime, unemployment, gdp, diploma, age, is.new.regions = 1, 
                                          path = '../mongoDB-init/', filename = 'classification', 
                                          raw.data.filename = 'raw-data-by-year.json', valid.years.filename = "valid-years.json") {
  # Clusters regions with all combination of the given criteria
  # Args:
  #   crime                 : Regions crime data 
  #   unemployment          : Regions unemployment rate
  #   gdp                   : Regions gdp
  #   diploma               : Regions diploma rate
  #   is.new.regions        : 1 means the individual are new 2016 regions
  #   path                  : The path where the result will be stored
  #   filename              : The clustering result filename
  #   raw.data.filename     : The data stored year  by year for all regions and all criteria
  #   valid.years.filename  : All years where the combination of criteria contain data (i.e all of them)
  # Post:
  #   Create the filename.json with the clustering result
  #   Create raw.data.filename with all the data formated by year
  #   Create valid.years.filename with all the criteria combinations and the years where all of them contain data 
  
  # Order variables by region codes
  crime <- crime[order(crime$Code), ]
  diploma <- diploma[order(diploma$Code), ]
  unemployment <- unemployment[order(unemployment$Code), ]
  gdp <- gdp[order(gdp$Code), ]
  
  
  # Get code and region names
  regions <- vector("list")
  regions$code  <- crime[, 1]
  regions$names <- crime[, 2]
  
  mat <- matrix(nrow = 31, ncol = 5)
  colnames(mat) <- c('crime', 'age', 'diploma', 'gdp', 'unemployment')
  mat.nbCombination <- 31
  for (i in seq(1:mat.nbCombination)) {
    i.bits <- rawToBits(as.raw(i))
    mat[i, ] <- as.logical(i.bits[1:5])
  }
  
  criteria <- vector("list")
  regions.cluster <- vector("list")
  clustering.result.json <- ''
  
  for (row in 1:mat.nbCombination) {
    criteria$crime    <- NULL
    criteria$age      <- NULL
    criteria$diploma  <- NULL
    criteria$gdp      <- NULL
    criteria$unemployment <- NULL
    criteria$filename <- filename
    
    if (mat[row, 'crime']) {
      criteria$crime    <- crime  
    }
    
    if (mat[row, 'age']) {
      criteria$age    <- age  
    }
    
    if (mat[row, 'diploma']) {
      criteria$diploma  <- diploma
    }
    
    if (mat[row, 'gdp']) {
      criteria$gdp      <- gdp
    }
    
    if (mat[row, 'unemployment']) {
      criteria$unemployment <- unemployment
    }
    criteria$filename <- paste(criteria$filename, "json", sep = ".")
    regions.cluster[[as.character(row)]] <- ClassifyRegions(regions, criteria, years = seq(1990, 2015), 
                                                            cluster.min = 2, cluster.max = 10)
    clustering.result.json <- paste(clustering.result.json, regions.cluster[[as.character(row)]]$result.json, sep = "\n")
  }  
  
  write(clustering.result.json, file = paste(path, filename, sep = ''))
  
  # Writes raw data year by year in JSON format
  library(hash)
  regions.names.hash <- hash(keys=regions$code, values=regions$names)
  data.all.criteria <- regions.cluster$`31`$data
  data.brute <- toJSON(FormatDataByYear(data.all.criteria, hash = regions.names.hash, seq(1990, 2015)), auto_unbox = TRUE)
  write(data.brute, file = paste(path, raw.data.filename, sep = ''))
  
  # Writes all years where selected all the selected criteria contain data.
  all.valid.years <- GetAllValidYears(data.all.criteria, mat)
  write(toJSON(all.valid.years, auto_unbox = TRUE), file = paste(path, valid.years.filename, sep = ''))
}



ClassifyRegions <- function(regions, criteria, years = seq(1990, 2015), cluster.min = 3, 
                            cluster.max = 10, filename = "classification.json",
                            path = "../mongoDB-init/", region.new = 1) {
  # Clusters the regions using PAM (Partition Around Medoids) algorithm.
  # Args:
  #   regions     : Vector containing the region data for all criteria 
  #   criteria    : List of criteria with the corresponding data for each criterion. 
  #   years       : Years sequence includes all the criteria's ones. 
  #   cluster.min : Minimum number of cluster to create. 
  #   path        : The directory where the file will be stored. 
  #   region.new  : 1 if the clustering is made with the 2016 regions
  # Returns: 
  #   The clustering result in JSON.
  
  # Checks the required libraries are loaded. 
  for (package in c('fpc', 'testit')) {
    if (!require(package, character.only=T, quietly=T)) {
      install.packages(package)
      library(package, character.only=T)
    }
  }
  
  # Initializes the criteria
  criteria$nbCriteria <- 0
  crime <- NULL
  age   <- NULL
  diploma <- NULL
  gdp   <- NULL
  unemployment <- NULL
  variableNames <- c()
  
  # Get the selected criteria, fill the name of criteria selected 
  # and compute the number of criteria selected. The last variable is used to 
  # compute the years where all the selected criteria contain data. 
  if (!is.null(criteria$crime)) {
    variableNames <- c("crime")
    crime <- criteria$crime
    inc(criteria$nbCriteria)
  }
  
  if (!is.null(criteria$unemployment)) {
    variableNames <- c(variableNames, "unemployment")
    unemployment <- criteria$unemployment
    inc(criteria$nbCriteria)
  }
  
  if (!is.null(criteria$gdp)) {
    variableNames <- c(variableNames, "gdp")
    gdp <- criteria$gdp
    inc(criteria$nbCriteria)
  }
  
  if (!is.null(criteria$diploma)) {
    variableNames <- c(variableNames, "diploma")
    diploma <- criteria$diploma
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
  year.valid <- c() # An array containing all years where the selected criteria contain data. 
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
      regions$data[year, , 'gdp'] <- gdp[[year]]
      inc(nbValidCriteria)
    }
    
    if (!is.null(diploma[[year]])) {
      regions$data[year, , 'diploma'] <- diploma[[year]]
      inc(nbValidCriteria)
    }
    # Checks if all the criteria have data for this year
    if (nbValidCriteria == criteria$nbCriteria) {
      year.valid <- c(year.valid, year)
    }
  }
  
  
  result.json <- '' # variable that contain the clustering result in JSON.
  
  # Compute the clusters for all years for the given criteria. 
  for (year in as.character(year.valid)) {
    
    # Computes the best k when data are scaled or not. 
    pamk.best <- pamk(regions$data[year, ,], krange = cluster.min:cluster.max) 
    pamk.scaled.best <- pamk(regions$data[year, ,], krange = cluster.min:cluster.max, 
                             scaling = TRUE)
    # Gets the best number of clusters that maximize the pam's silhouette. 
    if (pamk.best$pamobject$silinfo$avg.width <  pamk.scaled.best$pamobject$silinfo$avg.width) {
      regions[[year]]$nbclust <- pamk.scaled.best$nc
      regions[[year]]$pam <- pamk.scaled.best$pamobject
    } else {
      regions[[year]]$nbclust <- pamk.best$nc
      regions[[year]]$pam <- pamk.best$pamobject
    } 
    
    regions[[year]]$groups <- regions[[year]]$pam$clustering # Gets the clustering result
    
    # Summarizes the clustering by getting the medoid of all clusters, and the average silhouette
    # coefficient. 
    regions[[year]]$medoid.ids <- rownames(regions[[year]]$pam$medoids) # Gets the medoid ids
    assert("There is at least one medoid", !is.null(regions[[year]]$medoid.ids))
    
    regions[[year]]$score <- regions[[year]]$pam$silinfo$avg.width # Get the average silhouette coefficient
    assert("The is a score for the current clustering", !is.null(regions[[year]]$score))
    
    # Writes the result in JSON
    year.result.json <- ClassificationToJSON(regions,
                                             filename    =  filename, 
                                             use.crime   = ifelse(is.null(crime), FALSE, TRUE), 
                                             use.age     = ifelse(is.null(age), FALSE, TRUE), 
                                             use.diploma = ifelse(is.null(diploma), FALSE, TRUE),
                                             use.gdp     = ifelse(is.null(gdp), FALSE, TRUE),
                                             use.unemployment = ifelse(is.null(unemployment), FALSE, TRUE), 
                                             year = year, region.new = region.new)
    result.json <- paste(result.json, year.result.json, sep = "\n")
    
  }
  regions$result.json <- result.json
  return(regions)
}

ClassificationToJSON <- function(regions, use.crime = TRUE, use.age = TRUE, use.diploma = TRUE, 
                                 use.gdp = TRUE, use.unemployment = TRUE, pretty = FALSE,
                                 path = "../mongoDB-init/", filename = "classification", year, 
                                 region.new = 1) {
  # Writes the result of the classification in JSON
  # Args:
  #   regions     : A vector containing the region ids, its names, the result of the clustering
  #   use.x       : TRUE means the x variable was used for the clustering. 
  #   path        : The directory where the file will be stored. 
  #   filename    : The JSON filename
  #   region.new  : 1 if the clustering is made with the 2016 regions
  # Returns: 
  #   The clustering result in JSON.
  
  # Checks the required libraries are loaded. 
  for (package in c('jsonlite', 'hash', 'testit')) {
    if (!require(package, character.only=T, quietly=T)) {
      install.packages(package)
      library(package, character.only=T)
    }
  }
  
  regions$hash <- hash(keys=regions$code, values=regions$names)  # Hashes the region codes with its names
  regions$invertedGroups <- invert(hash(regions[[year]]$groups)) # inverts the hash map to the cluster ids
  
  # Builds the JSON schema
  clusters <- c()
  list.regions <- list()
  
  # Gets the ids of the medoids from the computed clustering
  medoid.ids <- regions[[year]]$medoid.ids
  assert('Got the medoids ids', !is.null(medoid.ids))
  
  # Creates the 'clustering' JSON object
  # For each cluster add its medoid and an array of region ids and names
  # belonging to this cluster. 
  for (cluster.id in keys(regions$invertedGroups)) {
    cluster.id.regions = list()  
    medoid.id <- medoid.ids[as.numeric(cluster.id)] # Gets the medoid for this cluster
    assert('Not null medoid.id', !is.null(medoid.id))
    
    medoid.name <- regions$hash[[medoid.id]] # Gets the medoid's name 
    assert('Not null medoid.name', !is.null(medoid.name))
    
    # Creates the 'medoid' JSON object
    medoid <- list('id' = as.numeric(medoid.id), 'name' = medoid.name) 
    medoid.values <- regions$data[year, medoid.id,]
    assert('medoid values not null', !is.null(medoid.values))
    medoid.values.names <- names(medoid.values)
    
    # Case only one criterion is selected, looks for the selected criterion
    if (is.null(medoid.values.names)) {   
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
      medoid[[colname]] <- medoid.values # Gets the medoid values of this criterion
    } else {
      # Adds monoid criteria values. 
      for (colname in medoid.values.names) {
        medoid[[colname]] <- medoid.values[[colname]]
      }      
    }
    
    is.medoid.in.cluster <- FALSE
    # Aggregates the region ids and their names in a array for each cluster
    for (codeRegion in regions$invertedGroups[[cluster.id]]) {
      cluster.id.regions[[length(cluster.id.regions) + 1]] <- list('id' = as.numeric(codeRegion),
                                                                   'name' = regions$hash[[codeRegion]])
      if (codeRegion == medoid.id) {
        is.medoid.in.cluster <- TRUE
      }
    }
    assert("Medoid is present in its cluster", is.medoid.in.cluster == TRUE)
    list.regions[[length(list.regions) + 1]] <- list('medoid' = medoid, 'regions' = c(cluster.id.regions))
  }
  
  clusters <- list.regions # Gets all clusters with their region for this classification.
  criteria = list('crime' = as.numeric(use.crime), 'age' = as.numeric(use.age),   # Creates the criteria JSON object
                  'diploma' = as.numeric(use.diploma), 'gdp' = as.numeric(use.gdp),
                  'unemployment' = as.numeric(use.unemployment))
  
  # Aggregates the clustering result to match the JSON clustering schema
  clusters.result <- list('newregion' = as.numeric(region.new), criteria = criteria, 'year' = as.numeric(year), 
                          'score' = regions[[year]]$score, 'clusters' = c(clusters))
  
  # Converts to JSON
  regions$result.json <- toJSON(clusters.result, pretty = pretty, auto_unbox = TRUE)
  return(regions$result.json)
}


FormatDataByYear <- function(x, years, hash) {
  # Format all the raw data into a list ready to be converted in JSON. 
  # Args:
  #   x     : Three dimensional matrix with year in dim(1)
  #   years : Sequence of years to in which the data containg in the matrix x 
  #           will be formated. 
  #   hahs  : A hash map with region codes and its names. 
  #   Returns: 
  #     An array of list containing the years as key and an array of formated cell
  #     as value. This list can be converted to JSON to match the JSON years schema. 
  result <- c()
  criteria <- vector('list') # Contains a list of the critera
  for (year in as.character(years)) {
    x.year    <- x[year, ,]
    x.use     <- x.year[, colSums(is.na(x.year)) != nrow(x.year)] # Removes all row that contain NA values
    x.not.use <- x.year[, colSums(is.na(x.year)) > 0] # Gets the 
    
    # Build the criteria list with the criteria name as key and a boolean as value
    criteria <- ColNameToList(x.use)
    criteria <- c(criteria, ColNameToList(x.not.use, value = FALSE))
    
    # Get all data for this year
    result.year <- vector('list')
    result.year[[year]] <- c(list('criteria' = criteria), 
                             GetDataFromAllColumns(x.use, hash))
    result <- c(result, result.year)
  }
  
  return (list('years' = result))
}

GetDataFromAllColumns <- function(x, hash) {
  # Format all cell of a matrix by column
  # Args:
  #   x     : Two dimensional matrix
  #   hash  : A map containg region codes and its names
  # Returns:
  #   A list of all matrix values formated by column
  result <- vector('list')
  for (colname in colnames(x)) {
    result <- c(result, GetValues(x, colname, hash))
  }
  return (result)
} 

GetValues <- function (x, colname, hash) {
  # Format all the cell value of a column
  # Args:
  #   x       : A two dimensional matrix
  #   colname : The colname to format
  #   hash    : A hash containing the region code and its name
  # Returns: 
  #   A liste containing all the cell formated for the given colname. 
  res <- vector('list')
  values <- c()
  for (line in 1:nrow(x)) {
    values <- c(values, list(GetValue(x, line,  colname, hash)))
  }
  res[[colname]] <- values
  return(res)
}

GetValue <- function(x, line, colname, hash) {
  # Format a cell value
  # Args: 
  #   x       : Two dimensional matrix 
  #   line    : The line containing the cell to format
  #   colname : The colname containing the cell to format
  #   hash    : A Map of region code and its name
  # Returns:
  #   A list with the region code, its name the its value for the given column's name
  region.id <- as.numeric(rownames(x)[line])
  region.name <- hash[[as.character(region.id)]]
  
  return(list('id' = region.id, 
              'name' = region.name,
              'value' = as.numeric(x[line, colname])))
}




GetAllValidYears <- function(x, mat) {
  # Creates a list with colnames(x) as keys and the given value as value
  # Args:
  #   x     : Two dimensional matrix
  #   value : The value to assign to all list's keys.
  # Returns:
  #   A list with column names of matrix x as keys and their value to the given value. 
  result <- c()
  
  for (row in 1:nrow(mat)) {
    criteria.selected.colnames <- c()
    criteria.selected <- list('crime' = 0, 'age' = 0, 'diploma' = 0, 'gdp' = 0, 
                              'unemployment' = 0)
    
    if (mat[row, 'crime']) {
      criteria.selected[['crime']] <- 1
      criteria.selected.colnames <- c(criteria.selected.colnames, 'crime')
    }
    
    if (mat[row, 'gdp']) {
      criteria.selected[['gdp']] <- 1
      criteria.selected.colnames <- c(criteria.selected.colnames, 'gdp')
      
    }
    
    if (mat[row, 'unemployment']) {
      criteria.selected[['unemployment']] <- 1
      criteria.selected.colnames <- c(criteria.selected.colnames, 'unemployment')
    }
    
    
    if (mat[row, 'age']) {
      criteria.selected[['age']] <- 1
      criteria.selected.colnames <- c(criteria.selected.colnames, '0 à 19 ans')
    }
    
    if (mat[row, 'diploma']) {
      criteria.selected[['diploma']] <- 1
      criteria.selected.colnames <- c(criteria.selected.colnames, 'diploma')
    }
    x.use <- x[, '11', criteria.selected.colnames]
    result <- c(result, list(GetValidYears(x.use, criteria.selected)))
    
  }
  return(result)
}

GetValidYears <- function(x.use, criteria.selected) {
  # Gets all valid for selected criteria
  # Args:
  #   x.use : Two dimensional matrix containing only the selected criteria as column
  #   criteria.selected: A list of criteria with a logical value
  # Returns:
  #   A list with the criteria selected and the years where all of these criteria contain data. 
  x.use <- as.matrix(x.use)
  row.no.na <- which(rowSums(is.na(x.use)) == 0, arr.ind = TRUE)
  row.no.na.years <- rownames(as.matrix(row.no.na))
  valid.years <- c(as.numeric(row.no.na.years))
  return (c(list('criteria' = criteria.selected), list('years' = c(valid.years))))
} 
RemoveComma <- function(x, from = 3) {
  # Removes comma from a character numeric matrix and return the corresponding numeric 
  # values as vector 
  # Args:
  #   x   : A two dimensional matrix containing characters number with commas
  #   from: The index of column to start 
  # Returns:
  #   A numeric vector corresponding to the values contained in the x matrix    
  for (i in from:ncol(x)) {
    x[, i] <- as.numeric(gsub(",", "", x[, i]))
  }
  return(as.vector(x))
}

inc <- function(x)
  # Increments a number
  # Args:
  #   x : The number to increment
  # Returns:
  #   x + 1
{
  eval.parent(substitute(x <- x + 1))
}






