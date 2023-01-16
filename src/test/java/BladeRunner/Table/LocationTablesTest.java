package BladeRunner.Table;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class LocationTablesTest {

    @Test
    void getSectorOneLocation() {
        System.out.println(LocationTables.SectorOneLocationsTable.createLocation().toString());
    }

    @Test
    void getSectorTwoLocation() {
        System.out.println(LocationTables.SectorTwoLocationsTable.createLocation().toString());
    }

    @Test
    void getSectorFourLocation() {
        System.out.println(LocationTables.SectorFourLocationsTable.createLocation().toString());
    }

    @Test
    void getSectorFiveLocation() {
        System.out.println(LocationTables.SectorFiveLocationsTable.createLocation().toString());
    }
}