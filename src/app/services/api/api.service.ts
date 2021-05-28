import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

export class ApiService {

  constructor(private http: HttpClient) {



  }


  protected doPost(url: string, data: any, callbackOnSuccess: any, callbackOnFailure: any) {
    var restURL = environment.baseRestURI + url;
    console.log(restURL);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'accept': 'application/json' });

    return this.http.post(restURL, JSON.stringify(data), { responseType: 'json', headers }).subscribe((data: any) => {
      var response = data;

      console.log(response);
      if (response.success) {
        callbackOnSuccess(response.data);
      } else {
        callbackOnFailure(response.err, response.err_code);
      }




    });
  }

  protected doGet(url: string, callbackOnSuccess: any, callbackOnFailure: any) {

    var restURL = environment.baseRestURI + url;

    console.log(restURL);

    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Origin', '*');

    console.log(restURL);
    return this.http.get(restURL, { responseType: 'json', headers: headers }).subscribe((data: any) => {
      var response = data;

      console.log(response);
      if (response.success) {
        callbackOnSuccess(response.data);
      } else {
        callbackOnFailure(response.err, response.err_code);
      }




    });
  }
}
