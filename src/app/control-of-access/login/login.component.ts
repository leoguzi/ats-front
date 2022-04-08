import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PoPageLogin } from '@po-ui/ng-templates';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loading = false;
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  login(formData: PoPageLogin) {
    this.loading = true;
    const loginData = { email: formData.login, password: formData.password };
    this.userService.login(loginData).subscribe((userData) => {
      console.log(userData);
      this.loading = false;
      this.router.navigate(['main']);
    });
  }
}
