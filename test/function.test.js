const getMemory = require('../src/memory');

test('getMemory', () => {
    expect(() => getMemory(10 ** 10 + 1)).toThrow();
});
test('getMemory', () => {
    expect(() => getMemory(-1)).toThrow();
});
test('getMemory', () => {
    expect(() => getMemory(0)).toThrow();
});
test('getMemory', () => {
    expect(getMemory(275)).toBe('275Б');
    expect(getMemory(35453)).toBe('35кБ');
    expect(getMemory(35453000)).toBe('35МБ');
    expect(getMemory(3545300000)).toBe('3ГБ');
});