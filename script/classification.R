# Prepare data 
crimes <- read.csv("../data/crimes-2012-2002.csv", header=TRUE, sep = ",", dec = ".", check.names = FALSE)
age <- read.csv("../data/pop-region-2011.csv", header=TRUE, sep = ",", dec = ".", check.names = FALSE)
unemployment <- read.csv("../data/chomage-2000T1-20011T4-region-2016.csv", header=TRUE, sep = ",", dec = ".", check.names = FALSE)
pib <- read.csv("../data/pib.csv", header=TRUE, sep = ",", dec = ".", check.names = FALSE)
diploma <- read.csv("../data/diploma.csv", header=TRUE, sep = ",", dec = ".", check.names = FALSE)

#Sort regions according to their code
crimes <- crimes[order(crimes$Code),]
age <- age[order(age$Code),]
unemployment <- unemployment[order(unemployment$Code),]
pib <- pib[order(pib$Code),]
diploma <- diploma[order(diploma$Code),]

# Get code and region names
regions_2016.names <- crimes[, 1:2]

#delete comma in the age matrix.
#age <- as.matrix(age)
#for(i in 1:dim(age)[2]) {
#  age[, i] <- gsub(",", "", age[, i])
#}

# delete "total" column
#tmp <- age[,-dim(age)]


# Add crimes, unemployment, pib and diploma. 

regions_2016 <- cbind(regions_2016.names, age[,-c(1,2,ncol(age))], crimes$`2009`, unemployment$`2009`, pib$`2009`, diploma$`2006`)

# Add column names
colnames(regions_2016)[8:11]<-c("crimes", "chomage", "pib", "diplome")


#clustering

regions_2016.use <- regions_2016[,3:ncol(regions_2016)]
regions_2016.use <- na.omit(regions_2016.use) # listwise deletion of missing
#regions_2016.use <- as.matrix(regions_2016.use); # transform to character matrix. 
#for(i in 3:ncol(regions_2016)) {
 # regions_2016[, i] <- scale(as.numeric(regions_2016[, i])) # standardize variables
#}
# standardize variables
regions_2016.use = scale(regions_2016.use)

# Hierarchical Agglomerative

regions_2016.dist <- dist(regions_2016.use, method="euclidean")
regions_2016.hclust <- hclust(regions_2016.dist, method = "average")
#fit labels
regions_2016.hclust$labels <- regions_2016.names$Code

plot(regions_2016.hclust, hang = -0.01, cex=0.7, labels = regions_2016.names$`Regions-2016`, 
     xlab="Classification des région en 2009")

groups <- cutree(regions_2016.hclust, k=6) # cut tree into 5 cluster
# draw dendogram with red borders around the 5 clusters
rect.hclust(regions_2016.hclust, k=6, border="red") 

# Write result
library(jsonlite)
library(hash)
criteria = list('crime'=1, 'population'=1, 'education'=1, 'APB'=1, 'employment'=1)
tmp <- list(year=2009, criteria=criteria)

h <- hash(keys=regions_2016.names$Code, values=regions_2016.names$`Regions-2016`)
grp <- invert(hash(groups))

classes <- c()
list_regions <- list()
for(class in keys(grp)) {
  regions = list()
  for(code_region in grp[[as.character(class)]]) {
    regions[[length(regions) + 1]] <- list('id'=as.numeric(code_region), 'name'=iconv(h[[as.character(code_region)]], to="utf-8"))
  }
  list_regions[[length(list_regions) + 1]] <- list('regions'=c(regions))
}
classes <- list_regions 
tmp <- list(year=2009, criteria=criteria, classes=c(classes))
write(toJSON(tmp, pretty = TRUE, auto_unbox = TRUE), file = "../mongoDB-init/classification_2009.json")


result <- function(groups, regions, criteria) {
   
}







