package BladeRunner.Table;

import BladeRunner.Clue;
import BladeRunner.NPC;

public class CluesTable {
    public enum Type {
        WITNESS("Witness"),
        FORENSIC("Forensic Evidence"),
        RECORDING("Recording"),
        DOCUMENTS("Documents"),
        RUMOURS("Rumours"),
        TIP("Anonymous Tip"),
        ITEM("Item");

        public final String description;

        Type(String description) {
            this.description = description;
        }

        public String getDescription() {return description;}

        public static CluesTable.Type getRandomClueType() {
            CluesTable.Type[] types = values();
            // set weight
            int[] indices = {0,0,1,2,3,4,5,6};

            // get sector
            return types[indices[(int)(Math.random() * indices.length)]];
        }
    }

    public static Clue createWitnessClue() {
        return new Clue(Type.WITNESS, NPCTables.generateNPC());
    }

    public static Clue createForensicsClue() {
        String[] items = {"Ballistics","Toxicology","DNA","Fingerprints","Autopsy","Blood"};
        return new Clue(Type.FORENSIC, items[(int)(Math.random() * items.length)]);
    }

    public static Clue createRecordingClue() {
        String[] items = {"Security Camera","Photo","Voice"};
        return new Clue(Type.RECORDING, items[(int)(Math.random() * items.length)]);
    }

    public static Clue createDocumentsClue() {
        String[] items = {"ID Card","Ticket","Brochure","Legal Document","Note","Letter"};
        return new Clue(Type.DOCUMENTS, items[(int)(Math.random() * items.length)]);
    }

    public static Clue createRumoursClue() {
        String[] items = {"In the Street","In the Department","In the Media"};
        return new Clue(Type.RUMOURS, items[(int)(Math.random() * items.length)]);
    }

    public static Clue createTipClue() {
        String[] items = {"Call","Note","Messenger"};
        return new Clue(Type.TIP, items[(int)(Math.random() * items.length)]);
    }

    public static Clue createItemClue() {
        String[] items = {"Gun","Clothing","Statuette","Jewelry","Vehicle","Data Disc / Memory C/ube"};
        return new Clue(Type.ITEM, items[(int)(Math.random() * items.length)]);
    }

}
