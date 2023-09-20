import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginRequest } from '../interfaces/login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token:string;
  loginForm: FormGroup;
  authenticationError: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, // Inyecta el servicio de autenticación
    private router: Router
    
    ) { }

  ngOnInit(): void {
    
    this.initializeForm();
    const logeado= localStorage.getItem('authToken');
    if(logeado){
      this.router.navigate(['dashboard'])
    }
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['',[ Validators.required, Validators.minLength(6), 
      Validators.maxLength(40), ], ]
    });
  }

  onSubmit() {

    if (this.loginForm.valid) {
      const params: LoginRequest = {
        username: this.loginForm.get('username')!.value,
        password: this.loginForm.get('password')!.value
      };

      this.authService.authenticate(params).subscribe(
        () => {
          
          this.router.navigate(['dashboard']);
          localStorage.setItem('authToken', this.token);
        },
        (error) => {
          // Maneja los errores de autenticación
          this.authenticationError = 'Usuario o contraseña incorrectos.';
        }
      );
    }
  }
}
