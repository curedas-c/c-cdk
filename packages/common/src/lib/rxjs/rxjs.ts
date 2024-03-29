import {
  delay,
  filter,
  fromEvent,
  mergeMap,
  Observable,
  of,
  OperatorFunction,
  retry
} from 'rxjs';
/**
 * A combination of `delay` and `of` rxjs Operators.
 *
 * Suitable for unit test when you want to return a value after a certain time.
 *
 * ## Example
 *
 * Emit a string after 5 seconds
 *
 * ```ts
 * import { ofDelay } from '@c-cdk/common';
 *
 * const nameAfterDelay = ofDelay('Richard', 5000);
 * nameAfterDelay.subscribe(x => console.log(x));
 * ```
 *
 *
 * @param data Value to be returned as an Observable.
 * @param millisecondsDelay time to wait before emission. (defaults to 2500ms)
 * @return An observable that emit after the specified time is elapsed..
 */
export const ofDelay = <T>(data: T, millisecondsDelay = 2500) =>
  of<T>(data).pipe(delay(millisecondsDelay));

/**
 * A modified `retry` operator that
 * handle network connection loss/recovery via `navigator.onLine`
 *
 * ## Example
 *
 * Retry 2 times each 3000ms.
 *
 * If device is offline at subscription time,
 * it will wait to be online before relaunch subscription
 *
 * ```ts
 * import { retryWhenOnline } from '@c-cdk/common';
 *
 * const fetchData = dummyService.fetchBananas();
 * fetchData.pipe(retryWhenOnline({ count: 2, delay: 3000 }))
 * .subscribe(x => console.log(x));
 * ```
 *
 * @param {({
 *   count: number | undefined;
 *   delay: number | undefined;
 *   delayObservable$?: Observable<boolean | undefined>;
 *   retryFactor: number | undefined;
 *   minimumAttemptBeforeApplyingFactor: number | undefined;
 * })} [options]
 * @return {*}  {OperatorFunction<T, T>}
 */
export function retryWhenOnline<T>(options?: {
  count?: number;
  delay?: number;
  resetOnSuccess?: boolean;
  retryFactor?: number;
  minimumAttemptBeforeApplyingFactor?: number;
  delayObservable$?: Observable<boolean | undefined>;
}): OperatorFunction<T, T> {
  const {
    count,
    delay: retryDelay,
    delayObservable$,
    resetOnSuccess,
    retryFactor,
    minimumAttemptBeforeApplyingFactor
  } = options || {};
  return source$ =>
    source$.pipe(
      retry({
        count,
        delay: (error, retryCount) => {
          const defaultDelay = retryDelay ?? 5000;
          let nextDelay = defaultDelay;
          if (retryCount && retryCount > 1 && retryFactor && retryFactor >= 1) {
            let currentRetryCount = retryCount;
            const minimumAttempt = minimumAttemptBeforeApplyingFactor
              ? Math.round(minimumAttemptBeforeApplyingFactor)
              : 1;
            if (minimumAttempt > 1 && retryCount >= minimumAttempt) {
              currentRetryCount = retryCount - minimumAttempt;
            }
            nextDelay = defaultDelay * Math.pow(currentRetryCount, retryFactor);
          }

          const error$ = delayObservable$
            ? delayObservable$.pipe(
                filter(Boolean),
                mergeMap(() => error)
              )
            : of(error);
          const isDeviceOffline = navigator.onLine === false;
          if (isDeviceOffline) {
            return fromEvent(window, 'online').pipe(mergeMap(() => error$));
          }
          return error$.pipe(delay(nextDelay));
        },
        resetOnSuccess
      })
    );
}
