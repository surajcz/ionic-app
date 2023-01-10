import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiServiceService } from '../services/api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  restaurantList: any[] = [];

  constructor(private navCtrl: NavController, private apiService: ApiServiceService) {

  }

  ngOnInit() {
    this.restaurantList = this.apiService.restaurantData();
    console.log(this.restaurantList);
    // console.log(this.moment(new Date()))
  }

  addRestaurant() {
    this.navCtrl.navigateForward('/add-restaurant');
  }



}
