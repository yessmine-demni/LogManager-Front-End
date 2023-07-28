import { Component } from '@angular/core';
import { LogServiceService } from '../log-service.service';

@Component({
  selector: 'app-create-machine',
  templateUrl: './create-machine.component.html',
  styleUrls: ['./create-machine.component.css']
})
export class CreateMachineComponent {
  machine: any;
  constructor(private service: LogServiceService) { }
  machines: any[] = [];
  name = ""
  host = ""
  password = ""
  createmachine() {
    let ob = {
      name: this.name,
      host: this.host,
      password: this.password
    }

    this.service.createmachine(ob).subscribe(
      (data: any) => {
        console.log(data);
        this.machine= data;
      },
      (error: any) => {
        console.error(error);
      }
    );

    this.machines.push(ob)

  }

}


