import { Pipe, PipeTransform } from '@angular/core';
import dayjs from '../../external-deps/dayjs.lib';

/**
 * A pipe using internally {@link https://day.js.org dayjs} to display elapsed time.
 * 
 *
 * @param time date string/object to compare with actual time.
 * @return A string representing elapsed time.
 */
@Pipe({
  name: 'timeElapsed',
  pure: true
})
export class TimeElapsedPipe implements PipeTransform {
  transform(time: dayjs.ConfigType) {
    return dayjs(time).fromNow();
  }
}
