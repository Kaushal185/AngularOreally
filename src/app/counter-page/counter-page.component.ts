import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {
  count: number = 0;
  threshold:number =5;
  showCounterButton:boolean = true;
  constructor(
    private router:Router,
  ){}
  incrementCount(): void{
    this.count += 1;
    if(this.count > this.threshold){
      this.router.navigateByUrl('param-example')
    }
  }
  toggle():void{
    this.showCounterButton = !this.showCounterButton;
  }
}
