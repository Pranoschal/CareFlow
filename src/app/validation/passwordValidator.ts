import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
    const isLengthValid = password.length >= 8;

    const errors: ValidationErrors = {};

    if (!hasUppercase) {
      errors['missingUppercase'] = true;
    }
    if (!hasLowercase) {
      errors['missingLowercase'] = true;
    }
    if (!hasDigit) {
      errors['missingDigit'] = true;
    }
    if (!hasSpecialChar) {
      errors['missingSpecialChar'] = true;
    }
    if (!isLengthValid) {
      errors['invalidLength'] = true;
    }

    return Object.keys(errors).length ? errors : null;
  };
}
