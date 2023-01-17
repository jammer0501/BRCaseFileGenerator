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

    @Test
    void getSectorNineLocation() {
        System.out.println(LocationTables.SectorNineLocationsTable.createLocation().toString());
    }

    @Test
    void getSectorTwelveLocation() {
        System.out.println(LocationTables.SectorTwelveLocationsTable.createLocation().toString());
    }

    @Test
    void getBeyondDowntownLocation() {
        System.out.println(LocationTables.BeyondDowntownLocationsTable.createLocation().toString());
    }

    @Test
    void getGenerateLocation() {
        System.out.println(LocationTables.generateLocation().toString());
    }
}