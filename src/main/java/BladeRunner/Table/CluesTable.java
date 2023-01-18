package BladeRunner.Table;

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
}
