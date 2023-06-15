import { NgModule } from '@angular/core';
import { TimeElapsedPipe } from '../pipes/time/timeElapsed.pipe';

const DECLARATIONS = [TimeElapsedPipe];

@NgModule({
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS]
})
export class TimePipeModule {}
