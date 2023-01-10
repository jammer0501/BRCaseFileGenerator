package BladeRunner.Table;

import BladeRunner.NPC;

public class NPCTables {
    public enum Type {CORPORATE, SECURITY, ENTERTAINMENT, STREET, CRIME, SCIENCE, TECH, OTHER;}

    public static NPC createCorporateNPC() {
        String[] occupations = {"Corporate Agent", "Lab Worker", "Administrator", "Manager",
                "Security Officer, Liaison Officer"};
        String[] quirks ={"Secret Allegiance", "Serial liar", "Constant flirt", "Overuses perfume",
                "Twitching eye", "Sarcastic"};
        String[] firstNames = {"Alexia", "Remi", "Clara", "Maximillian", "Priya", "Sandor"};
        String[] lastNames = {"Reisch", "Shalhoub", "Stratton", "Voldokov", "Singh", "Pentecost"};

        return new NPC(Type.CORPORATE,
                occupations[(int)(Math.random() * occupations.length)],
                quirks[(int)(Math.random() * quirks.length)],
                firstNames[(int)(Math.random() * firstNames.length)],
                lastNames[(int)(Math.random() * lastNames.length)]);
    }
}
