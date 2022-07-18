import { Injectable } from '@angular/core';
import { AngularFireAuth/* , Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut */} from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  async register(email, password){
    try{
      const user = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return user;
    }
    catch(e)
    {
      return null;
    }
  }

  async login(email, password){
    try{
      const user = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return user;
    }
    catch(e)
    {
      console.log('e',e);
    }
  }

  async logout(){
    await this.afAuth.signOut();
  }

  stateUser(){
    return this.afAuth.authState;
  }
}
