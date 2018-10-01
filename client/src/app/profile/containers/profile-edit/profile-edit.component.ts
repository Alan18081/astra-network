import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromStore from '../../../@store';
import {IUser} from '../../../helpers/models/user.model';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  form: FormGroup;
  constructor(
    private readonly store: Store<fromStore.IAppState>
  ) { }

  ngOnInit() {

  }

  saveInfo({}) {

  }

  changePassword({oldPassword, password}) {
    this.store.dispatch(new fromStore.ChangePassword({ oldPassword, newPassword: password }));
  }

}
