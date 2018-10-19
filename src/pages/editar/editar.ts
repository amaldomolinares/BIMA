import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite} from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { SQLiteObject } from '@ionic-native/sqlite';

@IonicPage() 
@Component({
  selector: 'page-editar', 
  templateUrl: 'editar.html',
})
export class EditarPage { 

	arbol = {
rowid:         0,
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
    public navParams: NavParams,
    private sqlite: SQLite,
    private toast: Toast) {
      this.datosActuales(navParams.get('rowid'));
  }

   //Aparición Estado de afectación y asignando variable
  hide() {
    this.arbol.valor=this.estado;
    if (this.estado =="afectado"){
    this.hideMe = true;
  }else{
    this.hideMe = false;
    this.arbol.numero=null;
  }
  }

  //Asignando nivel de afectación a variable
  nivelAct(){
    this.arbol.numero = this.nivel;
  }

   datosActuales(rowid) {
    this.sqlite.create({
      name: 'bima.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM arbol WHERE rowid=?', [rowid])
        .then(res => {
          if(res.rows.length > 0) {
            this.arbol.rowid = res.rows.item(0).rowid;
            this.arbol.comun = res.rows.item(0).comun;
            this.arbol.cientifico = res.rows.item(0).cientifico;
            this.arbol.coordex = res.rows.item(0).coordex;
            this.arbol.coordey = res.rows.item(0).coordey;
            this.arbol.cap = res.rows.item(0).cap;
            this.arbol.altotal = res.rows.item(0).altotal;
            this.arbol.altcomer = res.rows.item(0).altcomer;
            this.arbol.diamayor = res.rows.item(0).diamayor;
            this.arbol.diamenor = res.rows.item(0).diamenor;
            this.arbol.valor = res.rows.item(0).valor;
            this.arbol.numero = res.rows.item(0).numero;
          }
        })
        .catch(e => {
          console.log(e);
          this.toast.show(e, '3000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        });
    })
     .catch(e => {
       console.log(e);
       this.toast.show(e, '3000', 'center').subscribe(
         toast => {
           console.log(toast);
         }
       );
     });
  }

  actualizarDatos() {
    this.sqlite.create({
      name: 'bima.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('UPDATE arbol SET comun=?,cientifico=?,coordex=?,coordey=?,cap=?,altotal=?,altcomer=?,diamayor=?,diamenor=?,valor=?,numero=? WHERE rowid=?',[this.arbol.comun,this.arbol.cientifico,this.arbol.coordex,this.arbol.coordey,this.arbol.cap,this.arbol.altotal,this.arbol.altcomer,this.arbol.diamayor,this.arbol.diamenor,this.arbol.valor,this.arbol.numero,this.arbol.rowid])
        .then(res => {
          console.log(JSON.stringify (res));
          this.toast.show('Datos actualizados', '3000', 'center').subscribe(
            toast => {
              this.navCtrl.popToRoot();
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
    });
  }

}
