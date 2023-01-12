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
    }

    public Location getSectorOneLocation() {
        String[] areas = {};
        return new Location();
    }

    class AreaMap {
        public String area;

        public AreaMap(String area, String[] locations) {
            this.area = area;
            this.locations = locations;
        }

        public String[] locations;
    }

    class SectorOneLocationsTable {
        private Vector<AreaMap> areaMaps;

        public SectorOneLocationsTable() {
            areaMaps  = new Vector<AreaMap>();
            areaMaps.add(new AreaMap("Nightclub Row", new String[]{"The Snake Pit", "Early Q", "Metropolis"}));
            areaMaps.add(new AreaMap("Red Light District", new String[]{"Happy Jack's Casino", "Paradise Evolution", "Kumite"}));
            areaMaps.add(new AreaMap("Beauty Parlors", new String[]{"Bright Eyes Beauty Salon", "Aphrodite", "Roxbox"}));
            areaMaps.add(new AreaMap("Mid-City", new String[]{"Rag Row", "Magazine Mile", "A & B Sports Arena"}));
        }
    }

    class SectorTwoLocationsTable {
        private Vector<AreaMap> areaMaps;

        public SectorTwoLocationsTable() {
            areaMaps  = new Vector<AreaMap>();
            areaMaps.add(new AreaMap("Hysteria Hall",
                    new String[]{"Arcade", "Multiplex", "Crazy Legs Larry Used Autos"}));
            areaMaps.add(new AreaMap("University of Los Angeles",
                    new String[]{"University Library", "Dean's Office", "Student Dorms"}));
            areaMaps.add(new AreaMap("University of Los Angeles Medical Center",
                    new String[]{"Medical Research Lab", "Coma Ward", "Hospital Basement"}));
        }
    }

    class SectorFourLocationsTable {
        private Vector<AreaMap> areaMaps;

        public SectorFourLocationsTable() {
            areaMaps  = new Vector<AreaMap>();
            areaMaps.add(new AreaMap("Wallace HQ",
                    new String[]{"Reception Area", "Wallace Records Library", "Memory Vaults", "Executive Suite"}));
            areaMaps.add(new AreaMap("China-town",
                    new String[]{"Ona Bar", "Shanghai Export & Import", "Hutong Alley"}));
            areaMaps.add(new AreaMap("DNA Row",
                    new String[]{"MirrorWare Industries", "Atinko Biowares", "Nekko Corporation"}));
            areaMaps.add(new AreaMap("Hawker's Circle",
                    new String[]{"Kingston Kitchen", "Runner Surplus", "Piss Alley", "Howey Lee's", "Karma Bar",
                            "Kabukicho Arcade"}));
            areaMaps.add(new AreaMap("Animoid Row",
                    new String[]{"Van Ness Pet Hospital", "The Fish Ladies", "Runciters Zoological",
                            "The Dragonfly", "Prawn Shop & Aquatic Emporium","Abdul Ben Hassan's Reptiles"}));
        }
    }

    class SectorFiveLocationsTable {
        private Vector<AreaMap> areaMaps;

        public SectorFiveLocationsTable() {
            areaMaps  = new Vector<AreaMap>();
            areaMaps.add(new AreaMap("LAPD HQ",
                    new String[]{"Rep Detect Unit", "Armory", "Crime Lab", "Mainframe","Morgue","Training Grounds"}));
            areaMaps.add(new AreaMap("City Hall",
                    new String[]{"City Hall Grand Stairs", "LA Courthouse", "Press Area", "Independent Sentinel",
                            "Mayor's Office", "District Attorney's Office"}));
            areaMaps.add(new AreaMap("Little Tokyo Shopping District",
                    new String[]{"White Dragon Noodle Bar", "Burger Burger Burger", "Shinjuku Alley", "Vending Mall",
                            "Edo Megastore"}));
            areaMaps.add(new AreaMap("Bar District", new String[]{"Naplopo", "Bibi's Bar", "Level 44"}));
            areaMaps.add(new AreaMap("LAPD Housing", new String[]{"Burt Jackson Block", "Venderton Gardens",
                    "Black'n'Blue Bar"}));
        }
    }

    class SectorNineLocationsTable {
        private Vector<AreaMap> areaMaps;

        public SectorNineLocationsTable() {
            areaMaps  = new Vector<AreaMap>();
            areaMaps.add(new AreaMap("Fashion District",
                    new String[]{"Razdora Eatery", "Markova Ballroom", "Ogilvy's Auction"}));
            areaMaps.add(new AreaMap("Financial District",
                    new String[]{"LA Stock Exchange", "Walton Gardens", "Shaw Financial"}));
            areaMaps.add(new AreaMap("Grand Central Market",
                    new String[]{"Wakasani's Seafood", "Mumbai Spice Co", "Walter & Knecht Antique Books"}));
            areaMaps.add(new AreaMap("LA Central Library",
                    new String[]{"Grand Lobby", "Newspaper Archive", "Special Collection Vault"}));
            areaMaps.add(new AreaMap("Retirement Row",
                    new String[]{"LA Viaduct", "Abandoned Subway Station", "Crashed Spinner"}));
        }
    }

    class SectorTwelveLocationsTable {
        private Vector<AreaMap> areaMaps;

        public SectorTwelveLocationsTable() {
            areaMaps  = new Vector<AreaMap>();
            areaMaps.add(new AreaMap("LAX",
                    new String[]{"Off-World Spaceport Terminal", "On-World Domestic Terminal", "Control Tower",
                            "Customs Office", "Hotel Madison"}));
            areaMaps.add(new AreaMap("Warehouse District",
                    new String[]{"Logistics Hub D", "Maeve's Bar", "Container Crane 141"}));
            areaMaps.add(new AreaMap("Sea Wall Docks",
                    new String[]{"LA Queen, Smuggler Ship", "Sea Wall Watch Station", "Wreck of Empress Sarah"}));
        }
    }

    class BeyondDowntownLocationsTable {
        private Vector<AreaMap> areaMaps;

        public BeyondDowntownLocationsTable() {
            areaMaps  = new Vector<AreaMap>();
            areaMaps.add(new AreaMap("The Energy Empire",
                    new String[]{"Protein Farm", "Power Plant", "Transport Hub"}));
            areaMaps.add(new AreaMap("Los Angeles Hills",
                    new String[]{"Refugee Camp", "Low Income Housing Project", "Abandoned Building Site"}));
            areaMaps.add(new AreaMap("Santa Barbara",
                    new String[]{"De Vries Mansion", "Jenkins Family Estate", "Abandoned Resort"}));
            areaMaps.add(new AreaMap("San Diego Trash Mesa",
                    new String[]{"Labour Campe", "Off-Grid R&D Lab", "Scavenge Yard"}));
            areaMaps.add(new AreaMap("The Kipple",
                    new String[]{"Crashed Transport", "Scavenger Camp", "Waste Processing Station"}));
        }
    }
}
