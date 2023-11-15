import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-congra-msg',
  templateUrl: './congra-msg.component.html',
  styleUrls: ['./congra-msg.component.css']
})
export class CongraMsgComponent {
  @Input() count: number = 0;
  @Input() threshold: number = 10;
}
