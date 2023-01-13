import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { NavController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage {
  addRestaurantForm: FormGroup;
  isSubmitted = false;
  maxDate: any = new Date().toISOString();
  editMode: any = {};
  fname = 'Suraj';
  editStatus: any;
  oldResData: any;

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
    if (this.editStatus) {this.editForm()};
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
      setTimeout(() => {
        this.commonService.hideLoader();
      }, 500);
      this.commonService.showToast('Restaurant added successfully', 'success');
      this.apiService.addRes(this.addRestaurantForm.value);
      this.navCtrl.navigateForward(['/home']);
    }
  }

  editForm() {
    this.apiService.getResDetails().then((val: any) => {
      this.addRestaurantForm.controls['name'].setValue(val.name);
      this.addRestaurantForm.controls['established'].setValue(val.established);
      this.addRestaurantForm.controls['cuisine'].setValue(val.cuisine);
      this.addRestaurantForm.controls['pricing'].setValue(val.pricing);
      this.addRestaurantForm.controls['location'].setValue(val.location);
      this.addRestaurantForm.controls['description'].setValue(val.description);
    })

  }
}

// this.navCtrl.navigateForward(['/home', {data: JSON.stringify(this.addRestaurantForm.value)}]);
// this.eventsService.publish('restaurant', JSON.stringify(this.addRestaurantForm.value));
