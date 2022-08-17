const { method1, method2, method3 } = require('./string');
const Calculator = require('./calculator');

describe('stringLength', () => {
    it('Return length of string between 1 to 10', () => {
        expect(method1("Kwaleyela")).toBe(9);
        expect(method1("Hi")).toBeGreaterThanOrEqual(1);
    })
})

describe('reverseString', () => {
    it('Return reversed string', () => {
        expect(method2("hello")).toBe('olleh');
        expect(method2("Kwaleyela")).toBe('aleyelawK');
    })
})

beforeEach(() => {
    calculator = new Calculator;
});

describe('Add numbers', () => {
    it('Add 2 + 2', () => {
        expect(calculator.add(2, 2)).toBe(4)
    })

    it("Add 4 + 4", () => {
        expect(calculator.add(4, 4)).toBe(8);
    });

    it("Add 5 + 5", () => {
        expect(calculator.add(5, 5)).toBe(10);
      });
})

describe('Subtract numbers', () => {
    it('subtract 8 - 5', () => {
        expect(calculator.subtract(8, 5)).toBe(3)
    })

    it("Subtract 6 - 2", () => {
        expect(calculator.subtract(6, 2)).toBe(4);
    });

    it("Subtract 5 - 4", () => {
        expect(calculator.subtract(5, 4)).toBe(1);
    });
})

describe('Divide numbers', () => {
    it('Divide 10 / 2', () => {
        expect(calculator.divide(10, 2)).toBe(5)
    })

    it("Divide 10 / 5", () => {
        expect(calculator.divide(10, 5)).toBe(2);
    });

    it("Divide 20 / 2", () => {
        expect(calculator.divide(20, 2)).toBe(10);
      });
})

describe('Multiply numbers', () => {
    it('Multiply 5 * 5', () => {
        expect(calculator.multiply(5, 5)).toBe(25)
    })

    it("Multiply 2 * 4", () => {
        expect(calculator.multiply(2, 4)).toBe(8);
    });

    it("Multiply 4 * 4", () => {
      expect(calculator.multiply(4, 4)).toBe(16);
    });
})

describe('capitalize', () => {
    it('Return capitalized letter', () => {
        expect(method3("hello world")).toBe("Hello world")
    })
})