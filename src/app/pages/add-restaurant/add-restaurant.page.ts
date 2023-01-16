import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { NavController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { EventsService } from 'src/app/services/events.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage {
  addRestaurantForm: FormGroup;
  isSubmitted = false;
  maxDate: any = new Date().toISOString();
  editStatus = false;
  oldResData: any;
  editIndex: any;
  restaurantList: any;

  constructor(
    public formBuilder: FormBuilder,
    private commonService: CommonService,
    public navCtrl: NavController,
    private apiService: ApiServiceService,
    private eventsService: EventsService
  ) {
    this.addRestaurantForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      established: ['', [Validators.required]],
      cuisine: ['', [Validators.required]],
      pricing: ['', [Validators.required]],
      location: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
    this.editStatus = this.apiService.editStatus();
    if (this.editStatus) {
      this.editForm();
    }
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
      // this.addRestaurantForm.value['established'] = '1994-12-15T13:47:20+05:00';
      // moment.parseZone(
      //   this.addRestaurantForm.value['established']
      // ).format('YYYY');
      this.commonService.showLoader();
      console.log(this.addRestaurantForm.value);
      setTimeout(() => {
        this.commonService.hideLoader();
      }, 500);
      if (this.editStatus) {
        this.addRestaurantForm.value['img'] = this.apiService.editResImg();
        this.addRestaurantForm.value['id'] = this.apiService.editResId();
        this.editIndex = this.apiService.editResIndex();
        this.restaurantList = this.apiService.restaurantData();
        console.log(this.restaurantList);
        this.restaurantList.splice(
          this.editIndex,
          1,
          this.addRestaurantForm.value
        );
        console.log(this.restaurantList);
        localStorage.removeItem('Restaurants');
        localStorage.setItem(
          'Restaurants',
          JSON.stringify(this.restaurantList)
        );
        this.commonService.showToast('Restaurant info updated', 'success');
      } else {
        this.commonService.showToast(
          'Restaurant added successfully',
          'success'
        );
        this.apiService.addRes(this.addRestaurantForm.value);
      }
      this.navCtrl.navigateForward(['/home']);
    }
  }

  editForm() {
    this.oldResData = this.apiService.getResDetails();
    this.addRestaurantForm.controls['name'].setValue(this.oldResData.name);
    this.addRestaurantForm.controls['established'].setValue(
      this.oldResData.established
    );
    this.addRestaurantForm.controls['cuisine'].setValue(
      this.oldResData.cuisine
    );
    this.addRestaurantForm.controls['pricing'].setValue(
      this.oldResData.pricing
    );
    this.addRestaurantForm.controls['location'].setValue(
      this.oldResData.location
    );
    this.addRestaurantForm.controls['description'].setValue(
      this.oldResData.description
    );
    this.apiService.editDone();
  }
}

// this.navCtrl.navigateForward(['/home', {data: JSON.stringify(this.addRestaurantForm.value)}]);
// this.eventsService.publish('restaurant', JSON.stringify(this.addRestaurantForm.value));
