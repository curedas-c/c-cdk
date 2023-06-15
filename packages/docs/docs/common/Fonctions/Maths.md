---
sidebar_position: 1
---

Des fonctions pour gérer ou génerer des nombres.

### randomInteger

Génère un nombre entier aléatoire compris dans l'interval passé en paramêtres.

```ts title="./dummy.service.ts"
import { randomInteger } from 'c-cdk';

@Injectable()
export class DummyService {
  generateArticleReadCount() {
    return randomInteger(100, 500);
  }
}
```
