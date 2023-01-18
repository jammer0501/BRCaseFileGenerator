package BladeRunner.Table;

import org.junit.jupiter.api.Test;

class CluesTableTest {

    @Test
    void enumClueType() {
        System.out.println(CluesTable.Type.getRandomClueType().getDescription());
    }

    @Test
    void createWitness() {
        System.out.println(CluesTable.createWitnessClue().toString());
    }

    @Test
    void createForensicsClue() {
        System.out.println(CluesTable.createForensicsClue().toString());
    }

    @Test
    void createRecordingClue() {
        System.out.println(CluesTable.createRecordingClue().toString());
    }

    @Test
    void createDocumentsClue() {
        System.out.println(CluesTable.createDocumentsClue().toString());
    }

    @Test
    void createRumoursClue() {
        System.out.println(CluesTable.createRumoursClue().toString());
    }

    @Test
    void createTipClue() {
        System.out.println(CluesTable.createTipClue().toString());
    }

    @Test
    void createItemClue() {
        System.out.println(CluesTable.createItemClue().toString());
    }
}