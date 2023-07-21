import { Component, OnInit } from '@angular/core';
import { LogServiceService } from '../log-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-machine',
  templateUrl: './list-machine.component.html',
  styleUrls: ['./list-machine.component.css']
})
export class ListMachineComponent implements OnInit {
  constructor(private service: LogServiceService) { }

  machines: any[] = [];

  ngOnInit(): void {
    this.service.findAllMachines().subscribe(
      (data: any) => {
        console.log(data);
        this.machines = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
