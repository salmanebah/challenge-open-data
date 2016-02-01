package controllers;

import models.classification.Classification;
import models.classification.ClassificationDAO;
import models.classification.Criteria;
import play.libs.Json;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {

    public Result classes(Integer year) {
        Criteria criteria = new Criteria(0, 0, 1, 1, 0);
        Classification classification = ClassificationDAO.findByCriteriaAndYear(criteria,year);
        if(classification == null) return notFound();
        return ok(Json.toJson(classification));
    }

    public Result index() {

        return ok(index.render("Your new application is ready."));
    }

}
