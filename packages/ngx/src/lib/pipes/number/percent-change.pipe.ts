import { Pipe, PipeTransform } from '@angular/core';
import { percentChange } from '@c-cdk/common';

/**
 * A pipe that calculates the percentage change between two values and formats it with a plus or minus sign.
 */
@Pipe({
  name: 'percentChange',
  standalone: true,
  pure: true
})
export class PercentChangePipe implements PipeTransform {
  transform(
    currentValue: number | null | undefined,
    previousValue: number | null | undefined,
    fractionDigit = 2
  ): string {
    return percentChange(currentValue, previousValue, fractionDigit);
  }
}
