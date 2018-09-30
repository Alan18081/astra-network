import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../config/index';

@Injectable()
export class AuthService {

  constructor(
    private readonly http: HttpClient
  ) {}

  getUser(): Observable<any> {
    return this.http.get(`${API_URL}/auth/currentUser`);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${API_URL}/auth/login`, { email, password });
  }

  signUp(firstName: string, lastName: string, email: string, password: string, birthday): Observable<any> {
    return this.http.post(`${API_URL}/users`, {
      firstName,
      lastName,
      email,
      password,
      birthday
    });
  }

  setToken(token: string, expiresIn: number | string) {
    localStorage.setItem('authToken', token);
    localStorage.setItem('authTokenExpiresIn', expiresIn.toString());
  }

  getToken() {
    return {
      accessToken: localStorage.getItem('authToken'),
      expiresIn: localStorage.getItem('authTokenExpiresIn')
    };
  }

  removeToken() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authToken');
  }

  sendResetEmail(email): Observable<any> {
    return of(email);
  }
}
