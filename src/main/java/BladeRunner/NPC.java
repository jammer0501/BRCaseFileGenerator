package BladeRunner;

import BladeRunner.Table.NPCTables;

public class NPC {
    private NPCTables.Type type;
    private String occupation;
    private String quirk;
    private String firstName;
    private String lastName;

    public NPC(NPCTables.Type type, String occupation, String quirk, String firstName, String lastName) {
        this.type = type;
        this.occupation = occupation;
        this.quirk = quirk;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public NPCTables.Type getType() {
        return type;
    }

    public void setType(NPCTables.Type type) {
        this.type = type;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getQuirk() {
        return quirk;
    }

    public void setQuirk(String quirk) {
        this.quirk = quirk;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String toString() {
        return type + ": " +firstName + " " + lastName + " is a " + occupation + " whose quirk is: " + quirk;
    }
}
