export const removePercentage = (value: bigint, percentage: number) => {
  const reduction = (value * BigInt(percentage * 10 ** 6)) / BigInt(10 ** 6);

  return value - reduction;
};
