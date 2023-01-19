package BladeRunner.Table;

public class SupplementaryTables {
    public static String createTwist() {
        String[] twists = {"A rouge operative is connected to the case.",
            "A crime is a false flag operation.",
            "There is a cover-up of an even greater crime.",
            "Someone is skillfully creating false evidence.",
            "One of the PCs is framed for a crime.",
            "A conspiracy is involved in the case.",
            "Someone innocent is being framed.",
            "A serial criminal stalks the streets.",
            "There is a mole in the LAPD connected to the case.",
            "An NPC is deranged and completely unpredictable.",
            "Another Blade Runner is secretly investigating the case.",
            "A player character's key relationhip NPC is involved."};

        return twists[(int)(Math.random() * twists.length)];
    }

    public static String createFinalConfrontation() {
        String[] confrontations = {"Abandoned apartment complex, in the pouring rain.",
            "On top of the Sea Wall, with thunder.",
            "Tunnels beneath the city, in blazing heat.",
            "A dilapidated ballroom, in the freezing cold.",
            "The depths of Corporate HQ, with intense colours.",
            "An overgrown mansion outside the city.",
            "The roof of a building, in bitter wind.",
            "Forgotten secret facility, with a power outage.",
            "Ruin in the Kipple, with red dust.",
            "In the shadow of a huge monument, in the fog."};

        return confrontations[(int)(Math.random() * confrontations.length)];
    }

    static class MoodPiece {
        private String weather;
        private String screen;
        private String passing;

        public MoodPiece(){};

        public MoodPiece(String weather, String screen, String passing) {
            this.weather = weather;
            this.screen = screen;
            this.passing = passing;
        }

        public String getWeather() {
            return weather;
        }

        public void setWeather(String weather) {
            this.weather = weather;
        }

        public String getScreen() {
            return screen;
        }

        public void setScreen(String screen) {
            this.screen = screen;
        }

        public String getPassing() {
            return passing;
        }

        public void setPassing(String passing) {
            this.passing = passing;
        }

        public String toString() {
            return "A " + getScreen() + " is on a screen. " + getPassing() + " is passing by. The weather is: "
                    + getWeather();
        }
    }
    public static MoodPiece createMoodPiece() {
        String[][] moods = {{"Acidic Fog", "Geisha eating candy","A police spinner with flashing lights"},
                {"Heavy rain","'A New Life Awaits you in the Off-World Colonies","A chanting religious group"},
                {"Drizzle","weather forecast","A political demonstration"},
                {"Drizzle","news report","Drunk youths"},
                {"Freezing cold","sports event","Tired workers on their way home"},
                {"Heatwave","Wallace Corp advertisement","A corporate vehicle with escorts"},
                {"Smog","travel add to exotic locations","A street sweeper vehicle"},
                {"Rays of light through heavy clouds","digital companion ad","Street kids looking for trouble"}};

        String[] mood = moods[(int)Math.random() * moods.length];

        return new MoodPiece(mood[0], mood[1], mood[2]);
    }
}
