import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  togglePasswordView() {
    const togglePassword = document.getElementById(
      'togglePassword'
    ) as HTMLElement;
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePassword.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      togglePassword.classList.replace('fa-eye-slash', 'fa-eye');
    }
  }
}
