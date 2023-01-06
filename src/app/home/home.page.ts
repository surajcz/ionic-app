import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  restaurantList: any[] = [
    {
      name: 'Deux Four Cafe',
      img: 'https://loremflickr.com/500/300/coffee',
      rating: '3.6',
      established: '2016',
      foodType: 'Street Food',
      spicy: [1, 2],
      pricing: '$20 for two',
      location: 'Sector 71, Mohali',
      distance: '3.9 km',
      description:
        'The fabric of Cutlets was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table...',
    },
    {
      name: 'Barbeque Nation',
      img: 'https://loremflickr.com/500/300/shop',
      rating: '4.6',
      established: '2011',
      foodType: 'North Indian',
      spicy: [1, 2, 3],
      pricing: '$100 for two',
      location: 'Phase 5, Mohali',
      distance: '4.9 km',
      description:
        'The authentic taste comes from family recipes and from fresh, simple and tasteful ingredients straight from home...',
    },
    {
      name: 'Sir Dough Bakehouse Cafe',
      img: 'https://loremflickr.com/500/300/cafe',
      rating: '3.6',
      established: '1989',
      foodType: 'Cafe, Bakery',
      spicy: [1],
      pricing: '$20 for two',
      location: 'Sector 73, Mohali',
      distance: '2.6 km',
      description:
        'The fabric of Cutlets was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table...',
    },
    {
      name: "Amigo's Cafe",
      img: 'https://loremflickr.com/500/300/pizza',
      rating: '4.3',
      established: '2010',
      foodType: 'Italian, Fast Food',
      spicy: [1, 2, 3],
      pricing: '$50 for two',
      location: 'Phase 3, Mohali',
      distance: '5.7 km',
      description:
        'The authentic taste comes from family recipes and from fresh, simple and tasteful ingredients straight from home...',
    },
    {
      name: 'Theobroma',
      img: 'https://loremflickr.com/500/300/bakery',
      rating: '3.1',
      established: '2018',
      foodType: 'Bakery, Desserts',
      spicy: [1],
      pricing: '$10 for two',
      location: 'Sector 34, Chandigarh',
      distance: '6.0 km',
      description:
        'The fabric of Cutlets was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table...',
    },
  ];

  constructor(private navCtrl: NavController) {}

  addRestaurant() {
    this.navCtrl.navigateForward('/add-restaurant');
  }
}
