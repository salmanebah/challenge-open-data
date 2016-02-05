package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.classification.Classification;
import models.classification.ClassificationDAO;
import models.classification.CoupledClassification;
import models.classification.Criteria;
import play.libs.Json;
import play.mvc.*;

import views.html.*;

import java.util.Map;

public class Application extends Controller {

    public Result clusters(Integer year) {
        Criteria criteria = Json.fromJson(request().body().asJson(), Criteria.class);
        Classification oldClassification = ClassificationDAO.findByCriteriaAndYear(criteria,year,0);
        Classification newClassification = ClassificationDAO.findByCriteriaAndYear(criteria,year,1);

        if(newClassification == null || oldClassification == null) return notFound();
        response().setContentType("application/json");

        CoupledClassification classification = new CoupledClassification(oldClassification, newClassification);
        return ok(Json.toJson(classification));
    }

    public Result index() {

        return ok(index.render());
    }

}
