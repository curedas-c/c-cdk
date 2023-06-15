---
sidebar_position: 2
---

Des fonctions pour gérer ou génerer des Objects.

### removeMatchingKeysFromObject

Supprime les clés dont les valeurs sont contenus dans le tableau passé en paramêtres.

Par défaut les clés à valeurs `null` et `undefined` sont supprimées.

```ts title="./dummy.service.ts"
import { removeMatchingKeysFromObject } from '@c-cdk/common';

@Injectable()
export class DummyService {
  example() {
    const obj = const obj = {
      name: '',
      surname: null,
      age: 10,
      location: {
        city: 'abidjan',
        country: undefined,
        ref: 0
      }
    };

    removeMatchingKeysFromObject(obj);
    /**
     * Valeur retournée: 
     * {
     * name: '',
     * age: 10,
     * location: {
     *    city: 'abidjan',
     *    ref: 0
     *  }
     * };
     * 
     * **/

    removeMatchingKeysFromObject(obj, [10, '', undefined, null]);
    /**
     * Valeur retournée: 
     * {
     *   location: {
     *     city: 'abidjan',
     *     ref: 0
     *   }
     * };
     * 
     * **/
  }
}
```
