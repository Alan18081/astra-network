import {Action} from '@ngrx/store'
import {ISignUpData} from '../../helpers/auth/signup.interface';
import {IAuthSuccess} from '../../helpers/auth/auth-success.interface';
import {User} from '../../helpers/models/user.model';

export const GET_USER = '[Auth] Get User';
export const GET_USER_FAILED = '[Auth] Get User Failed';
export const LOGIN = '[Auth] Login';
export const LOGIN_FAILED = '[Auth] Login Failed';
export const AUTH_SUCCESS = '[Auth] Auth success';
export const SIGN_UP = '[Auth] Sign Up';
export const SIGN_UP_FAILED = '[Auth] Sign Up Failed';
export const LOGOUT = '[Auth] Logout';
export const LOGOUT_SUCCESS = '[Auth] Logout Success';
export const RESET_PASSWORD = '[Auth] Reset Password';
export const RESET_PASSWORD_SUCCESS = '[Auth] Reset Password Success';
export const RESET_PASSWORD_FAILED = '[Auth] Reset Password Failed';
export const USER_CREATED = '[Auth] User Created';

export const CHANGE_PASSWORD = '[Auth] Change password';
export const UPDATE_PROFILE = '[Auth] Update profile';
export const UPDATE_PROFILE_SUCCESS = '[Auth] Update profile success';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: {email: string, password: string}) {}
}

export class LoginFailed implements Action {
  readonly type = LOGIN_FAILED;
  constructor(public payload) {}
}

export class AuthSuccess implements Action {
  readonly type = AUTH_SUCCESS;
  constructor(public payload: IAuthSuccess) {}
}

export class SignUp implements Action {
  readonly type: string = SIGN_UP;
  constructor(public payload: ISignUpData) {}
}

export class UserCreated implements Action {
  readonly type: string = USER_CREATED;
  constructor(public payload = null) {}
}

export class SignUpFailed implements Action {
  readonly type = SIGN_UP_FAILED;
  constructor(public payload) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(public payload = null) {}
}

export class LogoutSuccess implements Action {
  readonly type = LOGOUT_SUCCESS;
  constructor(public payload = null) {}
}

export class GetUser implements Action {
  readonly type = GET_USER;
  constructor(public payload = null) {}
}

export class GetUserFailed implements Action {
  readonly type = GET_USER_FAILED;
  constructor(public payload) {}
}

export class ResetPassword implements Action {
  readonly type = RESET_PASSWORD;
  constructor(public payload: string) {}
}

export class ResetPasswordSuccess implements Action {
  readonly type = RESET_PASSWORD_SUCCESS;
  constructor(public payload = null) {}
}

export class ResetPasswordFailed implements Action {
  readonly type = RESET_PASSWORD_FAILED;
  constructor(public payload: any) {}
}

export class ChangePassword implements Action {
  readonly type = CHANGE_PASSWORD;
  constructor(public payload: { oldPassword: string, newPassword: string }) {}
}

export class UpdateProfile implements Action {
  readonly type = UPDATE_PROFILE;
  constructor(public payload: User) {}
}

export class UpdateProfileSuccess implements Action {
  readonly type = UPDATE_PROFILE_SUCCESS;
  constructor(public payload: User) {}
}

export type AuthAction =
  | AuthSuccess
  | Login
  | LoginFailed
  | Logout
  | LogoutSuccess
  | SignUp
  | SignUpFailed
  | GetUser
  | GetUserFailed
  | ResetPassword
  | ResetPasswordSuccess
  | ResetPasswordFailed
  | ChangePassword

