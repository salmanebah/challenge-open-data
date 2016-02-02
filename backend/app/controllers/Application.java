package controllers;

import models.classification.Classification;
import models.classification.ClassificationDAO;
import models.classification.Criteria;
import play.libs.Json;
import play.mvc.*;

import views.html.*;

import java.util.Map;

public class Application extends Controller {

    public Result clusters(Integer year) {
        Criteria criteria = Json.fromJson(request().body().asJson(), Criteria.class);
        Classification classification = ClassificationDAO.findByCriteriaAndYear(criteria,year);
        if(classification == null) return notFound();
        response().setContentType("application/json");
        return ok(Json.toJson(classification));
    }

    public Result index() {

        return ok(index.render("Your new application is ready."));
    }

}
