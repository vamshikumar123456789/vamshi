import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })

  constructor(private loginService: LoginService,private router:Router) { }

  submit() {
    console.log(this.loginForm)

    this.loginService.doLogin(this.loginForm.value).subscribe(
      (data: any) => {
        // alert("login success")
        this.router.navigateByUrl('/dashboard');
        localStorage.setItem('token',data.token);
      },
      (err: any) => {
        alert("login failed")
      }
    )
  }
}
