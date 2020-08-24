import { environment } from './../../environments/environment';
import { AuthenticationService } from './../_services/authentication.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const currentUser = this.authenticationService.currentUserValue;
    const isLoggedIn = currentUser && currentUser.access_token;
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if(isLoggedIn && isApiUrl){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.access_token}`
        }
      })
    }
    return next.handle(request);
  }
}
