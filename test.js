'use strict';

require('mocha');
var assert = require('assert');
var isEven = require('./');

describe('isEven', function() {
	it("returns true if the number is even:", () => {
		assert(isEven(0));
		assert(!isEven(1));
		assert(isEven(2));
		assert(!isEven(3));
	});

	it("returns true if a boolean false is provided:", () => {
		assert(!isEven(true));
		assert(isEven(false));
	});

	it("returns an array of values for any string with numbers:", () => {
		assert(JSON.stringify(isEven("122")) === JSON.stringify([true]));
		assert(JSON.stringify(isEven("a122")) === JSON.stringify([true]));
		assert(JSON.stringify(isEven("this is an even number: 12")) === JSON.stringify([true]));
		assert(JSON.stringify(isEven("12 25 true false 34 true")) === JSON.stringify([true, false, true]));
		assert(JSON.stringify(isEven("Also when separated by hyphens. 12-24-2019")) === JSON.stringify([true, true, false]));
	});

	it("returns false for any invalid input (no input or unsupported input)", () => {
		assert(!isEven());
		assert(!isEven(new Object()));
	});

	it("returns array of values for any array of numbers, bools, or strings", () => {
		assert(JSON.stringify(isEven([12, 23, 24])) === JSON.stringify([true, false, true]));
		assert(JSON.stringify(isEven(["12b24", 23, false])) === JSON.stringify([[true, true], false, true]));
	});
});
