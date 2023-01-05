import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  isLoading = false;

  constructor(
    public loadingController: LoadingController,
    public toastController: ToastController
  ) {}
  async showLoader() {
    this.isLoading = true;
    return await this.loadingController.create({
      // duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async hideLoader() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
  // async showLoader() {
  //   await this.loadingController
  //     .create().then((response) => {
  //       response.present();
  //     });
  // }
  // async hideLoader(){
  //   await  this.loadingController.dismiss().then((res) => {
  //     console.log('Loading dismissed!', res);
  //   }).catch((error) => {
  //     console.log('error', error);
      
  //   });

  // }

  showToast(msg: string, status:string) {
    console.log(status)
    this.toastController
      .create({
        message: msg,
        duration: 2500,
        position: 'bottom',
        color: status,
      })
      .then((response) => {
        response.present();
      });
  }
}
