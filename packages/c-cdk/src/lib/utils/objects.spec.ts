import { removeMatchingKeysFromObject } from './objects';

describe('removeMatchingKeysFromObject', () => {
  it('should remove object keys that are null or undefined', () => {
    const obj = {
      name: '',
      surname: null,
      age: 10,
      location: {
        city: 'abidjan',
        country: undefined,
        ref: 0
      }
    };
    const result = removeMatchingKeysFromObject(obj);
    expect(result).not.toHaveProperty('surname');
    expect(result).not.toHaveProperty('location.country');
  });

  it('should remove object keys with values included in provided array', () => {
    const obj = {
      name: '',
      surname: null,
      age: 10,
      location: {
        city: 'abidjan',
        country: undefined,
        ref: 0
      },
    };
    const result = removeMatchingKeysFromObject(obj, [0, '']);
    console.log(result)
    expect(result).not.toHaveProperty('location.ref');
    expect(result).not.toHaveProperty('name');
  });

  it('should keep all object keys when no values match provided array', () => {
    const obj = {
      name: '',
      surname: null,
      age: 10,
      location: {
        city: 'abidjan',
        country: undefined,
        ref: 0
      }
    };
    const result = removeMatchingKeysFromObject(obj, ['jean']);
    expect(result).toMatchObject(obj);
  });
});
