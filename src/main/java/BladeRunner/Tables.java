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

    public enum ThemeFourAssignment{
        ONE("The Replicant Underground bombs an Empathy Movement protest."),
        TWO( "A gossip rag stumbles upon a seemingly real conspiracy to assassinate a pro-Replicant UN delegate."),
        THREE("The UN Colonization Defense Program notifies the RDU that an AWOL N-9 is hiding out in the city."),
        FOUR("Governor Kolvig requests a security detail at a public speaking event after an anonymous " +
                "death threat."),
        FIVE("LAPD Internal Affairs is investigating another Blade Runner for excessive use of force and abuse " +
                "of power."),
        SIX("An anti-Replicant populist politician is murdered. All evidence points towards the Replicant " +
                "Underground. But the clues seem a little too convenient.");

        public final String themeFourAssignment;

        private ThemeFourAssignment(String themeFourAssignment) {
            this.themeFourAssignment = themeFourAssignment;
        }

        public String getDescription() {return themeFourAssignment;}

        public static ThemeFourAssignment getRandomAssignment() {
            ThemeFourAssignment[] assignments = values();
            return assignments[(int)(Math.random() * assignments.length)];
        }
    }

    public enum ThemeFiveAssignment{
        ONE("UN Marshals order the RDU to apprehend and transport a major drug trafficker harbored by the Replicant " +
                "Underground."),
        TWO( "LAPD joint-investigation with the Robbery division when a major casino heist suggests that Replicants " +
                "were involved."),
        THREE("LAPD Homicide joint-investigation requesting special forensic assistance on a priority serial murder " +
                "case."),
        FOUR("The CBI has requested a Doxie present during criminal interrogations of a major investigation."),
        FIVE("An earthquake results in Replicant Blade Runners being enlisted as emergency responders."),
        SIX("Internal security at Wallace Corp investigates stolen lab samples and enlists the help of LAPD.");

        public final String themeFiveAssignment;

        private ThemeFiveAssignment(String themeFiveAssignment) {
            this.themeFiveAssignment = themeFiveAssignment;
        }

        public String getDescription() {return themeFiveAssignment;}

        public static ThemeFiveAssignment getRandomAssignment() {
            ThemeFiveAssignment[] assignments = values();
            return assignments[(int)(Math.random() * assignments.length)];
        }
    }

    public enum ThemeSixAssignment{
        ONE("A digital companion is accused as an accessory to a series of bank robberies."),
        TWO( "A real and priceless snow leopard is running free down Animoid Row after a smuggler’s trade-off goes " +
                "sour."),
        THREE("A tech company announces a new halo device with dangerous bio-hacking capabilities."),
        FOUR("An animoid owl with supposedly implanted memories of a dead Wallace Corp bio-scientist " +
                "goes missing."),
        FIVE("Someone is killing synthetic animals on Animoid Row."),
        SIX("A computer engineer disappears and seemingly turns up as a DiJi ghost.");

        public final String themeSixAssignment;

        private ThemeSixAssignment(String themeSixAssignment) {
            this.themeSixAssignment = themeSixAssignment;
        }

        public String getDescription() {return themeSixAssignment;}

        public static ThemeSixAssignment getRandomAssignment() {
            ThemeSixAssignment[] assignments = values();
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
