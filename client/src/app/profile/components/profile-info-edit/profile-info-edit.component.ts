import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {IUser} from '../../../helpers/models/user.model';

@Component({
  selector: 'app-profile-info-edit',
  templateUrl: './profile-info-edit.component.html',
  styleUrls: ['./profile-info-edit.component.css']
})
export class ProfileInfoEditComponent implements OnInit {
  form: FormGroup;
  @Input() userInfo: IUser;
  constructor() { }

  ngOnInit() {
    const {firstName, lastName, email, phone, info, status} = this.userInfo;
    this.form = new FormGroup({
      firstName: new FormControl(firstName, Validators.required),
      lastName: new FormControl(lastName, Validators.required),
      email: new FormControl(email, [Validators.required, Validators.email]),
      phone: new FormControl(phone, [Validators.required]),
      info: new FormControl(info),
      status: new FormControl(status)
    });
  }

}
