import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InformePage } from '../informe/informe';
import { ListarPage } from '../listar/listar';
import { HomePage } from '../home/home';
import { CameraPage } from '../camera/camera';


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  	logout():void{
	this.navCtrl.setRoot(HomePage);}

    iragregar():void{
	this.navCtrl.push(CameraPage);}

	iralistar():void{
	this.navCtrl.push(ListarPage);}

	irainforme():void{
	this.navCtrl.push(InformePage);}

}
