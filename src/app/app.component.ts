import { Component,OnInit,OnDestroy} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){

  }
  showCounterButton:boolean = true;
  title = 'my-angular-app';
 
}
