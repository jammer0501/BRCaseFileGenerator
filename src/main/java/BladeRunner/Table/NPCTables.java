package BladeRunner.Table;

import BladeRunner.NPC;

public class NPCTables {
    public enum Type {CORPORATE, SECURITY, ENTERTAINMENT, STREET, CRIME, SCIENCE, TECH, OTHER;}

    public static NPC createCorporateNPC() {
        String[] occupations = {"Corporate Agent", "Lab Worker", "Administrator", "Manager",
                "Security Officer", "Liaison Officer"};
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

    public static NPC createSecurityNPC() {
        String[] occupations = {"Cop", "Security Guard", "Bouncer", "Mercenary", "Soldier", "Body Guard"};
        String[] quirks ={"Overly sentimental", "Highly strung", "Always chewing on something", "Constant comedian",
                "Drug user", "Aloof"};
        String[] firstNames = {"Prei", "Magda", "Wade", "Kilo", "Alexander", "Luna"};
        String[] lastNames = {"Haden", "Leyoun", "Kawasaki", "Bharat", "Marsten", "Farahani"};

        return new NPC(Type.SECURITY,
                occupations[(int)(Math.random() * occupations.length)],
                quirks[(int)(Math.random() * quirks.length)],
                firstNames[(int)(Math.random() * firstNames.length)],
                lastNames[(int)(Math.random() * lastNames.length)]);
    }

    public static NPC createEntertainmentNPC() {
        String[] occupations = {"Actor", "Singer", "Poet", "Dancer", "Celeb", "Designer"};
        String[] quirks ={"Fast talker", "Oily skin", "Instantly likeable", "Moves constantly",
                "Patronising", "Glamourous"};
        String[] firstNames = {"Ariana", "Joshua", "Dot", "Gabor", "Ava", "Seo-joon"};
        String[] lastNames = {"Polokov", "Izzo", "McMillan", "Nanjiani", "Rodriguez", "Jeong"};

        return new NPC(Type.ENTERTAINMENT,
                occupations[(int)(Math.random() * occupations.length)],
                quirks[(int)(Math.random() * quirks.length)],
                firstNames[(int)(Math.random() * firstNames.length)],
                lastNames[(int)(Math.random() * lastNames.length)]);
    }
}
