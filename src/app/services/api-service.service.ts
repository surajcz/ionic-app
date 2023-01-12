import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  addRestaurantData: any;
  oldLocal: any;
  newLocal: any;
  oldArray: any;
  // newArray: any;
  restaurantList: any;
  oldRestaurantList: any[] = [
    {
      id: 1,
      img: 'https://loremflickr.com/500/300/coffee',
      name: 'Deux Four Cafe',
      established: '1998',
      cuisine: ['Street Food', 'North Indian', 'Cafe'],
      pricing: 20,
      location: 'Sector 71, Mohali',
      description:
        'The fabric of Cutlets was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table.',
    },
    {
      id: 2,
      img: 'https://loremflickr.com/500/300/shop',
      name: 'Barbeque Nation',
      established: '2011',
      cuisine: ['North Indian', 'South Indian', 'Mexican', 'Fast Food'],
      pricing: 100,
      location: 'Phase 5, Mohali',
      description:
        'The authentic taste comes from family recipes and from fresh, simple and tasteful ingredients straight from home.',
    },
    {
      id: 3,
      img: 'https://loremflickr.com/500/300/cafe',
      name: 'Sir Dough Bakehouse Cafe',
      established: '1989',
      cuisine: ['Cafe', 'Bakery', 'Desserts', 'Fast Food'],
      pricing: 20,
      location: 'Sector 73, Mohali',
      description:
        'The fabric of Cutlets was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table.',
    },
    {
      id: 4,
      img: 'https://loremflickr.com/500/300/pizza',
      name: "Amigo's Cafe",
      established: '2010',
      cuisine: ['Italian', 'Fast Food', 'Cafe'],
      pricing: 50,
      location: 'Phase 3, Mohali',
      description:
        'The authentic taste comes from family recipes and from fresh, simple and tasteful ingredients straight from home.',
    },
    {
      id: 5,
      img: 'https://loremflickr.com/500/300/bakery',
      name: 'Theobroma',
      established: '2018',
      cuisine: ['Bakery', 'Desserts'],
      pricing: 10,
      location: 'Sector 34, Chandigarh',
      description:
        'The fabric of Cutlets was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table.',
    },
  ];

  constructor(private route: ActivatedRoute) {
    this.oldLocal = localStorage.getItem('Restaurants');
    this.restaurantList = JSON.parse(this.oldLocal);
  }

  ngOnInit() {
    // async() => {
    //   await this.route.snapshot.params['data'].then((val: any) => {
    //   this.addRestaurantData = JSON.parse(val);
    //   console.log(this.addRestaurantData);
    //   });
    // }
  }

  addRes(resData: any) {
    resData['img'] = 'https://loremflickr.com/500/300/cooking';
    // this.oldLocal = localStorage.getItem('Restaurants');
    // this.oldArray = JSON.parse(this.oldLocal);
    resData['id'] = this.restaurantList.length + 1;
    this.restaurantList.push(resData);
    localStorage.removeItem('Restaurants');
    localStorage.setItem('Restaurants', JSON.stringify(this.restaurantList));
    // this.newLocal = localStorage.getItem('Restaurants');
    // this.restaurantList = JSON.parse(this.newLocal);
  }

  restaurantData() {
    return this.restaurantList;
  }
}
