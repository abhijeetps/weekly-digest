const getLongDate = require('../../src/markdown/getLongMonth');

test('that passing 0 returns January', () => {
  expect(getLongDate(0)).toBe('January');
});
test('that passing 1 returns February', () => {
  expect(getLongDate(1)).toBe('February');
});
test('that passing 2 returns March', () => {
  expect(getLongDate(2)).toBe('March');
});
test('that passing 3 returns April', () => {
  expect(getLongDate(3)).toBe('April');
});
test('that passing 4 returns May', () => {
  expect(getLongDate(4)).toBe('May');
});
test('that passing 5 returns June', () => {
  expect(getLongDate(5)).toBe('June');
});
test('that passing 6 returns July', () => {
  expect(getLongDate(6)).toBe('July');
});
test('that passing 7 returns August', () => {
  expect(getLongDate(7)).toBe('August');
});
test('that passing 8 returns September', () => {
  expect(getLongDate(8)).toBe('September');
});
test('that passing 9 returns October', () => {
  expect(getLongDate(9)).toBe('October');
});
test('that passing 10 returns November', () => {
  expect(getLongDate(10)).toBe('November');
});
test('that passing 11 returns December', () => {
  expect(getLongDate(11)).toBe('December');
});
