import {NgModule} from '@angular/core';
import { NoteComponent, AddNoteComponent } from './components';
import { NotesComponent } from './containers';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import { notesReducer } from '../@store';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CoreModule,
    FormsModule,
    SharedModule,
    StoreModule.forFeature('notes', notesReducer)
  ],
  exports: [
    NotesComponent
  ],
  declarations: [
    NotesComponent,
    NoteComponent
  ],
  entryComponents: [
    AddNoteComponent
  ]
})
export class NotesModule {}
