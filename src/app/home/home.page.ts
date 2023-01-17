import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiServiceService } from '../services/api-service.service';
import { CommonService } from '../services/common.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  restaurantList: any[] = [];
  userClicked: any;
  displayList: any;

  constructor(
    private navCtrl: NavController,
    private apiService: ApiServiceService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.restaurantList = this.apiService.restaurantData();
    this.restaurantList.forEach((element: any, key: any) => {
      element['created_year'] = moment(element.established).year();
    });
    console.log(this.restaurantList);
  }

  addRestaurant() {
    this.navCtrl.navigateForward('/add-restaurant');
  }

  editRes(resObj: any) {
    let index = this.restaurantList.indexOf(resObj);
    let img = resObj.img;
    let id = resObj.id;
    this.apiService.allowEdit(resObj, index, img, id);
    this.navCtrl.navigateForward('/add-restaurant');
  }

  deleteRes(resObj: any) {
    this.commonService.presentAlert('Delete this restaurant ?').then((val) => {
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

  toHome() {
    this.navCtrl.navigateForward('/home');
  }

  toProfile() {
    this.navCtrl.navigateForward('/profile');
  }

  knowMore(resObj: any) {
    this.apiService.sendResObj(resObj);
    this.navCtrl.navigateForward('/more-info');
  }
}
