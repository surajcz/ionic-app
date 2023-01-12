import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Storage } from '@ionic/storage';

import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    private storage: Storage,
    private router: Router,
    private commonService: CommonService
  ) {
    this.registerForm = this.formBuilder.group(
      {
        fullName: ['', [Validators.required]],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
        ],
        mobile: [
          '',
          [Validators.required, Validators.pattern('^[0-9]{9,11}$')],
        ],
        newPassword: ['', [Validators.required, Validators.pattern('.{8,}$')]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: ConfirmedValidator('newPassword', 'confirmPassword'),
      }
    );
  }

  get errorControl() {
    return this.registerForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.registerForm.valid) {
      console.log('Please provide all the required values!');
      this.registerForm.markAllAsTouched();
      return;
    } else {
      this.commonService.showLoader();
      console.log(this.registerForm.value);
      this.storage.set('registerUser', JSON.stringify(this.registerForm.value));
      setTimeout(() => {
        this.commonService.hideLoader();     
      }, 500);
      this.router.navigate(['/login']);
    }
  }
}

export function ConfirmedValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (
      matchingControl.errors &&
      !matchingControl.errors['confirmedValidator']
    ) {
      return;
    }

    if (control.value != matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
