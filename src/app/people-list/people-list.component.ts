import { Component } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  showList:boolean = true;

  people = [
    {
      name : 'John',
      age: 34,
      hairColor:'brown',
    },
    {
      name : 'michael',
      age: 14,
      hairColor:'green',
    },
    {
      name : 'bob',
      age: 54,
      hairColor:'black',
    }
  ];
}
