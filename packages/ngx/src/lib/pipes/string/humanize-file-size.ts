import { Pipe, PipeTransform } from "@angular/core";
import { humanizeFileSize } from "@c-cdk/common";


/**
 * Returns string representing size of a file
 */
@Pipe({
  name: 'humanizeFileSize',
  standalone: true,
  pure: true
})
export class HumanizeFileSizePipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    return humanizeFileSize(value);
  }
}
