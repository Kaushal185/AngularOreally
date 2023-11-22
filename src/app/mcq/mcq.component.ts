// mcq.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class McqComponent {
  // Define your questions and answer options here
  questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'London', 'Paris', 'Madrid'],
      answer: 'Paris'
    },
    {
      question: 'What is the capital of Japan?',
      options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
      answer: 'Tokyo'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Jupiter'
    },
    {
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra'],
      answer: 'Canberra'
    }
  ];

  userAnswers: { [key: number]: string } = {};

  submitQuiz() {
    console.log('User Answers:', this.userAnswers);
  }
}
