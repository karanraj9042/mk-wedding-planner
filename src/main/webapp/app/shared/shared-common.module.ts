import { NgModule } from '@angular/core';

import { WeddingplannerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [WeddingplannerSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [WeddingplannerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class WeddingplannerSharedCommonModule {}
