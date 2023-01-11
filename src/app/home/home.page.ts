import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiServiceService } from '../services/api-service.service';
import { Observ }

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  restaurantList: any[] = [];

  constructor(
    private navCtrl: NavController,
    private apiService: ApiServiceService
  ) {}

  ngOnInit() {
    this.restaurantList = this.apiService.restaurantData();
    console.log(this.restaurantList);
    // console.log(this.moment(new Date()))
    // this.apiService.addRes();
    console.log(this.apiService.getData());

    var scrollEventSubscription = Observable.fromEvent(element, 'scroll');
    scrollEventSubscription.subscribe(event => console.log(event));
  }

  addRestaurant() {
    this.navCtrl.navigateForward('/add-restaurant');
  }

}
