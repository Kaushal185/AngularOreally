import { Component,EventEmitter,Input,Output,OnInit,OnDestroy} from '@angular/core';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit,OnDestroy {
  @Input() count:number = 0;
  @Output() buttonClicked = new EventEmitter<void>();
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
  onClick(): void{
    this.buttonClicked.emit();
  }
 
}
