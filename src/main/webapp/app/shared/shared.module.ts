import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeddingplannerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [WeddingplannerSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [WeddingplannerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WeddingplannerSharedModule {
  static forRoot() {
    return {
      ngModule: WeddingplannerSharedModule
    };
  }
}
