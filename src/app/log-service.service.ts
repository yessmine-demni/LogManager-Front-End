import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  constructor(private http: HttpClient) { }

  findAllLogs(): Observable<any> {
    return this.http.get('http://localhost:8080/log/findAll');
  }
  findAllMachines(): Observable<any> {
    return this.http.get('http://localhost:8080/machine/findAll');

  }
  findAllUsers(): Observable<any> {
    return this.http.get('http://localhost:8080/user/findAll');
  }

}

