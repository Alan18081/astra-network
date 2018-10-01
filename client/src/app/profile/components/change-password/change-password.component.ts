import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {matchPasswords} from '../../../helpers/validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  @Output() passwordChanged = new EventEmitter<{oldPassword: string, password: string}>();
  form: FormGroup = new FormGroup({
    oldPassword: new FormGroup(null, [Validators.required, Validators.minLength(3)]),
    password: new FormGroup(null, [Validators.required, Validators.minLength(3)]),
    confirmPassword: new FormGroup(null, [Validators.required, Validators.minLength(3)])
  }, matchPasswords);

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    const {oldPassword, password} = this.form.value;
    this.passwordChanged.emit({ oldPassword, password });
  }

}
