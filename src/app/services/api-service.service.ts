import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {

  addRestaurantData: any;
  sampleData: any;
  restaurantList: any[] = [
    {
      id: 1,
      img: 'https://loremflickr.com/500/300/coffee',
      name: 'Deux Four Cafe',
      rating: '3.6',
      established: new Date(2021, 5, 12),
      foodType: 'Street Food',
      spicy: [1, 2],
      pricing: 20,
      location: 'Sector 71, Mohali',
      distance: '3.9 km',
      description:
        'The fabric of Cutlets was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table.',
    },
    {
      id: 2,
      img: 'https://loremflickr.com/500/300/shop',
      name: 'Barbeque Nation',
      rating: '4.6',
      established: '2011',
      foodType: 'North Indian',
      spicy: [1, 2, 3],
      pricing: 100,
      location: 'Phase 5, Mohali',
      distance: '4.9 km',
      description:
        'The authentic taste comes from family recipes and from fresh, simple and tasteful ingredients straight from home.',
    },
    {
      id: 3,
      img: 'https://loremflickr.com/500/300/cafe',
      name: 'Sir Dough Bakehouse Cafe',
      rating: '3.6',
      established: '1989',
      foodType: 'Cafe, Bakery',
      spicy: [1],
      pricing: 20,
      location: 'Sector 73, Mohali',
      distance: '2.6 km',
      description:
        'The fabric of Cutlets was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table.',
    },
    {
      id: 4,
      img: 'https://loremflickr.com/500/300/pizza',
      name: "Amigo's Cafe",
      rating: '4.3',
      established: '2010',
      foodType: 'Italian, Fast Food',
      spicy: [1, 2, 3],
      pricing: 50,
      location: 'Phase 3, Mohali',
      distance: '5.7 km',
      description:
        'The authentic taste comes from family recipes and from fresh, simple and tasteful ingredients straight from home.',
    },
    {
      id: 5,
      img: 'https://loremflickr.com/500/300/bakery',
      name: 'Theobroma',
      rating: '3.1',
      established: '2018',
      foodType: 'Bakery, Desserts',
      spicy: [1],
      pricing: 10,
      location: 'Sector 34, Chandigarh',
      distance: '6.0 km',
      description:
        'The fabric of Cutlets was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table.',
    },
  ];

  constructor(private route: ActivatedRoute) {


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
    this.sampleData = resData;
    resData['img'] = 'https://loremflickr.com/500/300/bakery';
    this.restaurantList.unshift(resData);
  }

  getData() {
    return this.sampleData;
  }

  restaurantData() {
    return this.restaurantList;
  }
  
}
