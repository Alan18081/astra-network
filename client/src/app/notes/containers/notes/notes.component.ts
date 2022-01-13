import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddNoteComponent } from '../../components/add-note/add-note.component';
import { Observable } from 'rxjs/index';
import { Note } from '../../../helpers/models/note.model';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../@store';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: Observable<Note[]>;

  constructor(
    private store: Store<fromStore.NotesState>,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.notes = this.store.select(fromStore.getAllNotes);
  }

  showModal() {
    this.dialog.open(AddNoteComponent);
  }

}
