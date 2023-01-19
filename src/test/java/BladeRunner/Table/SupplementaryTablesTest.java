package BladeRunner.Table;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SupplementaryTablesTest {

    @Test
    void createTwist() {
        System.out.println(SupplementaryTables.createTwist());
    }

    @Test
    void createFinalConfrontation() {
        System.out.println(SupplementaryTables.createFinalConfrontation());
    }

    @Test
    void createMoodPiece() {
        System.out.println(SupplementaryTables.createMoodPiece().toString());
    }
}