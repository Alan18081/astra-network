import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAddNote} from '../interfaces/add-note.interface';
import {API_URL} from '../../config/index';

@Injectable()
export class NotesService {

  constructor(
    private http: HttpClient
  ) {}

  addNote(noteInfo: IAddNote) {
    const formData = new FormData();
    noteInfo.files.forEach(file => {
      formData.append('images[]', file);
    });
    formData.append('title', noteInfo.title);
    formData.append('text', noteInfo.text);
    return this.http.post(`${API_URL}/notes`, noteInfo)
  }
}
