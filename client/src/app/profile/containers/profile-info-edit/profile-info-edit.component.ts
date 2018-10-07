import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../helpers/models/user.model';
import * as fromStore from '../../../@store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-profile-info-edit',
  templateUrl: './profile-info-edit.component.html',
  styleUrls: ['./profile-info-edit.component.scss']
})
export class ProfileInfoEditComponent implements OnInit {
  form: FormGroup;
  constructor(
    private readonly store: Store<fromStore.IAppState>
  ) { }

  ngOnInit() {
    this.store.select(fromStore.getAuthUserInfo)
      .subscribe((userInfo: User) => {
        const {firstName, lastName, email, phone, info, status, avatar, background} = userInfo;
        this.form = new FormGroup({
          firstName: new FormControl(firstName, Validators.required),
          lastName: new FormControl(lastName, Validators.required),
          email: new FormControl(email, [Validators.required, Validators.email]),
          phone: new FormControl(phone),
          info: new FormControl(info),
          status: new FormControl(status),
          avatar: new FormControl(avatar),
          background: new FormControl(background)
        });
      });
  }

  onSubmit() {
    this.store.dispatch(new fromStore.UpdateProfile(this.form.value));
  }

}
