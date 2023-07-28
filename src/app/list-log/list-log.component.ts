import { Component, OnInit } from '@angular/core';
import { LogServiceService } from '../log-service.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-list-log',
  templateUrl: './list-log.component.html',
  styleUrls: ['./list-log.component.css']
})
export class ListLogComponent implements  OnInit{
  constructor( private router :Router ,private service: LogServiceService) { }

  logs: any[] = [];
 ngOnInit(): void {
    this.service.findAllLogs().subscribe(
      (data: any) => {
        console.log(data);
        this.logs = data;
      },
      (error: any) => {
        console.error(error);  
      }
    );
 
}
i=0;
data:any
deletelog(id:number){
this.service.deletelogs(id).subscribe(
  (data: any) => {
    console.log(id);
    for(this.i==0;this.i<this.logs.length;this.i++){
      if(this.logs[this.i].id==id){
        this.logs.splice(this.i, 1)
      }
    }
  },
  (error: any) => {
    console.error(error);  
  }
);}

update(id:number){
  console.log(id);
  
  this.router.navigate(['/updatelog/',id]);

}}
