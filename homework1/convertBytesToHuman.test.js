/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
    expect(convertBytesToHuman(-1)).toBe(false);
    expect(convertBytesToHuman(-1)).not.toBe('1 B');
    expect(convertBytesToHuman('wrong')).toBe(false);
    expect(convertBytesToHuman('1xxx')).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
    expect(convertBytesToHuman(0)).toBe('0 B');
    expect(convertBytesToHuman(5)).toBe('5 B');
    expect(convertBytesToHuman(1024)).toBe('1 KB');
    expect(convertBytesToHuman(123123123)).toBe('117.42 MB');
});

//мой тест для неопределённых единиц измерения
test('Возвращает корректное значение для значений больше PB', () => {
    expect(convertBytesToHuman(11258999068426240)).toBe('10 PB');
    expect(convertBytesToHuman(11596769040479027)).toBe('10.30 PB');
    expect(convertBytesToHuman(1154047404513689600)).toBe('1025 PB');
    expect(convertBytesToHuman(13899988702909777838)).toBe('12345.67 PB');
    expect(convertBytesToHuman(138999977101090325790)).toBe('123456.78 PB');
});
