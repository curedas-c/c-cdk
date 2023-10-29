import { Pipe, PipeTransform } from "@angular/core";
import { toInitials } from "@c-cdk/common";


/**
 * A pipe that returns the initials from a full name
 */
@Pipe({
  name: 'toInitials',
  standalone: true,
  pure: true
})
export class ToInitialsPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    return value ? toInitials(value) : '';
  }
}
