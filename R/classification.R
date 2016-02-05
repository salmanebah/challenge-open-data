# Loads useful functions
source('util.R')

# Prepares data 
crime <- read.csv("../data/crimes-2012-2002.csv", header=TRUE, sep = ",", dec = ".", check.names = FALSE)
unemployment <- read.csv("../data/chomage-1990T1-20011T4-region-2016.csv", header=TRUE, sep = ",", dec = ".", check.names = FALSE)
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

# Order variables by region codes
crime <- crime[order(crime$Code), ]
diploma <- diploma[order(diploma$Code), ]
unemployment <- unemployment[order(unemployment$Code), ]
gdp <- gdp[order(gdp$Code), ]

# #Sorts regions according to their code
# crimes <- crimes[order(crimes$Code),]
# unemployment <- unemployment[order(unemployment$Code),]
# gdp <- gdp[order(gdp$Code),]
# diploma <- diploma[order(diploma$Code),]
# 
# Get code and region names
 regions <- vector("list")
 regions$code  <- crime[, 1]
 regions$names <- crime[, 2]
# 
# # Builds a 3d matrix containing all the time series dim(1) corresponds to time 
# # dim(2) the regions and dim(3) the variables. 
# age.names <- names(age[['2009']][,-c(1,2, 8)])
# variableNames <- c(age.names, "crimes", "unemployment", "GDP", "diploma")
# regions.data <- array(dim = c(length(years), length(regions.names), length(variableNames)),
#                            dimnames = list(years, regions.code, variableNames))
# 
# for (year in as.character(years)) {
#   regions.data[year, ,'0 à 19 ans'] <- age[[year]][,'0 à 19 ans']
#   regions.data[year, ,'20 à 39 ans'] <- age[[year]][,'20 à 39 ans']
#   regions.data[year, ,'40 à 59 ans'] <- age[[year]][,'40 à 59 ans']
#   regions.data[year, ,'60 à 74 ans'] <- age[[year]][,'60 à 74 ans']
#   regions.data[year, ,'75 ans et plus'] <- age[[year]][,'75 ans et plus']
#   
#   if (!is.null(crimes[[year]])) {
#     regions.data[year, , 'crimes'] <- crimes[[year]]
#   }
#   
#   if (!is.null(unemployment[[year]])) {
#     regions.data[year, , 'unemployment'] <- unemployment[[year]]
#   }
#   
#   if (!is.null(gdp[[year]])) {
#     regions.data[year, , 'GDP'] <- gdp[[year]]
#   }
#   
#   if (!is.null(diploma[[year]])) {
#     regions.data[year, , 'diploma'] <- diploma[[year]]
#   }
# }
# 
# # Clustering
# library(fpc)
# library(TSclust)
# 
# # Hierarchical Clustering based on similarity of permutation distributions
# regions.pdclust <- pdclust(regions.data, clustering.method = "average")
# plot(regions.pdclust, hang = -0.01, cex=0.7, xlab="Classification des région en 2009", 
#      timeseries.as.labels = FALSE, labels = regions.names)
# 
# # Estimates the best number of clusters
# pamk.best <- pamk(regions.pdclust$D, krange = 3:10) 
# regions.nbclust <- pamk.best$nc
# 
# # Cuts tree into nbclust clusters
# regions.groups <- cutree(regions.pdclust, k = regions.nbclust)
# 
# # Draws dendogram with red borders around the nbclust clusters
# rect.hclust(regions.pdclust, k=regions.nbclust, border="red") 
# 
# 
# # Writes result in JSON
# ClassificationToJSON(regions, filename = "classification.json")
# 
# 
# 
# 
# 
# 
mat <- matrix(nrow = 31, ncol = 5)
colnames(mat) <- c('crime', 'age', 'diploma', 'gdp', 'unemployment')
mat.nbCombination <- 31
for (i in seq(1:mat.nbCombination)) {
  i.bits <- rawToBits(as.raw(i))
  mat[i, ] <- as.logical(i.bits[1:5])
}

criteria <- vector("list")
regions.cluster <- vector("list")

for (row in 1:mat.nbCombination) {
  criteria$crime    <- NULL
  criteria$age      <- NULL
  criteria$diploma  <- NULL
  criteria$gdp      <- NULL
  criteria$unemployment <- NULL
  criteria$filename <- "classification-new-region"
  
    if (mat[row, 'crime']) {
    criteria$crime    <- crime  
    criteria$filename <- paste(criteria$filename, "crime", sep = "_")
  }
  
  if (mat[row, 'age']) {
    criteria$age    <- age  
    criteria$filename <- paste(criteria$filename, "age", sep = "_")
  }
  
  if (mat[row, 'diploma']) {
    criteria$diploma  <- diploma
    criteria$filename <- paste(criteria$filename, "diploma", sep = "_")
  }
  
  if (mat[row, 'gdp']) {
    criteria$gdp      <- gdp
    criteria$filename <- paste(criteria$filename, "gdp", sep = "_")
  }
  
  if (mat[row, 'unemployment']) {
    criteria$unemployment <- unemployment
    criteria$filename <- paste(criteria$filename, "unemployment", sep = "_")
  }
  criteria$filename <- paste(criteria$filename, "json", sep = ".")
  regions.cluster[[as.character(row)]] <- ClassifyRegions(regions, criteria, years = seq(1990, 2015), 
                                     cluster.min = 2, cluster.max = 10, 
                                     filename = criteria$filename)
}  

# Write raw data year by year in JSON format
library(hash)
regions.names.hash <- hash(keys=regions$code, values=regions$names)
data.all.criteria <- regions.cluster$`31`$data
data.brute <- toJSON(FormatDataByYear(data.all.criteria, hash = regions.names.hash, seq(1990, 2015)), auto_unbox = TRUE)
write(data.brute, file = '../mongoDB-init/years.json')