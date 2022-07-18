import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss'],
})
export class Home1Component implements OnInit {

  public locations: Array<object> = [];
  search=false;

  constructor(private firestore: FirestoreService) { }

  ngOnInit() {}

  /* getDatesUser(uid: string){
    const path = 'Locations';
    this.firestore.getDocLocation(path).subscribe(res => {
      if(res){
        /* console.log('datos', res[0]);
        this.location=res;
        console.log('location', location);
        location[0]=res[0];
        console.log(this.location[0]); */
        /*res.forEach((index: object)=>{
          console.log(index);
          this.locations[0]=index;
          console.log('loc', this.locations[0]);
        });
      }
    });
  } */

}
