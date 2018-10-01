import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {matchPasswords} from '../../../helpers/validators/';
import {Observable} from 'rxjs/index';
import {Store} from '@ngrx/store';
import * as fromStore from '../../../@store';

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form = new FormGroup({
    'firstName': new FormControl(null, Validators.required),
    'lastName': new FormControl(null, Validators.required),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'birthday': new FormControl(null, Validators.required),
    'password': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'confirmPassword': new FormControl(null, [Validators.required, Validators.minLength(3)])
  }, matchPasswords);
  loading: Observable<boolean>;
  userCreated: Observable<boolean>;

  constructor(
    private store: Store<fromStore.IAppState>
  ) {}

  ngOnInit() {
    this.loading = this.store.select(fromStore.getAuthLoading);
    this.userCreated = this.store.select(fromStore.getAuthUserCreated);
  }

  submitForm() {
    this.store.dispatch(new fromStore.SignUp(this.form.value));
  }
}
