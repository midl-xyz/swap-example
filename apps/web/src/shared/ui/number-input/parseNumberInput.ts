export const parseNumberInput = (value: string = '', dot: string = '.') => {
  const trimmedValue = value.trim();

  const regex = new RegExp(`[^0-9${dot}]`, 'g');
  const parsedValue = trimmedValue.replace(regex, '');

  const [integer, decimal] = parsedValue.split(dot);

  if (parseInt(decimal) === 0) {
    return integer;
  }

  return parsedValue || '0';
};
