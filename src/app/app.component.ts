import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'passing data from child to component';
  data = 10;
  
  update(){
    this.data =Math.floor(Math.random()*10);
  }
}
