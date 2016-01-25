# Prepare data 
crimes <- read.csv("../data/crimes-2012-2002.csv", header=TRUE, sep = ",", dec = ".", check.names = FALSE)
age <- read.csv("../data/pop-region-2011.csv", header=TRUE, sep = ",", dec = ".", check.names = FALSE)
unemployment <- read.csv("../data/chomage-2000T1-20011T4-region-2016.csv", header=TRUE, sep = ",", dec = ".", check.names = FALSE)
pib <- read.csv("../data/pib.csv", header=TRUE, sep = ",", dec = ".", check.names = FALSE)
diploma <- read.csv("../data/diplome.csv", header=TRUE, sep = ",", dec = ".", check.names = FALSE)

#delete comma in the age matrix.
age <- as.matrix(age)
for(i in 1:dim(age)[2]) {
  age[, i] <- gsub(",", "", age[, i])
}

# delete "total" column
tmp <- age[,-dim(age)]
tmp.mat <- as.matrix(tmp)

# Add crimes, unemployment, pib and diploma. 
mydata <- cbind(tmp.mat, crimes$`2009`, unemployment$`2009`, pib$`2009`, diploma$`2006`)

# Add column names
colnames(mydata)[7:10]<-c("crimes", "chomage", "pib", "diplome")


#clustering


mydata <- na.omit(mydata) # listwise deletion of missing
mydata <- as.data.frame.matrix(mydata);
for(i in 2:ncol(mydata)) {
  mydata[, i] <- scale(as.numeric(mydata[, i])) # standardize variables
}

# Hierarchical Agglomerative

d <- dist(mydata[,2:ncol(mydata)], method="euclidean")
fit <- hclust(d, method = "ward")
plot(fit, hang = -1, labels = mydata[,1], xlab="Classification des région en 2009")

groups <- cutree(fit, k=5) # cut tree into 5 cluster
# draw dendogram with red borders around the 5 clusters
#rect.hclust(fit, k=5, border="red") 



