# Loads useful functions
source('util.R')

# Prepares data 
crime <- read.csv("../data/crimes-2012-2002.csv", header=TRUE, sep = ",", 
                  dec = ".", check.names = FALSE)
unemployment <- read.csv("../data/chomage-1990T1-20011T4-region-2016.csv",header=TRUE, 
                         sep = ",", dec = ".", check.names = FALSE)
gdp <- read.csv("../data/pib.csv", header=TRUE, sep = ",", dec = ".", check.names = FALSE)
diploma <- read.csv("../data/diploma.csv", header=TRUE, sep = ",", dec = ".", check.names = FALSE)

# Reads population data from 1990 to 2015
years <- seq(1990, 2015)
age <- vector("list", length(years))
names(age) <- years

for(year in as.character(years)) {
  path = paste("../data/pop-region-", year, ".csv", sep = "")
  tmp <- read.csv(path, header=TRUE, sep = ",", dec = ".", check.names = FALSE)
  tmp <- tmp[order(tmp$Code),]
  age[[year]] <- tmp
  age[[year]] <- RemoveComma(age[[year]])
}

# Prepares old regions data
old.regions.crime <- read.csv("../data/old_regions/crimes-region-2002-2012.csv", 
                              header=TRUE, sep = ",", dec = ".", check.names = FALSE)
old.regions.unemployment <- read.csv("../data/old_regions/chomage-region-1990-2011.csv", 
                                     header=TRUE, sep = ",", dec = ".", check.names = FALSE)
old.regions.gdp <- read.csv("../data/old_regions/pib-region-2002-2009.csv", header=TRUE, 
                            sep = ",", dec = ".", check.names = FALSE)
old.regions.diploma <- read.csv("../data/old_regions/diploma-region-1990-2011.csv", 
                                header=TRUE, sep = ",", dec = ".", check.names = FALSE)

# Reads population data from 1990 to 2015
years <- seq(1990, 2015)
old.regions.age <- vector("list", length(years))
names(old.regions.age) <- years

for(year in as.character(years)) {
  path = paste("../data/old_regions/pop-region-", year, ".csv", sep = "")
  tmp <- read.csv(path, header=TRUE, sep = ",", dec = ".", check.names = FALSE)
  tmp <- tmp[order(tmp$Code),]
  old.regions.age[[year]] <- tmp
  old.regions.age[[year]] <- RemoveComma(old.regions.age[[year]])
}

# Computes the classification for 2016 regions
ClassifyRegionsAllCombination(crime, unemployment, gdp, diploma, age, is.new.regions = 1, 
         path = '../mongoDB-init/', filename = 'classification-region-2016.json')

# Computes the classification for old regions
ClassifyRegionsAllCombination(old.regions.crime, old.regions.unemployment, old.regions.gdp, 
                              old.regions.diploma, old.regions.age, is.new.regions = 0, cluster.min = 3,
                              path = '../mongoDB-init/', filename = 'classification-old-regions.json', 
                              raw.data.filename = "raw-data-old-regions-by-year.json", 
                              valid.years.filename = "valid-years-old-regions.json")