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
  createuser(data:any): Observable<any> {
    return this.http.post('http://localhost:8080/user/save',data);}

  createmachine(data:any): Observable<any> {
      return this.http.post('http://localhost:8080/machine/save',data);}
      
  createlog(data:any): Observable<any> {
        return this.http.post('http://localhost:8080/log/save',data);}

  savemachine(data1:any) :Observable<any>{
        return this.http.post('http://localhost:8080/machine/save',data1);
        }
  findAll():Observable<any>{
    return this.http.get('http://localhost:8080/machine/findAll');
  }
  deletelogs(id:number):Observable<any>{
    return this.http.delete('http://localhost:8080/log/delete/'+id);
        }
  findlogById(id:any):Observable<any>{
          return this.http.get('http://localhost:8080/log/findById/'+id);
        }
  updatelog(log:any):Observable<any>{
          return this.http.put('http://localhost:8080/log/update',log);
        }
}
  


