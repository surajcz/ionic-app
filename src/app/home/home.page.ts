import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiServiceService } from '../services/api-service.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  restaurantList: any[] = [];
  userClicked: any;

  constructor(
    private navCtrl: NavController,
    private apiService: ApiServiceService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.restaurantList = this.apiService.restaurantData();
    console.log(this.restaurantList);
  }

  addRestaurant() {
    this.navCtrl.navigateForward('/add-restaurant');
  }

  editRes(resObj: any) {
    this.apiService.allowEdit(resObj);
    this.navCtrl.navigateForward('/add-restaurant');
  }

  deleteRes(resObj: any) {
    this.commonService
      .presentAlert('Do you wish to delete this restaurant ?')
      .then((val) => {
        if (val == 'confirm') {
          console.log(resObj);
          let index = this.restaurantList.indexOf(resObj);
          this.restaurantList.splice(index, 1);
          localStorage.removeItem('Restaurants');
          localStorage.setItem(
            'Restaurants',
            JSON.stringify(this.restaurantList)
          );
        }
      });
  }
}
