import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-param-example',
  templateUrl: './param-example.component.html',
  styleUrls: ['./param-example.component.css']
})
export class ParamExampleComponent implements OnInit{
  urlParam:string = '';
  anotherParam:string = '';
  params:any[] = [];
  constructor(
    private route:ActivatedRoute,
  ){}
  ngOnInit(): void {
    this.urlParam = this.route.snapshot.paramMap.get('urlParam') || '';
    this.anotherParam = this.route.snapshot.paramMap.get('anotherParam') || '';
    this.route.queryParams.subscribe(params =>{
      this.params = Object.keys(params).map(key=>({name:key,value:params[key]}))
    });
  }
}
