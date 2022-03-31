import CircularBuffer from './circular-buffer';

describe('CircularBuffer', () => {
  test('reading empty buffer should fail', () => {
    const buffer = new CircularBuffer();
    expect(() => buffer.read()).toThrow("Buffer is empty");
  });

  test('can read an item just written', () => {
    const buffer = new CircularBuffer();
    buffer.write('1');
    expect(buffer.read()).toBe('1');
  });

  test('writing new item in full buffer should fail', () => {
    const buffer = new CircularBuffer();
    buffer.length = buffer.size;
    expect(() => buffer.write('1')).toThrow('Buffer is full');
  });

  test('forceWrite should add new item if buffer has any empty space', () => {
    const buffer = new CircularBuffer();
    buffer.forceWrite('1');
    expect(buffer.element).toStrictEqual(['1']);
  });

  test('forceWrite should overwrite existing the oldest item if buffer has not empty space', () => {
    const buffer = new CircularBuffer();
    for (let i = 0; i < 7; i++) {
      buffer.write(i);
    }
    buffer.forceWrite('A');
    console.log(buffer.element);
    expect(buffer.element).toStrictEqual(['A', 1, 2, 3, 4, 5, 6]);
  });

  test('clear should delete the oldest element of the buffer', () => {
    const buffer = new CircularBuffer();
    buffer.write('1');
    buffer.write('2')
    buffer.clear();
    expect(buffer.element).toStrictEqual(['2']);
  });

  test('clear empty buffer should fail', () => {
    const buffer = new CircularBuffer();
    expect(() => buffer.clear()).toThrow("Buffer is empty");
  });
});
