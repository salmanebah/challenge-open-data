package models.classification;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.mongodb.morphia.annotations.Entity;

@Entity(value = "criteria", noClassnameStored = true)
public class Criteria {
    @JsonProperty
    int crime;
    @JsonProperty
    int age;
    @JsonProperty
    int diploma;
    @JsonProperty
    int gdp;
    @JsonProperty
    int unemployment;

    public Criteria(int crime, int age, int diploma, int gdp, int unemployment) {
        this.crime = crime;
        this.age = age;
        this.diploma = diploma;
        this.gdp = gdp;
        this.unemployment = unemployment;
    }

    public Criteria() {
    }
}
