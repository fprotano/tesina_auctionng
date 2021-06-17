import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelpCenterService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }


}
