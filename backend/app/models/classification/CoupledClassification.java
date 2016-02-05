package models.classification;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by ahasall on 04/02/16.
 */
public class CoupledClassification {
    @JsonProperty
    Classification oldClassification;
    @JsonProperty
    Classification newClassification;

    public CoupledClassification(Classification oldClassification, Classification newClassification) {
        this.oldClassification = oldClassification;
        this.newClassification = newClassification;
    }
}
