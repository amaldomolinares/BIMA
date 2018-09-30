import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    username: string;
    password: string;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController ) {

  }

  login(){
    if (this.username == "admin" && this.password == "123"){
      this.navCtrl.setRoot(MenuPage);
  }else{
    const alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Usuario o Contaseña incorrectos!',
      buttons: ['OK']
    });
    alert.present();

  }

}
}
