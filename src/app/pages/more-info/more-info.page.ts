import { Component, OnInit, AfterContentChecked, ViewChild } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.page.html',
  styleUrls: ['./more-info.page.scss']
})
export class MoreInfoPage implements OnInit {
  restaurant: any;
  // resName = false;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.restaurant = this.apiService.getResObj()
    // if (Object.keys(this.restaurant).length != 0) {this.resName = true;}
  }


}
