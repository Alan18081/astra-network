import {NgModule} from '@angular/core';
import { SectionHeadComponent } from './components/section-head/section-head.component';
import {CoreModule} from '../core/core.module';
import { AvatarComponent } from './components/avatar/avatar.component';

const components = [
  SectionHeadComponent,
  AvatarComponent
];

@NgModule({
  imports: [CoreModule],
  declarations: [...components],
  exports: [...components]
})
export class SharedModule {

}
