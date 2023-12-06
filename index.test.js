import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './index';

test('capitalize first letter', () => {
  expect(capitalize('john')).toBe('John');
  expect(capitalize('DOE')).toBe('DOE');
  expect(capitalize('joHn')).toBe('JoHn');
  expect(capitalize('_john')).toBe('_john');
});

test('reverse string', () => {
  expect(reverseString('john')).toBe('nhoj');
  expect(reverseString('john doe')).toBe('eod nhoj');
  expect(reverseString('1234')).toBe('4321');
  expect(reverseString('%$^*')).toBe('*^$%');
});

test('do addition with calculator', () => {
  expect(calculator.add(2, 2)).toEqual(4);
  expect(calculator.add(10, 13)).toEqual(23);
  expect(calculator.add(0.34, 1)).toEqual(1.34);
  expect(calculator.add(0.343434, 1.23424242)).toEqual(1.58);
});

test('do subtraction with calculator', () => {
  expect(calculator.subtract(2, 2)).toEqual(0);
  expect(calculator.subtract(-5, -6)).toEqual(1);
  expect(calculator.subtract(125, 20)).toEqual(105);
  expect(calculator.subtract(3.2859, 1.20394)).toEqual(2.08);
});

test('do multiplication with calculator', () => {
  expect(calculator.multiply(2, 2)).toEqual(4);
  expect(calculator.multiply(-5, 6)).toEqual(-30);
  expect(calculator.multiply(-125, -20)).toEqual(2500);
  expect(calculator.multiply(3.2859, 1.20394)).toBeCloseTo(3.96);
});

test('do division with calculator', () => {
  expect(calculator.divide(2, 2)).toEqual(1);
  expect(calculator.divide(-15, 3)).toEqual(-5);
  expect(calculator.divide(-120, -20)).toEqual(6);
  expect(calculator.divide(12.343, 3.432)).toBeCloseTo(3.6);
  expect(() => calculator.divide(12, 0)).toThrow('Division Error: Cannot divide by 0');
});

test('encrypt text using ceaser cipher using key 3', () => {
  const cipher = caesarCipher(3);
  expect(cipher.encrypt('hello')).toBe('khoor');
  expect(cipher.encrypt('hello, world')).toBe('khoor, zruog');
  expect(cipher.encrypt('zebra')).toBe('cheud');
  expect(cipher.encrypt('Hello')).toBe('Khoor');
});

test('encrypt text using ceaser cipher using key 7', () => {
  const cipher = caesarCipher(7);
  expect(cipher.encrypt('hello')).toBe('olssv');
  expect(cipher.encrypt('hello, world')).toBe('olssv, dvysk');
  expect(cipher.encrypt('zebra')).toBe('gliyh');
  expect(cipher.encrypt('Hello')).toBe('Olssv');
});

test('decrypt text using ceaser cipher using key 13', () => {
  const cipher = caesarCipher(13);
  expect(cipher.decrypt('uryyb')).toBe('hello');
  expect(cipher.decrypt('uryyb, jbeyq')).toBe('hello, world');
  expect(cipher.decrypt('zebra')).toBe('mroen');
  expect(cipher.decrypt('Uryyb')).toBe('Hello');
});

test('analyze array, test array 1', () => {
  const stat = analyzeArray([1,8,3,4,2,6]);
  expect(stat.average).toEqual(4);
  expect(stat.min).toEqual(1);
  expect(stat.max).toEqual(8);
  expect(stat.length).toEqual(6);
});

test('analyze array, test array 2', () => {
  const stat = analyzeArray([3,2,-12,23,2,0,2]);
  expect(stat.average).toEqual(2.86);
  expect(stat.min).toEqual(-12);
  expect(stat.max).toEqual(23);
  expect(stat.length).toEqual(7);
});
