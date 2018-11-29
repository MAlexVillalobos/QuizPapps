import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  login = LoginPage;
  register = RegisterPage;

  Usuarios=[
    {
      nombre: "NumeroDeUsuarios",
      password: "2"
    },
    {
      nombre: "Alex",
      password: "1505",
    },
    {
      nombre: "Mike",
      password: "ElMagnifico",
    },
  ];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage) {
    this.storage.keys()
    .then(keys => {
      if (keys.some(key => key == 'Usuarios'))
      {
        this.storage.get('Usuarios')
        .then(Usuarios => {
          this.Usuarios = JSON.parse(Usuarios);
        });
      }
    })
  }

  clickLogin(){
    this.navCtrl.push(this.login,{diccUsers:this.Usuarios});
  }

  clickRegister(){
    this.navCtrl.push(this.register,{diccUsers:this.Usuarios});
  }
}

