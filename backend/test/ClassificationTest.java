
import models.classification.Classification;
import models.classification.ClassificationDAO;
import models.classification.Criteria;
import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.assertTrue;

public class ClassificationTest {
    @Test
    public void testFindByCriteria() {
        Criteria criteria = new Criteria(0, 0, 1, 1, 0);
        Classification classification = ClassificationDAO.findByCriteria(criteria);
        assertThat(classification, is(notNullValue()));
    }


}
