package BladeRunner.Table;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class NPCTablesTest {

    @Test
    void createCorporateNPC() {
        System.out.println(NPCTables.createCorporateNPC().toString());
    }

    @Test
    void createSecurityNPC() {
        System.out.println(NPCTables.createSecurityNPC().toString());
    }

    @Test
    void createEntertainmentNPC() {
        System.out.println(NPCTables.createEntertainmentNPC().toString());
    }

    @Test
    void createStreetNPC() {
        System.out.println(NPCTables.createStreetNPC().toString());
    }
}