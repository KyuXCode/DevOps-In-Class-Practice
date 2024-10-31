var main = require('../index');
var assert = require('assert');

describe('Factorial Function', function() {
    describe('Basic cases', function() {
        it('should return 1 for factorial of 0', function() {
            assert.strictEqual(main.factorial(0), 1);
        });

        it('should return 1 for factorial of 1', function() {
            assert.strictEqual(main.factorial(1), 1);
        });

        it('should return 120 for factorial of 5', function() {
            assert.strictEqual(main.factorial(5), 120);
        });

        it('should return 5040 for factorial of 7', function() {
            assert.strictEqual(main.factorial(7), 5040);
        });
    });

    describe('Negative cases', function() {
        it('should return "Can\'t be negative" for negative input', function() {
            assert.strictEqual(main.factorial(-1), "Can't be negative");
        });
    });
});