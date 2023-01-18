package BladeRunner.Table;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CluesTableTest {

    @Test
    void enumClueType() {
        System.out.println(CluesTable.Type.getRandomClueType().getDescription());
    }

}