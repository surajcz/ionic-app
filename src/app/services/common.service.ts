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
    return await this.loadingController.create().then((a) => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async hideLoader() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }

  showToast(msg: string, status: string) {
    console.log(status);
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
