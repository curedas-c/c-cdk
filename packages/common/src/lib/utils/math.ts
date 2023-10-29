/**
 * Returns a random integer that exist between provided values.
 *
 * If the provided range is invalid, the nearest integer of the greatest value will be returned.
 *
 */
export const randomInteger = (min: number, max: number) => {
  if (max < min) {
    return Math.floor(min);
  }
  return Math.floor(Math.random() * (max - min) + min);
};

/**
 * Calculates the percentage change between two values and formats it with a plus or minus sign.
 */
export const percentChange = (
  currentValue: number | null | undefined,
  previousValue: number | null | undefined,
  fractionDigit = 2
): string => {
  if (
    typeof currentValue !== 'number' ||
    typeof previousValue !== 'number' ||
    isNaN(currentValue) ||
    isNaN(previousValue)
  )
    return '';

  const change =
    ((currentValue - previousValue) / Math.abs(previousValue)) * 100;
  const sign = change >= 0 ? '+' : '-';

  return `${sign}${change.toFixed(fractionDigit)}%`;
};

/**
 * Returns roman representation of a number
 */
export const toRomanNumber = (arabicNumber: number): string => {
  if (isNaN(arabicNumber) || arabicNumber < 1 || arabicNumber > 3999) return '';

  const romanNumerals = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let roman = '';
  for (let i = 0; i < romanNumerals.length; i++) {
    while (arabicNumber >= values[i]) {
      roman += romanNumerals[i];
      arabicNumber -= values[i];
    }
  }

  return roman;
};
