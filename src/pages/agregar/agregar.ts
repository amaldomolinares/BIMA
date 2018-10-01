import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite} from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { SQLiteObject } from '@ionic-native/sqlite';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AgregardosPage } from '../agregardos/agregardos';

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

comun:        string;
cientifico:   string;
coordex:      number;
coordey:      number;
cap:          number;
altotal:      number;
altcomer:     number;
diamayor:     number;
diamenor:     number;

//variables nivel de afectacion
hideMe=false;
estado:null;
valor:null;
nivel:null;
numero:null;

  constructor(public navCtrl: NavController,
    private sqlite: SQLite,
    private toast: Toast,
    public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

 //Aparición Estado de afectación
  hide() {
    this.valor=this.estado;
    if (this.estado =="afectado"){
  this.hideMe = true;
  }else{
    this.hideMe = false;
  }
  }

  nivelAct(){
    this.numero = this.nivel;
  }

  continuar(){
    this.navCtrl.push(AgregardosPage,{comun:      this.comun, 
                                      cientifico: this.cientifico, 
                                      coordex:    this.coordex, 
                                      coordey:    this.coordey,
                                      cap:        this.cap,
                                      altotal:    this.altotal,
                                      alcomer:    this.altcomer,
                                      diamayor:   this.diamayor,
                                      diamenor:   this.diamenor,
                                      valor:      this.valor,
                                      numero:     this.numero,});

  }

}
