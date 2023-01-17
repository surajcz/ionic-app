import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'add-restaurant',
    loadChildren: () =>
      import('./pages/add-restaurant/add-restaurant.module').then(
        (m) => m.AddRestaurantPageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'more-info',
    loadChildren: () => import('./pages/more-info/more-info.module').then( m => m.MoreInfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  userData: any;
  constructor(private platform: Platform, private router: Router, private storage: Storage) {
    this.storage.get('userData').then((val) => {
      this.userData = JSON.parse(val);
    }).then(() => {
      platform.ready().then(() => {
        if (Object.keys(this.userData).length != 0) {
          router.navigateByUrl('/home');
        } else {
          router.navigateByUrl('/login');
        }
      })
    })

  }
}
