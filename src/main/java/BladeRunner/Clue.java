package BladeRunner;

import BladeRunner.Table.CluesTable;

public class Clue {
    private CluesTable.Type type;
    private String clue;
    private NPC witness;

    public Clue(CluesTable.Type type, String clue) {
        this.type = type;
        this.clue = clue;
    }

    public Clue(CluesTable.Type type, NPC witness) {
        this.type = type;
        this.witness = witness;
    }

    public Clue(){}

    public CluesTable.Type getType() {
        return type;
    }

    public void setType(CluesTable.Type type) {
        this.type = type;
    }

    public String getClue() {
        return clue;
    }

    public void setClue(String clue) {
        this.clue = clue;
    }

    public NPC getWitness() {
        return witness;
    }

    public void setWitness(NPC witness) {
        this.witness = witness;
    }

    public String toString() {
        String result;
        if (this.type.equals(CluesTable.Type.WITNESS)) {
            result = type.getDescription() + ": " + witness.toString();
        } else {
            result = type.getDescription() + ": " + clue.toString();
        }
        return result;
    }
}
