package models.classification;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongodb.morphia.annotations.Embedded;
import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.converters.IntegerConverter;

import java.util.List;

@Entity(value = "classifications", noClassnameStored = true)

public class Classification {
    @Embedded
    @JsonProperty
    Criteria criteria;
    Integer newregion;
    @JsonProperty
    Integer year;
    @Embedded
    @JsonProperty
    Float score;
    @JsonProperty
    List<Cluster> clusters;
}
