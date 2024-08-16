import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/service/api-call.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class LoginComponent {
  loginForm!: FormGroup;
  showPassword: boolean = false;

  constructor(private route: Router, private formBuilder: FormBuilder, private apiCallService: ApiCallService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

    const reqBody = {
      'username':username,
      'password':password,
    }
      this.apiCallService.post('/login', reqBody).subscribe(
        (res) => {
          console.log (res)
          localStorage.setItem('role_id', (res as any)?.data?.role_id);
          localStorage.setItem('user_id', (res as any)?.data?.id);
          if ((res as any)?.data?.role_id === 3){
            this.route.navigate(['/home']);
           } else {
            this.route.navigate(['/mechanicheader']);
           }
        },
        (error) => {
          console.log(error)
        }
        )
      console.log('Username:', username);
      console.log('Password:', password);
    }
  }

  signUp() {

  }

  togglePasswordVisibility(input: HTMLInputElement) {
    this.showPassword = !this.showPassword;
    input.type = this.showPassword ? 'text' : 'password';
  }
}
