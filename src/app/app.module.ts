import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { SQLite } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { Toast } from '@ionic-native/toast';
import { HttpModule } from '@angular/http';
 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { AgregarPage } from '../pages/agregar/agregar';
import { AgregardosPage } from '../pages/agregardos/agregardos';
import { InformePage } from '../pages/informe/informe';
import { ListarPage } from '../pages/listar/listar';
import { EditarPage } from '../pages/editar/editar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    AgregarPage,
    AgregardosPage,
    InformePage,
    ListarPage,
    EditarPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    AgregarPage,
    AgregardosPage,
    InformePage,
    ListarPage,
    EditarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    SQLite,
    SQLitePorter,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
