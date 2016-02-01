package models.classification;

import com.mongodb.MongoClient;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.converters.StringConverter;
import org.mongodb.morphia.query.Query;

import java.time.Year;

/**
 * Created by ahasall on 28/01/16.
 */
public class ClassificationDAO {
    static final Datastore ds;

    static {
        final Morphia morphia = new Morphia();

        // tell Morphia where to find my classes
        morphia.mapPackage("models.classification.Classification");

        // create the dataStore connecting to the default port on the local host
        ds = morphia.createDatastore(new MongoClient(), "cod");
        ds.ensureIndexes(Classification.class);
    }
    /**
     * Find a Classification by criteria
     * @param criteria the criteria
     */
    public static Classification findByCriteria(Criteria criteria) {
        Query<Classification> query = ds.createQuery(Classification.class);
        query.field("criteria").equal(criteria);
        Classification classification = query.get();
        return classification;
    }
    public static Classification findByCriteriaAndYear(Criteria criteria, Integer year) {
        Query<Classification> query = ds.createQuery(Classification.class);
        query.field("criteria").equal(criteria);
        query.field("year").equal(year);
        Classification classification = query.get();
        return classification;
    }
}
