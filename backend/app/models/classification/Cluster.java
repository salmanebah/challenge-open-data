package models.classification;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mongodb.DBObject;
import models.Region;
import org.mongodb.morphia.annotations.Entity;

import java.util.List;
@Entity(value = "clusters", noClassnameStored = true)
public class Cluster {
    @JsonProperty
    List<Region> regions;
    @JsonProperty
    DBObject medoid;

}
