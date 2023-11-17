import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-success-button',
  templateUrl: '../button/button.component.html',
  styleUrls: ['./success-button.component.css']
})
export class SuccessButtonComponent extends ButtonComponent {
  constructor(){
    super();
    this.bgColor = "#f700ff";
    this.text = "Success";
  }
}
