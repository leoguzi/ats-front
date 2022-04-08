import { of, delay, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  login(loginData: User): Observable<User> {
    const user = { ...loginData, recruiter: true, name: 'Leonardo Guzi' };
    return of(user).pipe(delay(1000));
  }
}
