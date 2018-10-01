import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-agregardos',
  templateUrl: 'agregardos.html',
})
export class AgregardosPage {


comun:        string;
cientifico:   string;

valor:'';
nivel:'';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  	this.comun = navParams.get('comun');
  	this.cientifico = navParams.get('cientifico');
  	this.valor = navParams.get('valor');
    this.nivel = navParams.get('numero');
  }

  ionViewDidLoad() {
    console.log('cargada');
  }



}
