const getNumDayFromLongDay = require('../../src/markdown/getNumDayFromLongDay');

test('that checks if 0 returns 0', () => {
  expect(getNumDayFromLongDay(0)).toEqual(0);
});
test('that checks any invalid day returns undefined', () => {
  expect(getNumDayFromLongDay(7)).toBeUndefined();
});
test('that checks if 1 returns 1', () => {
  expect(getNumDayFromLongDay(1)).toEqual(1);
});
test('that checks if 2 returns 2', () => {
  expect(getNumDayFromLongDay(2)).toEqual(2);
});
test('that checks if 3 returns 3', () => {
  expect(getNumDayFromLongDay(3)).toEqual(3);
});
test('that checks if 4 returns 4', () => {
  expect(getNumDayFromLongDay(4)).toEqual(4);
});
test('that checks if 5 returns 5', () => {
  expect(getNumDayFromLongDay(5)).toEqual(5);
});
test('that checks if 6 returns 6', () => {
  expect(getNumDayFromLongDay(6)).toEqual(6);
});

test('that checks if \'sun\' returns 0', () => {
  expect(getNumDayFromLongDay('sun')).toBe(0);
});
test('that checks if \'mon\' returns 1', () => {
  expect(getNumDayFromLongDay('mon')).toBe(1);
});
test('that checks if \'tue\' returns 2', () => {
  expect(getNumDayFromLongDay('tue')).toBe(2);
});
test('that checks if \'wed\' returns 3', () => {
  expect(getNumDayFromLongDay('wed')).toBe(3);
});
test('that checks if \'thu\' returns 4', () => {
  expect(getNumDayFromLongDay('thu')).toBe(4);
});
test('that checks if \'fri\' returns 5', () => {
  expect(getNumDayFromLongDay('fri')).toBe(5);
});
test('that checks if \'sat\' returns 6', () => {
  expect(getNumDayFromLongDay('sat')).toBe(6);
});

test('that checks if \'Sunday\' returns 0', () => {
  expect(getNumDayFromLongDay('Sunday')).toBe(0);
});
test('that checks if \'Monday\' returns 1', () => {
  expect(getNumDayFromLongDay('Monday')).toBe(1);
});
test('that checks if \'Tuesday\' returns 2', () => {
  expect(getNumDayFromLongDay('Tuesday')).toBe(2);
});
test('that checks if \'Wednesday\' returns 3', () => {
  expect(getNumDayFromLongDay('Wednesday')).toBe(3);
});
test('that checks if \'Thursday\' returns 4', () => {
  expect(getNumDayFromLongDay('Thursday')).toBe(4);
});
test('that checks if \'Friday\' returns 5', () => {
  expect(getNumDayFromLongDay('Friday')).toBe(5);
});
test('that checks if \'Saturday\' returns 6', () => {
  expect(getNumDayFromLongDay('Saturday')).toBe(6);
});
