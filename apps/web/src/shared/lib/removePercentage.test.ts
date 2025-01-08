import { removePercentage } from '@/shared/lib/removePercentage';
import { describe, expect, it } from 'vitest';

describe('removePercentage', () => {
  it('should remove the percentage from the value', () => {
    expect(
      removePercentage(BigInt('1000000000000000000000000000000000'), 0.05),
    ).toBe(BigInt('950000000000000000000000000000000'));
  });

  it('should remove percentage if percentage is less than 0.01', () => {
    expect(removePercentage(BigInt('100'), 0.005)).toBe(BigInt('100'));
  });
});
