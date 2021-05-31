import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class ApiService {

  constructor(private http: HttpClient) {



  }

  protected doPost(url: string, data: any, callbackOnSuccess: any, callbackOnFailure: any) {
    const restURL = environment.baseRestURI + url;
    console.log('insirizzo server chiamato > ' + restURL);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', accept: 'application/json' });

    return this.http.post(restURL, data, { responseType: 'json', headers }).subscribe((dataBack: any) => {

      const response = dataBack;

      if (response.success) {
        console.log('nel doPost api response success > ' + JSON.stringify(response.data));
        callbackOnSuccess(response.data);
      } else {
        console.log('nel doPost api response failure > ' + JSON.stringify(response.data));
        callbackOnFailure(response.err, response.err_code);
      }
    });
  }

  protected doGet(url: string, callbackOnSuccess: any, callbackOnFailure: any) {

    const restURL = environment.baseRestURI + url;

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
