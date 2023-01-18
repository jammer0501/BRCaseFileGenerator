package BladeRunner;

public class Clue {
    private String type;
    private String clue;
    private NPC witness;

    public Clue(String type, String clue) {
        this.type = type;
        this.clue = clue;
    }

    public Clue(String type, NPC witness) {
        this.type = type;
        this.witness = witness;
    }

    public Clue(){}

    public String getType() {
        return type;
    }

    public void setType(String type) {
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
}
