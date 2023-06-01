/**
 * Remove plain object keys with values that match provided values.
 * By default it removes null and undefined keys.
 * 
 *
 */

export const removeMatchingKeysFromObject = (
  inputRecord: Record<string, any>,
  valuesToFilter?: Array<string | number | null | undefined>
): Record<string, any> => {
  return Object.entries(inputRecord)
    .filter(([_, value]) => !(valuesToFilter || [null, undefined]).includes(value))
    .reduce(
      (acc, [key, value]) => {
        return {
            ...acc,
            [key]:
              value === Object(value) ? removeMatchingKeysFromObject(value, valuesToFilter) : value
          }
      },
      []
    );
};
