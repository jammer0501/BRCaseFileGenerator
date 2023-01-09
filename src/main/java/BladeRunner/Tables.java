package BladeRunner;

import java.util.Random;

public final class Tables {

    public enum Theme {
        ONE("Replicant Crimes & Punishment"),
        TWO( "Corporate Intrigues & Courtroom Dramas"),
        THREE("Organised and Underground Threats"),
        FOUR("Political Machinations & Internal Affairs"),
        FIVE("UN Assignments & Joint Investigations"),
        SIX("Monitored Entities & Technologies");

        public final String theme;

        private Theme(String theme) {
            this.theme = theme;
        }

        public String getDescription() {return theme;}
    }

    public enum ThemeOneAssignment{
        ONE("A retirement order has been filed for a counterfeit Nexus-8 chef who killed the kitchen staff at a five-" +
                "star restaurant."),
        TWO( "A Replicant claims innocence, because their owner ordered them to commit unlawful acts and they " +
                "were forced to obey."),
        THREE("A Replicant accuses their employer of the unlawful murder of a Replicant co-worker."),
        FOUR("A Replicant mysteriously falls to their death at a Sea Wall construction site."),
        FIVE("A hostage situation breaks out at the LAX Spaceport when a presumed-dead Nexus-8 is identified."),
        SIX("A N-8 registered in the RDU files as retired is identified as an active leader of a radical Replicant " +
                "Underground faction."),
        SEVEN("A memory engineer has secretly implanted memories that manipulated select Replicants to act out of " +
                "character."),
        EIGHT("A Replicant is arrested after defending themselves against a physically abusive employer."),
        NINE("Human power plant workers accuse a Replicant of sabotaging the reactor and triggering the subsequent mob " +
                "justice that was meted out."),
        TEN("A human refuses to believe that their Replicant servant ran away and files a missing persons report.");

        public final String themeOneAssignment;

        private ThemeOneAssignment(String themeOneAssignment) {
            this.themeOneAssignment = themeOneAssignment;
        }

        public String getDescription() {return themeOneAssignment;}
        public static ThemeOneAssignment getRandomAssignment() {
            ThemeOneAssignment[] assignments = values();
            return assignments[(int)(Math.random() * assignments.length)];
        }
    }

    public enum ThemeTwoAssignment{
        ONE("A Replicant is the star witness in a high-profile murder trial."),
        TWO( "A top megacorp executive is revealed to be a Replicant, but the executive didn’t know the truth."),
        THREE("A major biotech company steals a competitor’s patent by infiltrating their ranks with a Replicant spy."),
        FOUR("A megacorp is accused of illegally producing Replicants to assume the identities of key stakeholders on " +
                "their board."),
        FIVE("An Independent Sentinel journalist requests protection after uncovering a damning conspiracy against " +
                "Wallace Corp."),
        SIX("A Blade Runner is witness to a retirement in the field that may not have been merited. The DA goes for " +
                "Murder in the First Degree against a human who unlawfully retires a Replicant."),
        SEVEN("The CEO of a tech company is kidnapped by what appears to be Replicant fugitives."),
        EIGHT("A lethal virus is stolen from a high security lab and let loose in a run-down neighborhood.");

        public final String themeTwoAssignment;

        private ThemeTwoAssignment(String themeTwoAssignment) {
            this.themeTwoAssignment = themeTwoAssignment;
        }

        public String getDescription() {return themeTwoAssignment;}
        public static ThemeTwoAssignment getRandomAssignment() {
            ThemeTwoAssignment[] assignments = values();
            return assignments[(int)(Math.random() * assignments.length)];
        }
    }

    public enum ThemeThreeAssignment{
        ONE("The UN Bureau of Investigation needs assistance apprehending an arms dealer trafficking illegal " +
                "Nexus counterfeits."),
        TWO( "A DNA Row bioengineer is accused of running an illegal beauty salon that once helped Nexus-8s flee the " +
                "city."),
        THREE("The RDU must go undercover to suss out a criminal gambling ring hosting underground Replicant death " +
                "matches."),
        FOUR("Replicants are being kidnapped and sold on the black market."),
        FIVE("The Counter-Terrorism Bureau uncovers a terrorist plot by Human Supremacists."),
        SIX("A new extremist group is attempting to radicalize Replicants into terrorists.");

        public final String themeThreeAssignment;

        private ThemeThreeAssignment(String themeThreeAssignment) {
            this.themeThreeAssignment = themeThreeAssignment;
        }

        public String getDescription() {return themeThreeAssignment;}

        public static ThemeThreeAssignment getRandomAssignment() {
            ThemeThreeAssignment[] assignments = values();
            return assignments[(int)(Math.random() * assignments.length)];
        }
    }

    public static Theme generateTheme() {
        Theme[] themes = {Theme.ONE,
                Theme.ONE,
                Theme.ONE,
                Theme.ONE,
                Theme.TWO,
                Theme.TWO,
                Theme.THREE,
                Theme.FOUR,
                Theme.FIVE,
                Theme.SIX};

        return themes[(int)(Math.random() * 10)];
    }
/*
    public static generateThemeOneAssignment() {

    }

 */
}
