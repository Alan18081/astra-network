import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SubtitleComponent,
  TitleComponent,
  FileLoaderComponent,
  FilesListLoaderComponent,
  SectionHeadComponent,
  AvatarComponent,
  UserBlockComponent
} from './components';


const components = [
  SectionHeadComponent,
  AvatarComponent,
  FileLoaderComponent,
  FilesListLoaderComponent,
  TitleComponent,
  SubtitleComponent,
  UserBlockComponent
];

@NgModule({
  imports: [
    CoreModule,
    ReactiveFormsModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class SharedModule {

}
