import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInfo } from '../../models/models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  login = false;
  rol='';
  public locations: Array<object> = [];

  constructor(private auth: AuthService, private router: Router, private firestore: FirestoreService) {
    this.auth.stateUser().subscribe( res => {
      if(res){
        console.log('Esta logeado');
        this.login=true;
        this.getDatesUser(res.uid);
      }else{
        console.log('NO esta logeado');
        this.login=false;
      }
    });
   }

  ngOnInit() {}

  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  getDatesUser(uid: string){
    const path = 'Users';
    const id = uid;
    this.firestore.getDoc<UserInfo>(path, id).subscribe(res => {
      console.log('datos', res);
      if(res){
        this.rol=res.perfil;
      }
    });
  }

  getDatesUserLocation(uid: string){
    const path = 'Locations';
    this.firestore.getDocLocation(path).subscribe(res => {
      if(res){
        res.forEach((index: object)=>{
          console.log(index);
          this.locations[0]=index;
          console.log('loc', this.locations[0]);
          this.router.navigate(['/home1']);
        });
      }
    });
  }

}
