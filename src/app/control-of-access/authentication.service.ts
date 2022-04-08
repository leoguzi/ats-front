import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private userService: UserService) {}

  authenticate(user: User):
}
