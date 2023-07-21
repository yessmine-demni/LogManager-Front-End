import { Component, OnInit } from '@angular/core';
import { LogServiceService } from '../log-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-log',
  templateUrl: './list-log.component.html',
  styleUrls: ['./list-log.component.css']
})
export class ListLogComponent implements OnInit {
  constructor(private service: LogServiceService) { }

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
}

