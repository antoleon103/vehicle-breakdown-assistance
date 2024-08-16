import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  [x: string]: any;
  private apiUrl = 'http://localhost:3000/api/v1';
  //  private apiUrl = 'https://f1e9-103-163-248-30.ngrok-free.app/api/v1';
  // private apiUrl = 'https://546e-103-163-248-30.ngrok-free.app/api/v1';
  
  constructor(private http: HttpClient) { }

  login(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/login`);
  }

  get(url:string) {
    return this.http.get<any>(`${this.apiUrl}` + url);
  }
  
  post(url:string, postData: any) {
    return this.http.post(`${this.apiUrl}` + url, postData);
  }
}
