import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;
  isSubmitted = false;
  registerUserData: any;
  emailMatch = true;
  passwordMatch = true;

  constructor(
    public formBuilder: FormBuilder,
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private toastController: ToastController,
    public commonService: CommonService
  ) {
    this.loginForm = this.formBuilder.group({
      loginEmail: ['', [Validators.required]],
      loginPassword: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.storage.get('registerUser').then((val) => {
      this.registerUserData = JSON.parse(val);
      console.log(this.registerUserData);
    });
  }
  get loginErrorControl() {
    return this.loginForm.controls;
  }

  submitLoginForm() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      console.log('Please provide all the required values!');
      this.loginForm.markAllAsTouched();
      return;
    }
    this.commonService.showLoader();
    if (
      this.registerUserData.email == this.loginForm.value.loginEmail &&
      this.registerUserData.newPassword == this.loginForm.value.loginPassword
    ) {
      console.log('if');
      this.storage.set('userData', JSON.stringify(this.registerUserData));
      this.commonService.hideLoader();
      this.commonService.showToast('User loggedIn Successfully!', 'success');
      // this.storage.remove('registerUser');
    } else {
      this.commonService.hideLoader();
      if (
        this.registerUserData.email != this.loginForm.value.loginEmail &&
        this.registerUserData.newPassword != this.loginForm.value.loginPassword
      ) {
        this.commonService.showToast('Invalid Credentials!', 'danger');
      }else if (this.registerUserData.email != this.loginForm.value.loginEmail) {
        this.commonService.showToast('Invalid Email Address!', 'danger');
      }else if ( this.registerUserData.newPassword != this.loginForm.value.loginPassword ) {
        console.log('Pasword not match');
        this.commonService.showToast('Invalid Password!', 'danger');
      }
    }
  }
}
