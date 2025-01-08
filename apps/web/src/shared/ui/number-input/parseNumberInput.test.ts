import { parseNumberInput } from '@/shared/ui/number-input/parseNumberInput';
import { describe, expect, it } from 'vitest';

describe('parseNumberInput', () => {
  it('should parse string and remove any non-numeric characters', () => {
    expect(parseNumberInput('1,000.00')).toBe('1000');
  });

  it('should return 0 if the parsed number is NaN', () => {
    expect(parseNumberInput('abc')).toBe('0');
  });

  it('should return 0 if the parsed number is empty', () => {
    expect(parseNumberInput('')).toBe('0');
  });

  it('should parse big numbers and return them as strings to avoid precision loss', () => {
    expect(
      parseNumberInput('100 000 000 000 000 000 000 000 000 000 000'),
    ).toBe('100000000000000000000000000000000');
  });

  it('should parse decimal numbers and return them as strings to avoid precision loss', () => {
    expect(parseNumberInput('1.00000000000000000000000000000001')).toBe(
      '1.00000000000000000000000000000001',
    );
  });

  it('should big numbers with decimal points and return them as strings to avoid precision loss', () => {
    expect(
      parseNumberInput(
        '100 000 000 000 000 000 000 000 000 000 000.00000000000000000000000000000001',
      ),
    ).toBe(
      '100000000000000000000000000000000.00000000000000000000000000000001',
    );
  });
});
