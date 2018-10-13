import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SQLite } from '@ionic-native/sqlite';
import { SQLiteObject } from '@ionic-native/sqlite';

import { EditarPage } from '../editar/editar';

@IonicPage()
@Component({
  selector: 'page-listar',
  templateUrl: 'listar.html',
})
export class ListarPage {

	inventario: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite, private alertCtrl: AlertController) {
  }

  //funcion para obtener datos
  obtenerDatos() {

    this.sqlite.create({
      name: 'bima.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS arbol(rowid INTEGER PRIMARY KEY, comun TEXT, cientifico TEXT, coordex INT, coordey INT, cap INT, altotal INT, altcomer INT, diamayor INT, diamenor INT, valor INT, numero INT)',[])
      .then(res => console.log('Executed SQL'))
      .catch(e => console.log(e));
      db.executeSql('SELECT * FROM arbol ORDER BY rowid ASC',[])
      .then(res => {
        this.inventario = [];
        for(let i=0; i<res.rows.length; i++) {
          this.inventario.push({rowid:res.rows.item(i).rowid, comun:res.rows.item(i).comun, cientifico:res.rows.item(i).cientifico, coordex:res.rows.item(i).coordex, coordey:res.rows.item(i).coordey, cap:res.rows.item(i).cap, altotal:res.rows.item(i).altotal, altcomer:res.rows.item(i).altcomer, diamayor:res.rows.item(i).diamayor, diamenor:res.rows.item(i).diamenor, valor:res.rows.item(i).valor, numero:res.rows.item(i).numero})
        }
      }).catch(e => console.log(e));
  	})  .catch(e => console.log(e)); 
	    
	}

  editarDatos(rowid):void {
    this.navCtrl.push(EditarPage, {
      rowid:rowid
    });
  }

	//barra de busqueda
	getItems(ev:any) {
      
      // objetivo a buscar
      var val = ev.target.value;

      // trim no filtra valores vacions
      if (val && val.trim() != '') {
        this.inventario = this.inventario.filter((arbol) => {
          return (arbol.comun.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }else{ this.obtenerDatos(); }      
    }

    //función para acceder a la edición del elemento en una nueva página
    editData(rowid):void {
    this.navCtrl.push(EditarPage, {
      rowid:rowid
    });
  }

  //funcion para borrar registros
  borrarDatos(rowid) {
    let alert = this.alertCtrl.create({
    title: 'Borrar Datos',
    message: 'Esta apunto de borrar un registo ¿Desea continuar?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Aceptar',
        handler: () => {
          this.sqlite.create({
       name: 'bima.db',
       location: 'default'
     }).then((db: SQLiteObject) => {
       db.executeSql('DELETE FROM arbol WHERE rowid=?', [rowid])
       .then(res => {
         console.log(res);
         this.obtenerDatos();
       })
       .catch(e => console.log(e));
     }).catch(e => console.log(e));
        }
      }
    ]
  });
  alert.present();
}
     
   

//cargar la base de datos al cargar toda la pagina
  ionViewDidLoad() {
    this.obtenerDatos();
  }

  // ionViewWillEnter() {
  //   this.obtenerDatos();
  // }

}
