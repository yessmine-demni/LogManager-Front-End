import { Component, OnInit } from '@angular/core';
import { LogServiceService } from '../log-service.service';

@Component({
  selector: 'app-create-log',
  templateUrl: './create-log.component.html',
  styleUrls: ['./create-log.component.css']
})
export class CreateLogComponent implements OnInit{
  log: any;
  id: any;
  machine: any;
  machines: any[] = []
  selectedMachineId:string = "";

  constructor(private service: LogServiceService) { }
  ngOnInit(): void {
    this.service.findAll().subscribe(
      (data: any) => {
        this.machines = data;
        console.log("machines");
        console.log(this.machines);

      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  Name = ""
  Path = ""
  logs: any[] = [];


  createlog() {
    let logObj = {
      name:this.Name,
      path:this.Path,
       machine:{
        id:this.selectedMachineId,
      }

    }
    console.log(logObj)
  
    this.service.createlog(logObj).subscribe(
      (data: any) => {
        console.log("returned log object:")
        console.log(data);
        this.log = data;
      },
      (error: any) => {
        console.error(error);
      }
    );

  

  }
  


}

