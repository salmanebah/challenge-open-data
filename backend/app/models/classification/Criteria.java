package models.classification;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongodb.morphia.annotations.Entity;

@Entity(value = "criteria", noClassnameStored = true)
public class Criteria {
    @JsonProperty
    int crime;
    @JsonProperty
    int education;
    @JsonProperty
    int employment;
    @JsonProperty
    int APB;
    @JsonProperty
    int population;

    public Criteria(int crime, int education, int employment, int APB, int population) {
        this.crime = crime;
        this.education = education;
        this.employment = employment;
        this.APB = APB;
        this.population = population;
    }

    public Criteria() {
    }
}
