package BladeRunner.Table;

import BladeRunner.Location;
import BladeRunner.NPC;

public class NPCTables {
    public enum Type {
        CORPORATE, SECURITY, ENTERTAINMENT, STREET, CRIME, SCIENCE, TECH, OTHER;

        public static NPCTables.Type getRandomNPCType() {
            NPCTables.Type[] types = values();

            // get sector
            return types[(int)(Math.random() * types.length)];
        }
    }

    public static NPC generateNPC() {
        NPCTables.Type type = NPCTables.Type.getRandomNPCType();
        NPC person;
        switch (type) {
            case CORPORATE:
                person = NPCTables.createCorporateNPC();
                break;
            case SECURITY:
                person = NPCTables.createSecurityNPC();
                break;
            case ENTERTAINMENT:
                person = NPCTables.createEntertainmentNPC();
                break;
            case STREET:
                person = NPCTables.createStreetNPC();
                break;
            case CRIME:
                person = NPCTables.createCrimeNPC();
                break;
            case SCIENCE:
                person = NPCTables.createScienceNPC();
                break;
            case TECH:
                person = NPCTables.createTechNPC();
                break;
            case OTHER:
                person = NPCTables.createOtherNPC();
                break;
            default:
                throw new IllegalStateException("Unexpected value: " + type);
        }
        return person;
    }

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

    public static NPC createStreetNPC() {
        String[] occupations = {"Food Worker", "Maintenance Worker", "Scavenger", "Street Rat", "Cultist", "Store Owner"};
        String[] quirks ={"Smelly", "Grubby clothes", "Fidgety", "Full of attitude",
                "Whispers", "Eccentric"};
        String[] firstNames = {"Vladislav", "Rhea", "Harley", "Dara", "Radhi", "Cass"};
        String[] lastNames = {"Lang", "Mandell", "Beck", "Yang", "Molo", "Ibrahim"};

        return new NPC(Type.STREET,
                occupations[(int)(Math.random() * occupations.length)],
                quirks[(int)(Math.random() * quirks.length)],
                firstNames[(int)(Math.random() * firstNames.length)],
                lastNames[(int)(Math.random() * lastNames.length)]);
    }

    public static NPC createCrimeNPC() {
        String[] occupations = {"Gang Member", "Hitman", "Hustler", "Burglar", "Drug Dealer", "Syndicate Member"};
        String[] quirks ={"Ruthless", "Limps", "Extravagant haircut", "Plain",  "Suspicious", "Tattooed"};
        String[] firstNames = {"Aurora", "Niko", "Rue", "Luca", "Jean", "Haru"};
        String[] lastNames = {"Zhao", "Mercer", "Hoskins", "De Vries", "Wozniak", "Giordano"};

        return new NPC(Type.CRIME,
                occupations[(int)(Math.random() * occupations.length)],
                quirks[(int)(Math.random() * quirks.length)],
                firstNames[(int)(Math.random() * firstNames.length)],
                lastNames[(int)(Math.random() * lastNames.length)]);
    }

    public static NPC createScienceNPC() {
        String[] occupations = {"Student", "Scholar", "Researcher", "Scientist", "Analyst", "Biochemist"};
        String[] quirks ={"Tired", "Touchy", "Intense", "Bald",  "Booming voice", "Wiry"};
        String[] firstNames = {"Saidah", "Constance", "Reinhard", "Ivana", "Bwana", "Eve"};
        String[] lastNames = {"Linton", "Sawadogo", "Meier", "Lec", "Siddiqi", "Ricci"};

        return new NPC(Type.SCIENCE,
                occupations[(int)(Math.random() * occupations.length)],
                quirks[(int)(Math.random() * quirks.length)],
                firstNames[(int)(Math.random() * firstNames.length)],
                lastNames[(int)(Math.random() * lastNames.length)]);
    }

    public static NPC createTechNPC() {
        String[] occupations = {"Technician", "Bioengineer", "Mechanic", "Engineer", "Programmer", "Quality Controller"};
        String[] quirks ={"Corpulent", "Mumbling", "Impatient", "Bejeweled",  "Dry wit", "Arrogant"};
        String[] firstNames = {"Bill", "Kat", "Amar", "Alejandro", "Eitan", "Mei"};
        String[] lastNames = {"Banks", "Atwood", "Mirai", "Morales", "Chakrabarti", "Teng"};

        return new NPC(Type.TECH,
                occupations[(int)(Math.random() * occupations.length)],
                quirks[(int)(Math.random() * quirks.length)],
                firstNames[(int)(Math.random() * firstNames.length)],
                lastNames[(int)(Math.random() * lastNames.length)]);
    }

    public static NPC createOtherNPC() {
        String[] occupations = {"Clerk", "Journalist", "TV Host", "Cityspeaker", "Kid", "Politician"};
        String[] quirks ={"Overly eager", "Brusque", "Elegant", "Old",  "Fashionable", "Argumentative"};
        String[] firstNames = {"Feng", "Shira", "Sanjay", "Dmitry", "Libby", "Nombeko"};
        String[] lastNames = {"Wyman", "da Silva", "Kamarr", "Kebede", "Esposito", "Koslovski"};

        return new NPC(Type.OTHER,
                occupations[(int)(Math.random() * occupations.length)],
                quirks[(int)(Math.random() * quirks.length)],
                firstNames[(int)(Math.random() * firstNames.length)],
                lastNames[(int)(Math.random() * lastNames.length)]);
    }
}
