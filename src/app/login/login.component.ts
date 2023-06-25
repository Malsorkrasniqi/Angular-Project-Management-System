import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthService } from '../Auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';




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

    if (isAuth) {
      this.isLoggedIn=true;
      timer(1000).subscribe(() => {
        this.router.navigate(['home'])
    })
      
    } else {
      this.errorMessage = 'Incorrect Username or Password';
    }
  }
}
