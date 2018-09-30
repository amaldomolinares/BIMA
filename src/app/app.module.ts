import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { HttpModule } from '@angular/http';
 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { AgregarPage } from '../pages/agregar/agregar';
import { InformePage } from '../pages/informe/informe';
import { ListarPage } from '../pages/listar/listar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    AgregarPage,
    InformePage,
    ListarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    AgregarPage,
    InformePage,
    ListarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    SQLite,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
