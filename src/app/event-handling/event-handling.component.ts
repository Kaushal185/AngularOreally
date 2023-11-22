// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
    <h1>Event Handling Example</h1>
    <p>Counter: {{ counter }}</p>
    <button (click)="incrementCounter()">Increment</button>
  `,
})
export class AppComponent {
  counter: number = 0;

  incrementCounter() {
    this.counter++;
  }
}

