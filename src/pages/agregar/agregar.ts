import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { SQLite} from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { SQLiteObject } from '@ionic-native/sqlite';
//import { AgregardosPage } from '../agregardos/agregardos';
import { Geolocation } from '@ionic-native/geolocation';
import { MenuPage } from '../menu/menu';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Injectable } from '@angular/core';

@Injectable()
@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})

export class AgregarPage {

arbol: any = {
comun:        "",
cientifico:   "",
coordex:      "",
coordey:      "",
cap:          "",
altotal:      "",
altcomer:     "",
diamayor:     "",
diamenor:     "",
valor:        "",
numero:       "",
foto:         "",
};
//variables nivel de afectacion
hideMe=false;
estado:null;
imagen: any;
nivel:null;
lng : number =0  ;
lat : number =0 ;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private sqlite: SQLite,
    private toast: Toast,
    public geolocation: Geolocation,
    private diagnostic: Diagnostic) {
      this.arbol.foto = navParams.get('imagen');
  }

  public stateGPS() {
    this.diagnostic.isGpsLocationAvailable().then(available => {
      if( ! available ) {
        this.diagnostic.switchToLocationSettings();
      }
    },
    error => {
      alert(JSON.stringify(error));
    })
  }

 //Aparición Estado de afectación y asignando variable
  hide() {
    this.arbol.valor=this.estado;
    if (this.estado =="afectado"){
    this.hideMe = true;
  }else{
    this.hideMe = false;
  }
  }

 
  //captura de coordenadas
  coordenadas(){

      var options = {
        timeout: 50000,
        maximumAge: 0,
        enableHighAccuracy: true
      };
    this.geolocation.getCurrentPosition(options).then((resp) => {
      console.log(resp);
     this.arbol.coordex = resp.coords.latitude;
     this.arbol.coordey = resp.coords.longitude;
     console.log(this.lat + ' - ' + this.lng)
    }).catch((error) => {
      console.log('Error en las coordenadas', JSON.stringify(error));
    });
     }

  //Asignando nivel de afectación a variable
  nivelAct(){
    this.arbol.numero = this.nivel;
  }

 // funcion guardar
   guardarDatos() {
   
    this.sqlite.create({
      name: 'bima.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO arbol VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?)',[this.arbol.comun, this.arbol.cientifico, this.arbol.coordex, this.arbol.coordey, this.arbol.cap, this.arbol.altotal, this.arbol.altcomer, this.arbol.diamayor, this.arbol.diamenor, this.arbol.valor, this.arbol.numero, this.arbol.foto])
        .then(res => {
          console.log(JSON.stringify (res));
          this.toast.show('Datos Guardados', '500', 'center').subscribe(
            toast => {
                this.navCtrl.push(MenuPage);
            }
          );
        })
        .catch(e => {
          console.log(JSON.stringify (e));
          this.toast.show(e, '3000', 'center').subscribe(
            toast => {
              console.log(JSON.stringify(toast));
            }
            );
          });
      }).catch(e => {
        console.log(JSON.stringify (e));
        this.toast.show(e, '1000', 'center').subscribe(
          toast => {
            console.log(JSON.stringify(toast));
          }
        );
      });
    }
    
    ionViewDidLoad() {
     this.stateGPS();
     this.coordenadas();
  }
}