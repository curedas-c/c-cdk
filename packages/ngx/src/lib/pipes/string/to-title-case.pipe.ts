import { Pipe, PipeTransform } from '@angular/core';
import { toTitleCase } from '@c-cdk/common';

/**
 * A pipe that returns title case of a provided string
 */
@Pipe({
  name: 'toTitleCase',
  standalone: true,
  pure: true
})
export class ToTitleCasePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    return value ? toTitleCase(value) : '';
  }
}
