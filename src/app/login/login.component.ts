import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthService } from '../Auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  

})

export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  isLoggedIn: boolean = false;
  logInClicked:boolean = false;
  

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    
    
  }
  hide = true;
  
 
  
  onSubmit() {
    

    const isAuth = this.authService.login(this.loginForm.get('email')?.value,this.loginForm.get('password')?.value);
    this.logInClicked=true;
    if (isAuth) {
      this.isLoggedIn=true;
      setTimeout(()=>{
        this.router.navigate(['home'])
      }
        ,1000
      )
      
    } else {
      this.errorMessage = 'Incorrect Username or Password';
    }
  }
}
