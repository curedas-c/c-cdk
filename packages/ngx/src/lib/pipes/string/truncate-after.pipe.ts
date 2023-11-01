import { Pipe, PipeTransform } from '@angular/core';
import { truncateAfter } from '@c-cdk/common';

/**
 * Truncate a text when longer that provided limit
 */
@Pipe({
  name: 'truncateAfter',
  standalone: true,
  pure: true
})
export class TruncateAfterPipe implements PipeTransform {
  transform(value: string | null | undefined, limit: number): string {
    return value ? truncateAfter(value, limit) : '';
  }
}
