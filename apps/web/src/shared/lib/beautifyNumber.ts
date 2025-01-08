/* eslint-disable prettier/prettier */

export const beautifyNumber = (
  value: string | number | bigint | undefined | null,
  overrideToFixed?: number,
) => {
  let typedValue = 0;

  if (!value) {
    return '0';
  }

  if (typeof value === 'string') {
    typedValue = Number.parseFloat(value);
  } else if (typeof value === 'number') {
    typedValue = value;
  } else if (typeof value === 'bigint') {
    typedValue = Number.parseFloat(value.toString());
  }
  if (typedValue === 0) {
    return '0';
  }

  if (
    typedValue < 0.000001 ||
    (overrideToFixed && typedValue < 10 / overrideToFixed)
  ) {
    return '<0.0001';
  }

  if (overrideToFixed) {
    return typedValue.toFixed(overrideToFixed);
  }

  if (typedValue > 10_000_000) {
    return typedValue.toFixed(1);
  }

  if (typedValue > 10_000) {
    return typedValue.toFixed(2);
  }

  return typedValue.toFixed(6);
};
