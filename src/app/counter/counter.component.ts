import { Component,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() count:number = 0;
  @Output() buttonClicked = new EventEmitter<void>();

  onClick(): void{
    this.buttonClicked.emit();
  }
 
}
