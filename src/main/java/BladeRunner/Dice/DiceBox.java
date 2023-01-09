package BladeRunner.Dice;

public final class DiceBox {

    private DiceBox() {}

    public static int rollD6() {
        return ((int)(Math.random() * 6 + 1));
    }
    public static int rollD8() { return ((int)(Math.random() * 8 + 1));}
    public static int rollD10() { return ((int)(Math.random() * 10 + 1));}
    public static int rollD12() { return ((int)(Math.random() * 12 + 1));}

    public static int rollD100() {
        return (int)(Math.random() * 100 + 1);
    }

    public static int rollD6(int numberOfDiceToRoll) {
        int total = 0;

        for (int i = 0; i < numberOfDiceToRoll; i++) {
            total += rollD6();
        }

        return total;
    }

    public static int rollD6(int numberOfDiceToRoll, int numberToAddToTotal){
        return rollD6(numberOfDiceToRoll) + numberToAddToTotal;
    }

    public static int rollD6(int numberOfDiceToRoll, int numberToAddToTotal, double numberToMultiplyTotalBy) {
        return (int) ((rollD6(numberOfDiceToRoll) + numberToAddToTotal) * numberToMultiplyTotalBy);
    }


}
