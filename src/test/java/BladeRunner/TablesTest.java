package BladeRunner;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class TablesTest {

    @Test
    void generateTheme() {
        System.out.println(Tables.generateTheme().getDescription());
    }

    @Test
    void testRandomThemeOneAssignment() {
        System.out.println(Tables.ThemeOneAssignment.getRandomAssignment().getDescription());
    }

    @Test
    void testRandomThemeTwoAssignment() {
        System.out.println(Tables.ThemeTwoAssignment.getRandomAssignment().getDescription());
    }

    @Test
    void testRandomThemeThreeAssignment() {
        System.out.println(Tables.ThemeThreeAssignment.getRandomAssignment().getDescription());
    }

    @Test
    void testRandomThemeFourAssignment() {
        System.out.println(Tables.ThemeFourAssignment.getRandomAssignment().getDescription());
    }

    @Test
    void testRandomThemeFiveAssignment() {
        System.out.println(Tables.ThemeFiveAssignment.getRandomAssignment().getDescription());
    }

    @Test
    void testRandomThemeSixAssignment() {
        System.out.println(Tables.ThemeSixAssignment.getRandomAssignment().getDescription());
    }
}