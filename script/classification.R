# Loads utility functions
source('util.R')

# Prepares data 
crimes <- read.csv("../data/crimes-2012-2002.csv", header=TRUE, sep = ",", dec = ".", check.names = FALSE)
unemployment <- read.csv("../data/chomage-2000T1-20011T4-region-2016.csv", header=TRUE, sep = ",", dec = ".", check.names = FALSE)
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

#Sorts regions according to their code
crimes <- crimes[order(crimes$Code),]
unemployment <- unemployment[order(unemployment$Code),]
gdp <- gdp[order(gdp$Code),]
diploma <- diploma[order(diploma$Code),]

# Get code and region names
regions.code  <- crimes[, 1]
regions.names <- crimes[, 2]

# Builds a 3d matrix containing all the time series dim(1) corresponds to time 
# dim(2) the regions and dim(3) the variables. 
age.names <- names(age[['2009']][,-c(1,2, 8)])
variableNames <- c(age.names, "crimes", "unemployment", "GDP", "diploma")
regions.data <- array(dim = c(length(years), length(regions.names), length(variableNames)),
                           dimnames = list(years, regions.code, variableNames))

for (year in as.character(years)) {
  regions.data[year, ,'0 à 19 ans'] <- age[[year]][,'0 à 19 ans']
  regions.data[year, ,'20 à 39 ans'] <- age[[year]][,'20 à 39 ans']
  regions.data[year, ,'40 à 59 ans'] <- age[[year]][,'40 à 59 ans']
  regions.data[year, ,'60 à 74 ans'] <- age[[year]][,'60 à 74 ans']
  regions.data[year, ,'75 ans et plus'] <- age[[year]][,'75 ans et plus']
  
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

# Add crimes, unemployment, gdp and diploma. 
#regions_2016 <- cbind(regions_2016.names, age$`2009`[,-c(1,2,ncol(age$`2009`))], crimes$`2009`, unemployment$`2009`, gdp$`2009`, diploma$`2006`)

# Add column names
#colnames(regions_2016)[8:11]<-c("crimes", "unemployment", "gdp", "diplome")

#clustering
library(fpc)
library(TSclust)

#regions_2016.use <- regions_2016[,3:ncol(regions_2016)]
#regions_2016.use <- na.omit(regions_2016.use) # listwise deletion of missing
#regions_2016.use = scale(regions_2016.use) # standardize variables

# Hierarchical Clustering based on similarity of permutation distributions
regions.pdclust <- pdclust(regions.data, clustering.method = "average")

#regions_2016.dist <- dist(regions_2016.use, method="euclidean")
#regions_2016.hclust <- hclust(regions_2016.dist, method = "average")
#regions_2016.hclust$labels <- regions_2016.names$Code #add hclust labels

plot(regions.pdclust, hang = -0.01, cex=0.7, xlab="Classification des région en 2009", 
     timeseries.as.labels = FALSE, labels = regions.names)

# Estimates the best number of clusters
pamk.best <- pamk(regions.pdclust$D, krange = 3:10) 
regions.nbclust <- pamk.best$nc

# Cuts tree into nbclust clusters
regions.groups <- cutree(regions.pdclust, k = regions.nbclust)

# Draws dendogram with red borders around the nbclust clusters
rect.hclust(regions.pdclust, k=regions.nbclust, border="red") 


# Writes result in JSON
ClassificationToJSON(regions, filename = "classification.json")






