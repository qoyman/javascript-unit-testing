import {describe, test, it, expect } from 'vitest';
import {max} from '../src/intro.js';
import {fizzBuzz} from '../src/intro.js';
import {calculateAverage} from '../src/intro.js';
import {factorial} from '../src/intro.js';

describe('max', () => {
    it('should return the first number if it is greater than the second', () => {
        expect(max(5, 3)).toBe(5);
    });
    it('should return the second number if it is greater than the first', () => {
        expect(max(2, 4)).toBe(4);
    });
    it('should return the first number if both numbers are equal', () => {
        expect(max(6, 6)).toBe(6);
    });
})

describe('fizzBuzz', () => {
    it('should return FizzBuzz for numbers divisible by both 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
    it('should return Fizz for numbers divisible by 3 only', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });
    it('should return Buzz for numbers divisible by 5 only', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });
    it('should return the number as a string for numbers not divisible by 3 or 5', () => {
        expect(fizzBuzz(1)).toBe('1');
    });
});

describe('calculateAverage', () => {
    it ('should return the average of an array of numbers', () => {
        expect(calculateAverage([1])).toBe(1);
    });
     it ('should return the average of an array of numbers', () => {
        expect(calculateAverage([1, 2, 3])).toBe(2);
    });
})

describe('factorial', () => {
    it('should return 1 if the input is 0', () => {
        expect(factorial(0)).toBe(1);
    });
    it('should return the 1 if the input is 1', () => {
        expect(factorial(1)).toBe(1);
    });
    it('should return 2 if the input is 2', () => {
        expect(factorial(2)).toBe(2);
    });
    it('should return 6 if the input is 3', () => {
        expect(factorial(3)).toBe(6);
    });  
})