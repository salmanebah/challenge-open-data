package models.classification;

import com.fasterxml.jackson.annotation.JsonProperty;
import models.Region;
import org.mongodb.morphia.annotations.Entity;

import java.util.List;
@Entity(value = "clusters", noClassnameStored = true)
public class Cluster {
    @JsonProperty
    List<Region> regions;
}
