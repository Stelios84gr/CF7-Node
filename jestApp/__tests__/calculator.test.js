const mathOperations = require('../index');

describe("Calculator Test - Sum", () => { // "test suite" - ομαδοποίηση κανόνων

    test("Addition of 2 numbers", () => {
        let result = mathOperations.sum(2,3);

        expect(result).toBe(5);
    });

    test("Addition of 2 numbers with error", () => {
        let result = mathOperations.sum(2,3);

        expect(result).not.toBe(8);
    });
});

describe("Calculator Test - Diff", () => {

    test("Difference from substraction of one number from another", () => {
        let result = mathOperations.diff(5,3);

        expect(result).toBe(2);
    });

    test("Difference from substraction of one number from another with error", () => {
        let result = mathOperations.diff(5,4);

        expect(result).not.toBe(2);
    });
    
});

describe("Calculator Test - Product", () => {

    test("Product of multiplying a number times another", () => {
        result = mathOperations.product(4,2);

        expect(result).toBe(8);
    });

    test("Product of multiplying a number times another with errors", () => {
        let result = mathOperations.product(3,4);

        expect(result).not.toBe(7);
    });
    
});

describe("Calculator Test - Quotient", () => {

    test("Quotient of dividing a number with another one", () => {
        let result = mathOperations.quotient(12,3);

        expect(result).toBe(4);
    });

    test("Quotient of dividing a number with another one, with errors", () => {
        let result = mathOperations.quotient(12,6);

        expect(result).not.toBe(3);
    });
    
});