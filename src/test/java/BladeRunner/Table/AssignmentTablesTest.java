package BladeRunner.Table;

import BladeRunner.Table.AssignmentTables;
import org.junit.jupiter.api.Test;

class AssignmentTablesTest {

    @Test
    void generateTheme() {
        System.out.println(AssignmentTables.generateTheme().getDescription());
    }

    @Test
    void testRandomThemeOneAssignment() {
        System.out.println(AssignmentTables.ThemeOneAssignment.getRandomAssignment().getDescription());
    }

    @Test
    void testRandomThemeTwoAssignment() {
        System.out.println(AssignmentTables.ThemeTwoAssignment.getRandomAssignment().getDescription());
    }

    @Test
    void testRandomThemeThreeAssignment() {
        System.out.println(AssignmentTables.ThemeThreeAssignment.getRandomAssignment().getDescription());
    }

    @Test
    void testRandomThemeFourAssignment() {
        System.out.println(AssignmentTables.ThemeFourAssignment.getRandomAssignment().getDescription());
    }

    @Test
    void testRandomThemeFiveAssignment() {
        System.out.println(AssignmentTables.ThemeFiveAssignment.getRandomAssignment().getDescription());
    }

    @Test
    void testRandomThemeSixAssignment() {
        System.out.println(AssignmentTables.ThemeSixAssignment.getRandomAssignment().getDescription());
    }
}