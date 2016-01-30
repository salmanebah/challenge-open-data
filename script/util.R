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


ClassificationToJSON <- function(regions, use.crime = TRUE, use.age = TRUE, use.diploma = TRUE, 
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
  write(regions.jsonResult, file = paste(path, filename, sep = ""))
}

