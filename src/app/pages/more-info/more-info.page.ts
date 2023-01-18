import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Navigation,
  Zoom,
  SwiperOptions,
} from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Navigation,
  Zoom,
  IonicSlides,
]);

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.page.html',
  styleUrls: ['./more-info.page.scss'],
})
export class MoreInfoPage implements OnInit, AfterViewInit {
  config: SwiperOptions = {
    navigation: true,
    loop: true,
    pagination: true,
    autoplay: { delay: 1000, disableOnInteraction: false },
  };

  restaurant: any;
  segment = 'details';

  constructor(private apiService: ApiServiceService, private swiperComponent: SwiperComponent) {}

  ngOnInit() {
    this.restaurant = this.apiService.getResObj();
  }

  ngAfterViewInit() {
    this.swiperComponent.swiperRef.autoplay.running = true;
 }

 menuItems = [
  { dish: 'Tomato Soup', price: 100 },
  { dish: 'Veggie Salad', price: 50 },
  { dish: 'Rainbow Salad', price: 60 },
  { dish: 'Paneer Tikka', price: 90 },
  { dish: 'Grilled Sandwich', price: 120 },
  { dish: 'French Fries', price: 80 },
  { dish: 'Soya Malai Wrap', price: 100 },
  { dish: 'Gulam Jamun', price: 30 },
  { dish: 'Lassi', price: 50 },
];
eventList = [
  {
    day: 'Monday',
    events: [
      { event: 'Live Vocal', time: '7pm' },
      { event: 'Band Performance', time: '9pm' },
    ],
  },
  {
    day: 'Tuesday',
    events: [
      { event: 'Band Performance', time: '7pm' },
      { event: 'Live Vocal', time: '9pm' },
    ],
  },
  {
    day: 'Wednesday',
    events: [
      { event: 'Comedy House', time: '7pm' },
      { event: 'Live Vocal', time: '9pm' },
    ],
  },
  {
    day: 'Thursday',
    events: [
      { event: 'Band Performance', time: '7pm' },
      { event: 'Comedy House', time: '9pm' },
    ],
  },
  {
    day: 'Friday',
    events: [
      { event: 'Comedy House', time: '7pm' },
      { event: 'Live Vocal', time: '8pm' },
      { event: 'Band Performance', time: '9pm' },
    ],
  },
  {
    day: 'Saturday',
    events: [
      { event: 'Cultural Evening', time: '6pm' },
      { event: 'Comedy House', time: '7pm' },
      { event: 'Live Vocal', time: '8pm' },
      { event: 'Band Performance', time: '9pm' },
    ],
  },
  {
    day: 'Sunday',
    events: [
      { event: 'Cultural Evening', time: '6pm' },
      { event: 'Comedy House', time: '7pm' },
      { event: 'Live Vocal', time: '8pm' },
      { event: 'Band Performance', time: '9pm' },
    ],
  },
];
}
