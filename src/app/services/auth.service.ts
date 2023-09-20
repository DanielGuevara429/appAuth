import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../interfaces/login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlApiAuth='http://159.65.96.86:8080/services/auth/signin'

  constructor(private http: HttpClient) { }




  public authenticate(params:LoginRequest):Observable<any>{
    return this.http.post<any>(this.urlApiAuth,params);

  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken'); // Verifica si el token existe
  }
}
