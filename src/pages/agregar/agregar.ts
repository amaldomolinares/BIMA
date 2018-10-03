import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SQLite} from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { SQLiteObject } from '@ionic-native/sqlite';
import { AgregardosPage } from '../agregardos/agregardos';

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

arbol = {
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
};
//variables nivel de afectacion
hideMe=false;
estado:null;

nivel:null;

  constructor(public navCtrl: NavController,
    private sqlite: SQLite,
    private toast: Toast) {
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
      // db.executeSql('CREATE TABLE IF NOT EXISTS arbol(rowid INTEGER PRIMARY KEY, comun TEXT, cientifico TEXT, coordex INT, coordeY INT, cap INT, altotal INT, altcomer INT, diamayor INT, diamenor INT, valor INT, numero INT)',)
      // .then(res => console.log('Executed SQL'))
      // .catch(e => console.log(e));
      db.executeSql('INSERT INTO arbol VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?)',[this.arbol.comun, this.arbol.cientifico, this.arbol.coordex, this.arbol.coordey, this.arbol.cap, this.arbol.altotal, this.arbol.altcomer, this.arbol.diamayor, this.arbol.diamenor, this.arbol.valor, this.arbol.numero])
        .then(res => {
          console.log(JSON.stringify (res));
          this.toast.show('Datos Guardados', '5000', 'center').subscribe(
            toast => {
              this.navCtrl.push(AgregardosPage,{comun:      this.arbol.comun, 
                                      cientifico: this.arbol.cientifico, 
                                      coordex:    this.arbol.coordex, 
                                      coordey:    this.arbol.coordey,
                                      cap:        this.arbol.cap,
                                      altotal:    this.arbol.altotal,
                                      alcomer:    this.arbol.altcomer,
                                      diamayor:   this.arbol.diamayor,
                                      diamenor:   this.arbol.diamenor,
                                      valor:      this.arbol.valor,
                                      numero:     this.arbol.numero,});
            }
          );
        })
        .catch(e => {
          console.log(JSON.stringify (e));
          this.toast.show(e, '5000', 'center').subscribe(
            toast => {
              console.log(JSON.stringify(toast));
            }
          );
        });
    }).catch(e => {
      console.log(JSON.stringify (e));
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(JSON.stringify(toast));
        }
      );
    });
  }

ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }
}
