import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userDetails: any;

  constructor(private navCtrl: NavController, private apiService: ApiServiceService) {}

  ngOnInit() {
    this.userDetails = this.apiService.getUserData();
  }

  toHome() {
    this.navCtrl.navigateForward('/home');
  }
}
