import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Base } from './class/Base';
import { Transport } from './class/Transport';
import { Airbase } from './class/Airbase';
import { Airport } from './class/Airport';
import { Hangar } from './class/Hangar';
import { Carrier } from './class/Carrier';
import { Plane } from './class/Plane';
import { Helicopter } from './class/Helicopter';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class HomePage {
  base : Base[]=[];
  transport : Transport[]=[];
  constructor() {}
  getRandomInt(max: number){
    return Math.floor(Math.random()*Math.floor(max)+1);
  }
  Bases(){
    this.base = new Array();
    let n = 2;
    for(let i = 0; i < n; i++){
      this.base.push(new Airbase(this.getRandomInt(10),this.getRandomInt(100)));
      this.base.push(new Airport(this.getRandomInt(10),this.getRandomInt(100)));
      this.base.push(new Hangar(this.getRandomInt(10)));
      this.base.push(new Carrier(this.getRandomInt(10),this.getRandomInt(100)));
    }
    this.base.forEach((element) => {
     console.log(element.info());
    })
  }
  Transports(){
    this.transport = new Array();
    let n = 2;
    for(let i = 0; i < n; i++){
      this.transport.push(new Plane("Мрія",this.getRandomInt(500)));
      this.transport.push(new Helicopter("Чинук",this.getRandomInt(200)));
      
    }
    this.transport.forEach((element) => {
     console.log(element.info())
    })
  }
}
