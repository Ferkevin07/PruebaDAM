import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onLogin(email, password){
    try{
      const user = await this.auth.login(email.value, password.value);
      if(user){
        console.log('user', user.user);
        this.router.navigate(['/home']);
      }else{
        console.log('no');
      }
      //console.log('user', user);
    }catch(e){
      console.log('Error', e);
    }
  }
}
