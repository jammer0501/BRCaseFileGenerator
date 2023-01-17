package BladeRunner.Table;

import BladeRunner.Location;
import java.util.Vector;

public class LocationTables {
    public enum Sector {
        ONE("Entertainment District"),
        TWO("Arts District"),
        FOUR("Industrial District"),
        FIVE("Central"),
        NINE("Commercial District"),
        TWELVE("LAX"),
        BEYOND_DOWNTOWN("Beyond Downtown");

        public final String sector;

        Sector(String sector) {
            this.sector = sector;
        }

        public String getDescription() {return sector;}

        public static Sector getRandomSector() {
            Sector[] sectors = values();
            // set weight
            int[] sectorIndices = {0,1,2,3,4,4,5,6};

            // get sector
            return sectors[sectorIndices[(int)(Math.random() * sectorIndices.length)]];
        }
    }

    public static Location generateLocation() {
       Sector sector = LocationTables.Sector.getRandomSector();
        Location location;
       switch (sector) {
           case ONE:
               location = SectorOneLocationsTable.createLocation();
               break;
           case TWO:
               location = SectorTwoLocationsTable.createLocation();
               break;
           case FOUR:
               location = SectorFourLocationsTable.createLocation();
               break;
           case FIVE:
               location = SectorFiveLocationsTable.createLocation();
               break;
           case NINE:
               location = SectorNineLocationsTable.createLocation();
               break;
           case TWELVE:
               location = SectorTwelveLocationsTable.createLocation();
               break;
           case BEYOND_DOWNTOWN:
               location = BeyondDowntownLocationsTable.createLocation();
               break;
           default:
               throw new IllegalStateException("Unexpected value: " + sector);
       }
       return location;
    }
    static class AreaMap {
        public String area;

        public AreaMap(String area, String[] locations) {
            this.area = area;
            this.locations = locations;
        }

        public String[] locations;
    }

    static class SectorOneLocationsTable {
        private static AreaMap[] areaMaps = new AreaMap[4];

        static  {
            areaMaps[0] = new AreaMap("Nightclub Row", new String[]{"The Snake Pit", "Early Q", "Metropolis"});
            areaMaps[1] = new AreaMap("Red Light District", new String[]{"Happy Jack's Casino", "Paradise Evolution", "Kumite"});
            areaMaps[2] = new AreaMap("Beauty Parlors", new String[]{"Bright Eyes Beauty Salon", "Aphrodite", "Roxbox"});
            areaMaps[3] = new AreaMap("Mid-City", new String[]{"Rag Row", "Magazine Mile", "A & B Sports Arena"});
        }

        public static Location createLocation() {

            // set weight
            int[] areas = {0,0,1,1,2,3};

            // get area
            int area = areas[(int)(Math.random() * areas.length)];
            String areaString = areaMaps[areas[(int)(Math.random() * areas.length)]].area;

            // get location
            String[] locations = areaMaps[area].locations;
            String location = locations[(int)(Math.random() * locations.length)];

            return new Location(Sector.ONE, areaString, location);
        }
    }

    static class SectorTwoLocationsTable {
        private static AreaMap[] areaMaps = new AreaMap[3];

        static {

            areaMaps[0] = new AreaMap("Hysteria Hall",
                    new String[]{"Arcade", "Multiplex", "Crazy Legs Larry Used Autos"});
            areaMaps[1] = new AreaMap("University of Los Angeles",
                    new String[]{"University Library", "Dean's Office", "Student Dorms"});
            areaMaps[2] = new AreaMap("University of Los Angeles Medical Center",
                    new String[]{"Medical Research Lab", "Coma Ward", "Hospital Basement"});
        }

        public static Location createLocation() {

            // get area
            int randomAreaIdx = (int)(Math.random() * 3);
            String areaString = areaMaps[randomAreaIdx].area;

            // get location
            String[] locations = areaMaps[randomAreaIdx].locations;
            String location = locations[(int)(Math.random() * locations.length)];

            return new Location(Sector.TWO, areaString, location);
        }
    }

    static class SectorFourLocationsTable {
        private static AreaMap[] areaMaps = new AreaMap[5];

        static {
            areaMaps[0] = new AreaMap("Wallace HQ",
                    new String[]{"Reception Area", "Wallace Records Library", "Memory Vaults", "Executive Suite"});
            areaMaps[1] = new AreaMap("China-town",
                    new String[]{"Ona Bar", "Shanghai Export & Import", "Hutong Alley"});
            areaMaps[2] = new AreaMap("DNA Row",
                    new String[]{"MirrorWare Industries", "Atinko Biowares", "Nekko Corporation"});
            areaMaps[3] = new AreaMap("Hawker's Circle",
                    new String[]{"Kingston Kitchen", "Runner Surplus", "Piss Alley", "Howey Lee's", "Karma Bar",
                            "Kabukicho Arcade"});
            areaMaps[4] = new AreaMap("Animoid Row",
                    new String[]{"Van Ness Pet Hospital", "The Fish Ladies", "Runciters Zoological",
                            "The Dragonfly", "Prawn Shop & Aquatic Emporium","Abdul Ben Hassan's Reptiles"});
        }

        public static Location createLocation() {

            final int WALLACE_HQ_IDX = 0;

            // set weight
            int[] areas = {0,1,2,3,4,4};

            // get area
            int areaIdx = areas[(int)(Math.random() * areas.length)];
            String areaString = areaMaps[areaIdx].area;

            // get location
            String[] locations = areaMaps[areaIdx].locations;
            String location;
            if (areaIdx == WALLACE_HQ_IDX) {
                // set weight
                int[] locationIndices = {0,0,1,2,3,3};
                location = locations[locationIndices[(int) (Math.random() * locationIndices.length)]];
            } else {
                location = locations[(int) (Math.random() * locations.length)];
            }

            return new Location(Sector.FOUR, areaString, location);
        }
    }

    static class SectorFiveLocationsTable {
        private static AreaMap[] areaMaps = new AreaMap[5];

        static {
            areaMaps[0] = new AreaMap("LAPD HQ",
                    new String[]{"Rep Detect Unit", "Armory", "Crime Lab", "Mainframe","Morgue","Training Grounds"});
            areaMaps[1] = new AreaMap("City Hall",
                    new String[]{"City Hall Grand Stairs", "LA Courthouse", "Press Area", "Independent Sentinel",
                            "Mayor's Office", "District Attorney's Office"});
            areaMaps[2] = new AreaMap("Little Tokyo Shopping District",
                    new String[]{"White Dragon Noodle Bar", "Burger Burger Burger", "Shinjuku Alley", "Vending Mall",
                            "Edo Megastore"});
            areaMaps[3] = new AreaMap("Bar District", new String[]{"Naplopo", "Bibi's Bar", "Level 44"});
            areaMaps[4] = new AreaMap("LAPD Housing", new String[]{"Burt Jackson Block", "Venderton Gardens",
                    "Black'n'Blue Bar"});
        }

        public static Location createLocation() {

            // set weight
            int[] areas = {0,1,2,2,3,4};

            // get area
            int areaIdx = areas[(int)(Math.random() * areas.length)];
            String areaString = areaMaps[areaIdx].area;

            // get location
            String[] locations = areaMaps[areaIdx].locations;
            String location = locations[(int) (Math.random() * locations.length)];

            return new Location(Sector.FIVE, areaString, location);
        }
    }

     static class SectorNineLocationsTable {
        private static AreaMap[] areaMaps = new AreaMap[5];

        static {
            areaMaps[0] = new AreaMap("Fashion District",
                    new String[]{"Razdora Eatery", "Markova Ballroom", "Ogilvy's Auction"});
            areaMaps[1] = new AreaMap("Financial District",
                    new String[]{"LA Stock Exchange", "Walton Gardens", "Shaw Financial"});
            areaMaps[2] = new AreaMap("Grand Central Market",
                    new String[]{"Wakasani's Seafood", "Mumbai Spice Co", "Walter & Knecht Antique Books"});
            areaMaps[3] = new AreaMap("LA Central Library",
                    new String[]{"Grand Lobby", "Newspaper Archive", "Special Collection Vault"});
            areaMaps[4] = new AreaMap("Retirement Row",
                    new String[]{"LA Viaduct", "Abandoned Subway Station", "Crashed Spinner"});
        }

         public static Location createLocation() {

             // set weight
             int[] areas = {0,1,2,2,3,4};

             // get area
             int areaIdx = areas[(int)(Math.random() * areas.length)];
             String areaString = areaMaps[areaIdx].area;

             // get location
             String[] locations = areaMaps[areaIdx].locations;
             String location = locations[(int) (Math.random() * locations.length)];

             return new Location(Sector.NINE, areaString, location);
         }
    }

    static class SectorTwelveLocationsTable {
        private static AreaMap[] areaMaps = new AreaMap[3];

        static {
            areaMaps[0] = new AreaMap("LAX",
                    new String[]{"Off-World Spaceport Terminal", "On-World Domestic Terminal", "Control Tower",
                            "Customs Office", "Hotel Madison"});
            areaMaps[1] = new AreaMap("Warehouse District",
                    new String[]{"Logistics Hub D", "Maeve's Bar", "Container Crane 141"});
            areaMaps[2] = new AreaMap("Sea Wall Docks",
                    new String[]{"LA Queen, Smuggler Ship", "Sea Wall Watch Station", "Wreck of Empress Sarah"});
        }

        public static Location createLocation() {

            final int LAX_IDX = 0;

            // set weight
            int[] areas = {0,0,0,1,1,2};

            // get area
            int areaIdx = areas[(int)(Math.random() * areas.length)];
            String areaString = areaMaps[areaIdx].area;

            /// get location
            String[] locations = areaMaps[areaIdx].locations;
            String location;
            if (areaIdx == LAX_IDX) {
                // set weight
                int[] locationIndices = {0,0,1,2,3,4};
                location = locations[locationIndices[(int) (Math.random() * locationIndices.length)]];
            } else {
                location = locations[(int) (Math.random() * locations.length)];
            }

            return new Location(Sector.TWELVE, areaString, location);
        }
    }

    static class BeyondDowntownLocationsTable {
        private static AreaMap[] areaMaps = new AreaMap[5];

        static {
            areaMaps[0] = new AreaMap("The Energy Empire",
                    new String[]{"Protein Farm", "Power Plant", "Transport Hub"});
            areaMaps[1] = new AreaMap("Los Angeles Hills",
                    new String[]{"Refugee Camp", "Low Income Housing Project", "Abandoned Building Site"});
            areaMaps[2] = new AreaMap("Santa Barbara",
                    new String[]{"De Vries Mansion", "Jenkins Family Estate", "Abandoned Resort"});
            areaMaps[3] = new AreaMap("San Diego Trash Mesa",
                    new String[]{"Labour Camp", "Off-Grid R&D Lab", "Scavenge Yard"});
            areaMaps[4] = new AreaMap("The Kipple",
                    new String[]{"Crashed Transport", "Scavenger Camp", "Waste Processing Station"});
        }

        public static Location createLocation() {

            // set weight
            int[] areas = {0,1,2,3,4,4};

            // get area
            int areaIdx = areas[(int)(Math.random() * areas.length)];
            String areaString = areaMaps[areaIdx].area;

            // get location
            String[] locations = areaMaps[areaIdx].locations;
            String location = locations[(int) (Math.random() * locations.length)];

            return new Location(Sector.BEYOND_DOWNTOWN, areaString, location);
        }
    }
}
