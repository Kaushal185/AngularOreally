import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// In the service  instead of @Component here is decorator @Injectable
// we can inject decorator in any component and it is used to communicate with servers mostly.
@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(
    private http: HttpClient,
  ) { }
  // loadData(): void{
  //   this.http.get('https://randomuser.me/api/').subscribe(data=>console.log(data));
  //   // this.http.get('https://randomuser.me/api/').subscribe(data=>console.log(data.results[0]));

  // }

    loadData():Observable<any>{
      return this.http.get<any>('http://randomuser.me/api')
    }

}
