import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  isLoading = false;
  handlerMessage: any;
  userClicked: any;

  constructor(
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertCtrl: AlertController
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

  async presentAlert(msg: any) {
    const alert = await this.alertCtrl.create({
      header: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Yes',
          role: 'confirm',
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.userClicked = `${role}`;
    console.log(this.userClicked, typeof this.userClicked);
    return this.userClicked;
  }
}
