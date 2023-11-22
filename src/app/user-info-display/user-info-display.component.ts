import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';
@Component({
  selector: 'app-user-info-display',
  templateUrl: './user-info-display.component.html',
  styleUrls: ['./user-info-display.component.css']
})
export class UserInfoDisplayComponent implements OnInit {
  info:any = {};
  isLoading:boolean = true;
  constructor(
    private userInfo:UserInfoService,
  ){}
  ngOnInit(): void {
    // this.userInfo.loadData();
    console
    this.userInfo.loadData().subscribe(
      userInfo =>{
        this.info = userInfo;
        this.isLoading = false;
      }
    );
    // check the output inside console
  }
}
