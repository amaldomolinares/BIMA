import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';

//Importación de página de navegación
import { AgregarPage } from '../agregar/agregar';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  show:boolean=false;
	currentImage: any= './assets/img/avatar_arbol3.jpg';

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private file: File) {
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation :true,
      cameraDirection: 1,
      saveToPhotoAlbum: true,
      targetWidth: 150,
      targetHeight: 150
    }

    this.camera.getPicture(options).then((imageData) => {
      let filename = imageData.substring(imageData.lastIndexOf('/')+1);
    let path =  imageData.substring(0,imageData.lastIndexOf('/')+1);
         //then use the method reasDataURL  btw. var_picture is ur image variable
         this.file.readAsDataURL(path, filename).then(res=> this.currentImage = res  );

      //this.currentImage =  imageData;
      console.log(this.currentImage);
      this.show = true;
    }, (err) => {
     // Handle error
     console.log("Camera issue:" + err);
    });
  }

  Continuar(){
    this.navCtrl.push(AgregarPage,{imagen: this.currentImage });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

}
