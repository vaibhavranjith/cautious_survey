import { User } from './../_models/user.model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.baseUrl}`)
  }
}