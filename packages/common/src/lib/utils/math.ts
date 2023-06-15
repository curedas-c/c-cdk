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
