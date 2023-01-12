package BladeRunner.Table;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class LocationTablesTest {

    @Test
    void getSectorOneLocation() {
        LocationTables locationTables = new LocationTables();
        System.out.println(locationTables.getSectorOneLocation().toString());
    }
}