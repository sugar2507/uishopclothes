import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User | null>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user') ?? '')
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User | null {
    return this.userSubject.value;
  }

  // login(phone: any) {
  //   return this.http
  //     .post<User>(`${environment.apiUrl}/api/user`, {
  //       phone,
  //     })
  //     .pipe(
  //       map((user: any) => {
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem('user', JSON.stringify(user));
  //         this.userSubject.next(user);
  //         return user;
  //       })
  //     );
  // }

  // register(user: User) {
  //   return this.http.post(`${environment.apiUrl}/users/register`, user);
  // }
}
