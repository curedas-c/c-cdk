---
sidebar_position: 2
---

Des opérateurs RxJS personnalisés, qui rajoutent ou combinent des opérateurs existants.

### ofDelay

Une combinaison des opérateurs rxjs `delay` and `of`.
L'opérateur retourne la valeur passée en paramêtre après un temps définit (millisecondes).

Cela peux s'avérer utile lors de l'utilisation de mocks oû l'on souhaite simuler un delai de chargement.

```ts title="./user.service.mock.ts"
import { ofDelay } from '@c-cdk/common';
import { faker } from '@faker-js/faker';
import { User } from '@shared/models/auth.models';

export const USER_MOCK: User = {
  id: faker.random.alphaNumeric(),
  username: faker.internet.email(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
};

@Injectable()
export class UserMockService extends UserService {
  override logUser(...args: unknown) {
    return ofDelay(USER_MOCK, 3000);
  }
}
```

### retryWhenOnline

Une version modifiée de l'opérateur `retry`,
qui prend en compte le status actuel du réseau via `navigator.onLine`.

Dans l'exemple ci-dessous, la requête sera rééssayée 2 fois toutes les 3 secondes.

L'opérateur attandra le retour de la connexion, dans le cas oû `navigator.onLine === false` au moment de la souscription. 

Le paramêtre `delayObservable$` permet d'attendre l'émission de l'observable fournit, avant la resouscription.

```ts title="./banana.component.ts"
import { retryWhenOnline } from '@c-cdk/common';
 
@Component({
  selector: 'banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BananaComponent {
  constructor(private http: HttpClient) {}

  getLatestBananas() {
    return this.http
    .get('example.com')
    .pipe(
      retryWhenOnline({
        count: 2,
        delay: 3000,
      }),
      tap({
        next: res => console.log(res)
      })
    )
    .subscribe();
  }
}
```
