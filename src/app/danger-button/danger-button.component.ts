import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-danger-button',
  templateUrl: '../button/button.component.html',
  styleUrls: ['./danger-button.component.css']
})
export class DangerButtonComponent extends ButtonComponent  {
  constructor(){
    super();
    this.bgColor = "#ff0000";
    this.text = "Danger";
  }
}
