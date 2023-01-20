import BladeRunner.NPC;
import BladeRunner.Table.*;

import java.util.concurrent.ThreadLocalRandom;

public class Generator {
    public static String createCase() {
        StringBuffer emergingCase = new StringBuffer();

        // create case
        emergingCase.append("ASSIGNMENT: \n");
        emergingCase.append(AssignmentTables.generateAssignment() + "\n");

        // create NPCs
        emergingCase.append("NPCS: \n");
        int numberOfNPCsToCreate = (ThreadLocalRandom.current().nextInt(1, 3 + 1)+3);
        NPC[] npcs = NPCTables.generateNPCs(numberOfNPCsToCreate);
        for(int i=0; i<numberOfNPCsToCreate; i++){
            emergingCase.append(npcs[i].toString()+"\n");
        }

        // scene of the crime
        emergingCase.append("LOCATIONS: \n");
        for (int i=0; i<3; i++) {
            emergingCase.append(LocationTables.generateLocation() + "\n");
        }

        //clues
        emergingCase.append("CLUES: \n");
        for (int i=0; i<5; i++) {
            emergingCase.append(CluesTable.generateClue() + "\n");
        }

        //mood pieces
        emergingCase.append("MOODS: \n");
        for (int i=0; i<3; i++) {
            emergingCase.append(SupplementaryTables.createMoodPiece() + "\n");
        }

        //twist
        emergingCase.append("TWIST: \n");
        emergingCase.append(SupplementaryTables.createTwist() + "\n");

        //final confrontation
        emergingCase.append("FINAL CONFRONTATION: \n");
        emergingCase.append(SupplementaryTables.createTwist() + "\n");

        return emergingCase.toString();
    }
}
