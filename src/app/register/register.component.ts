import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  register: FormGroup;

  constructor(private fb: FormBuilder) {
    this.register = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      userName: [
        '',
        [Validators.required, Validators.minLength(4)],
        this.noSpacesValidator,
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(7), this.passwordValidator],
      ],
      confirmPassword: [
        '',
        [Validators.required, Validators.minLength(7), this.passwordValidator],
      ],
    });
  }

  noSpacesValidator(control: {
    value: string;
  }): { [key: string]: boolean } | null {
    if (control.value && /\s/.test(control.value)) {
      return { noSpaces: true };
    }
    return null;
  }

  passwordValidator(control: {
    value: string;
  }): { [key: string]: boolean } | null {
    const password = control.value;

    // Check for at least one lowercase letter
    const hasLowercase = /[a-z]/.test(password);

    // Check for at least one uppercase letter
    const hasUppercase = /[A-Z]/.test(password);

    // Check for at least one digit
    const hasDigit = /\d/.test(password);

    // Check for at least one special character from *@%$#
    const hasSpecialChar = /[@*%$#]/.test(password);

    // Combine the conditions
    const isValid = hasLowercase && hasUppercase && hasDigit && hasSpecialChar;

    // Return null if the password is valid, or an error object otherwise
    return isValid ? null : { invalidPassword: true };
  }

  submitForm() {
    alert('account registered');
  }

  onSubmit() {
    alert('Account registered');
  }
}
