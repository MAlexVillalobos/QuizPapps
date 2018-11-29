import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  Username='';
  Password='';

  Usuarios=[];
  NumU=0;

  BoolPass = false;
  BoolUser = false;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage, public navParams: NavParams) {
    this.Usuarios=this.navParams.get("diccUsers");
    this.NumU = this.Usuarios[0].password;
    console.log(this.NumU);
    for(let i=0; i < this.NumU; i++){
      console.log(this.Usuarios[i].nombre);
      console.log(this.Usuarios[i].passwod);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  clickCheck(){
    for(let i=0; i < this.NumU; i++){
      if(this.Username == this.Usuarios[i].nombre){
        this.BoolUser = true;
        if(this.Password == this.Usuarios[i].password){
          console.log('SI SIRVE');
          const alert = this.alertCtrl.create({
            title: 'Bienvenido!',
            subTitle: 'Ha ingresado con su cuenta!',
            buttons: ['OK']
          });
          alert.present();
          this.BoolPass = true;
        }
      }
    }
    if(!this.BoolUser){
      //Username mal
      console.log('username mal');
      const alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'Su username no existe!',
        buttons: ['OK']
      });
      alert.present();
    }
    else if(!this.BoolPass){
      //Password mal
      console.log('password mal');
      const alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'Su contraseña no es correcta!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}

