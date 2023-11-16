import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {
  count: number = 0;
  threshold:number =5;
  showCounterButton:boolean = true;
  incrementCount(): void{
    this.count += 1;
  }
  toggle():void{
    this.showCounterButton = !this.showCounterButton;
  }
}
