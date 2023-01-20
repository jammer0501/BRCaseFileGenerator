package BladeRunner.Table;

import BladeRunner.NPC;
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

    @Test
    void createCrimeNPC() {
        System.out.println(NPCTables.createCrimeNPC().toString());
    }

    @Test
    void createScienceNPC() {
        System.out.println(NPCTables.createScienceNPC().toString());
    }

    @Test
    void createTechNPC() {
        System.out.println(NPCTables.createTechNPC().toString());
    }

    @Test
    void createOtherNPC() {
        System.out.println(NPCTables.createOtherNPC().toString());
    }

    @Test
    void getRandomNPCType() {
        System.out.println(NPCTables.Type.getRandomNPCType().toString());
    }

    @Test
    void generateNPC() {
        System.out.println(NPCTables.generateNPC().toString());
    }

    @Test
    void generateNPCs() {
        NPC[] npcs = NPCTables.generateNPCs(5);
        for (int i=0; i<5; i++) {
            System.out.println(npcs[i].toString());
        }
    }
}