import { Injectable } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HttpserviceService {
  constructor(private http: HttpClient) {}

  async getF1Data(url: string) {
    return await axios.get(url);
  }

  getResponseData(url: string): Observable<any> {
    return this.http.get(`${environment.baseurl}${url}`);
  }
}
