package models.classification;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongodb.morphia.annotations.Entity;

@Entity(value = "criteria", noClassnameStored = true)
public class Criteria {
    @JsonProperty
    int crime;
    @JsonProperty
    int population;
    @JsonProperty
    int education;
    @JsonProperty
    int gdp;
    @JsonProperty
    int employment;

    public Criteria(int crime, int population, int education, int gdp, int employment) {
        this.crime = crime;
        this.population = population;
        this.education = education;
        this.gdp = gdp;
        this.employment = employment;
    }

    public Criteria() {
    }
}
