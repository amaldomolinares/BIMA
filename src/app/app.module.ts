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
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File } from '@ionic-native/file';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { AgregarPage } from '../pages/agregar/agregar';
import { AgregardosPage } from '../pages/agregardos/agregardos';
import { InformePage } from '../pages/informe/informe';
import { ListarPage } from '../pages/listar/listar';
import { EditarPage } from '../pages/editar/editar';
import { CameraPage } from '../pages/camera/camera';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    AgregarPage,
    AgregardosPage,
    InformePage,
    ListarPage,
    EditarPage,
    CameraPage
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
    EditarPage,
    CameraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    SQLite,
    WebView,
    Diagnostic,
    File,
    SQLitePorter,
    Geolocation,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
