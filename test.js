'use strict';

require('mocha');
var assert = require('assert');
var isEven = require('./');

describe('isEven', function() {
	it("returns true if the number is even:", function() {
		assert(isEven(0));
		assert(!isEven(1));
		assert(isEven(2));
		assert(!isEven(3));
	});

	it("returns true if a boolean false is provided:", function() {
		assert(!isEven(true));
		assert(isEven(false));
	});

	it("returns an array of values for any string with numbers:", function() {
		assert(isEven("122"));
		assert(isEven("a122"));
		assert(isEven("this is an even number: 12"));
		assert(isEven("12 25 true false 34 true"));
		assert(isEven("Also when separated by hyphens. 12-24-2019"));
	});

	it("returns false for any invalid input (no input or unsupported input)", function() {
		assert(!isEven());
		assert(!isEven(new Object()));
	});
});
