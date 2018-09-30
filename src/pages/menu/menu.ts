import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AgregarPage } from '../agregar/agregar';
import { InformePage } from '../informe/informe';
import { ListarPage } from '../listar/listar';
import { HomePage } from '../home/home';


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
	this.navCtrl.push(AgregarPage);}

	iralistar():void{
	this.navCtrl.push(ListarPage);}

	irainforme():void{
	this.navCtrl.push(InformePage);}

}
