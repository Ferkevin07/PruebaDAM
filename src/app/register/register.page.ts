import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from '../models/models';
import { AuthService } from '../services/auth.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  datos: UserInfo = {
    nombre: null,
    edad: null,
    correo: null,
    uid: null,
    password: null,
    perfil: 'Turista'
  };

  constructor(private auth: AuthService, private firestore: FirestoreService, private router: Router) { }

  ngOnInit() {
  }

  async onRegister(){
    try{
      const user = await this.auth.register(this.datos.correo, this.datos.password);
      if(user){
        console.log('Registrado con exito!!!!!');
        console.log('exito!', user.user.uid);
        const path = 'Users';
        const id = user.user.uid;
        this.datos.uid = id;
        //this.datos.password = null;
        await this.firestore.createDoc(this.datos, path, id);
        console.log('exito!');
        this.router.navigate(['/home']);
      }
    }catch(e){
      console.log('Error', e);
    };
  }

  print(){
    console.log('datos', this.datos);
  }

}
