import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {AuthService} from '../services';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(
    private readonly inj: Injector
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService: any = this.inj.get(AuthService);

    if(!authService.getToken()) {
      return next.handle(req);
    }

    const updatedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken().accessToken}`
      }
    });

    return next.handle(updatedReq);
  }
}
