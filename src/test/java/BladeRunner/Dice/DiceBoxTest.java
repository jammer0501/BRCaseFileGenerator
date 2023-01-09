package BladeRunner.Dice;

import static org.junit.jupiter.api.Assertions.assertTrue;

class DiceBoxTest {

    public static boolean areAllTrue(boolean[] array)
    {
        for(boolean b : array) if(!b) return false;
        return true;
    }

    @org.junit.jupiter.api.Test
    void testRollD6ReturnsNumberBetweenOneAndSix() {
        int result = DiceBox.rollD6();
        //System.out.println("d6 result: " + result);
        assertTrue( 6 >= result);
        assertTrue( 1 <= result);
    }

    @org.junit.jupiter.api.Test
    void testRollD6ReturnsAllPossibleNumbers() {

        boolean[] results = new boolean[6];

        for (int i=1; i<50; i++) {
            int result = DiceBox.rollD6();
            results[result-1] = true;
        }

        assertTrue(areAllTrue(results));
    }

    @org.junit.jupiter.api.Test
    void testRollD8ReturnsNumberBetweenOneAndEight() {
        int result = DiceBox.rollD8();
        //System.out.println("d8 result: " + result);
        assertTrue( 8 >= result);
        assertTrue( 1 <= result);
    }

    @org.junit.jupiter.api.Test
    void testRollD8ReturnsAllPossibleNumbers() {

        boolean[] results = new boolean[8];

        for (int i=1; i<50; i++) {
            int result = DiceBox.rollD8();
            results[result-1] = true;
        }

        assertTrue(areAllTrue(results));
    }

    @org.junit.jupiter.api.Test
    void testRollD10ReturnsNumberBetweenOneAndTen() {
        int result = DiceBox.rollD10();
        //System.out.println("d10 result: " + result);
        assertTrue( 10 >= result);
        assertTrue( 1 <= result);
    }

    @org.junit.jupiter.api.Test
    void testRollD10ReturnsAllPossibleNumbers() {

        boolean[] results = new boolean[10];

        for (int i=1; i<100; i++) {
            int result = DiceBox.rollD10();
            results[result-1] = true;
        }

        assertTrue(areAllTrue(results));
    }

    @org.junit.jupiter.api.Test
    void testRollD12ReturnsNumberBetweenOneAndTwelve() {
        int result = DiceBox.rollD12();
        //System.out.println("d12 result: " + result);
        assertTrue( 12 >= result);
        assertTrue( 1 <= result);
    }

    @org.junit.jupiter.api.Test
    void testRollD12ReturnsAllPossibleNumbers() {

        boolean[] results = new boolean[12];

        for (int i=1; i<100; i++) {
            int result = DiceBox.rollD12();
            results[result-1] = true;
        }

        assertTrue(areAllTrue(results));
    }

    @org.junit.jupiter.api.Test
    void testRollD100ReturnsNumberBetweenOneAndHundred() {
        for (int i=0; i<100; i++) {
            int result = DiceBox.rollD100();
            //System.out.println("d100 result: " + result);
            assertTrue(100 >= result);
            assertTrue(1 <= result);
        }
    }

    @org.junit.jupiter.api.Test
    void testRollingMultipleD6ReturnsAppropriateNumber() {
        int result = DiceBox.rollD6(5);
        //System.out.println("5 * d6 result: " + result);
        assertTrue( 30 >= result);
        assertTrue( 5 <= result);
    }

    @org.junit.jupiter.api.Test
    void testCanAddToD6Result() {
        int result = DiceBox.rollD6(5, 5);
        //System.out.println("5 * d6 + 5 result: " + result);
        assertTrue( 35 >= result);
        assertTrue( 10 <= result);
    }

    @org.junit.jupiter.api.Test
    void testCanAddToD6ResultAndMultiply() {
        int result = DiceBox.rollD6(5, 5, 5);
        //System.out.println("5 * d6 + 5 * 5 result: " + result);
        assertTrue( (35 * 5) >= result);
        assertTrue( (10 * 5) <= result);
    }
}