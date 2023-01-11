import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { NavController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage {
  addRestaurantForm: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder,
    private commonService: CommonService,
    public navCtrl: NavController,
    private apiService: ApiServiceService
  ) {
    this.addRestaurantForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      img: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      established: ['', [Validators.required]],
      foodType: ['', [Validators.required]],
      spicy: ['', [Validators.required]],
      pricing: ['', [Validators.required]],
      location: ['', [Validators.required]],
      distance: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  get errorControl() {
    return this.addRestaurantForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.addRestaurantForm.valid) {
      console.log('Please provide all the required values!');
      this.addRestaurantForm.markAllAsTouched();
      return;
    } else {
      this.commonService.showLoader();
      console.log(this.addRestaurantForm.value);
      this.commonService.hideLoader();
      this.commonService.showToast('Restaurant added successfully', 'success');
      this.apiService.addRes(this.addRestaurantForm.value);
      this.navCtrl.navigateForward('/home');
      // this.navCtrl.navigateForward(['/home', {data: JSON.stringify(this.addRestaurantForm.value)}]);
    }
  }

}
