import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Toast } from '@ionic-native/toast';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/toPromise';

@IonicPage()
@Component({
  selector: 'page-informe',
  templateUrl: 'informe.html',
})
export class InformePage {


	inventario: any[] = [];

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	private sqlite: SQLite,
    private toast: Toast,
    public http: Http) {
  }

  postRequest() {
    this.sqlite.create({
      name: 'bima.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM arbol ORDER BY rowid ASC',[])
        .then(res => {
           this.inventario = [];
         for(let i=0; i<res.rows.length; i++) {
            this.inventario.fill({rowid:res.rows.item(i).rowid, 
            	comun:res.rows.item(i).comun, 
            	cientifico:res.rows.item(i).cientifico, 
            	coordex:res.rows.item(i).coordex, 
            	coordey:res.rows.item(i).coordey, 
            	cap:res.rows.item(i).cap, 
            	altotal:res.rows.item(i).altotal, 
            	altcomer:res.rows.item(i).altcomer, 
            	diamayor:res.rows.item(i).diamayor, 
            	diamenor:res.rows.item(i).diamenor, 
            	valor:res.rows.item(i).valor, 
            	numero:res.rows.item(i).numero})
            //console.log(this.inventario)

   var headers = new Headers();
            //headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            //let options = new RequestOptions({ headers: headers });
            let params = "rowid" + res.rows.item(i).rowid
             + "&comun=" + res.rows.item(i).comun
             + "&cientifico=" + res.rows.item(i).cientifico
             + "&coordex=" + res.rows.item(i).coordex
             + "&coordey=" + res.rows.item(i).coordey
             + "&cap=" + res.rows.item(i).cap
             + "&altotal=" + res.rows.item(i).altotal
             + "&altcomer=" + res.rows.item(i).altcomer
             + "&diamayor=" + res.rows.item(i).diamayor
             + "&diamenor=" + res.rows.item(i).diamenor
             + "&valor=" + res.rows.item(i).valor
             + "&numero=" + res.rows.item(i).numero;
console.log(params)
   this.http.post('http://www.orniat.com.co/BIMA/insert.php', JSON.stringify(params), { headers: headers })
              .subscribe(inventario => {
                this.inventario.push(inventario.json())
                console.log(inventario);

                this.toast.show('Datos Sincronizados!', '4000', 'center').subscribe(
                  toast => {
                   // console.log(JSON.stringify(inventario));
                  }
                )
              }, error => {
                console.log(error.message);// Error obteniendo los datos!
                this.toast.show('Error en la sincronizacion!' + error.message, '4000', 'center').subscribe(
                  toast => {
                    console.log(JSON.stringify(toast));
                  }
                )
              });
          }
          console.log('Result')
        })
        .catch(e => console.log(e));
      console.log('Create')
    })
      .catch(e => console.log(e));
  }

}
