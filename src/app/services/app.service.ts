import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  public onLoginStatusChanged: EventEmitter<boolean> = new EventEmitter();

  // constructor(private http: HttpClient) { }
  // login(username:string,password:string){
  // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  // return this.http.get("http://localhost:8080/",{headers,responseType: 'text' as 'json'})
// }
}
