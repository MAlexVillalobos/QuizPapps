import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  Username='';
  Password='';
  Password2='';

  Usuarios=[];
  NumU = 0;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage, public navParams: NavParams) {
    this.Usuarios=this.navParams.get("diccUsers");
    this.NumU = this.Usuarios[0].password;
    console.log(this.NumU);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  clickAdd(){
    if(this.Username.length > 0){
      if(this.Password == this.Password2 && this.Password.length >= 8){
        //todo bien
        console.log('usuario nuevo');
        const alert = this.alertCtrl.create({
          title: 'Listo!',
          subTitle: 'Usuario ha sido creado!',
          buttons: ['OK']
        });
        alert.present();
        this.Usuarios.push({
          nombre: this.Username,
          password: this.Password,
        });
        this.NumU++;
        this.Usuarios[0].password=this.NumU;
        this.storage.set('Usuarios', JSON.stringify(this.Usuarios));
        this.navCtrl.pop();
      }
      else{
        console.log('la contraseña es invalida');
        const alert = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: 'Tu contraseña es invalida',
          buttons: ['OK']
        });
        alert.present();
      }
    }
    else{
      console.log('el usuario es invalido');
        const alert = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: 'Tu uuario es invalido',
          buttons: ['OK']
        });
        alert.present();
    }
  }
}
