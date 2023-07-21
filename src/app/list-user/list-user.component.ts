import { Component, OnInit } from '@angular/core';
import { LogServiceService } from '../log-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private service: LogServiceService) { }

  users: any[] = [];

  ngOnInit(): void {
    this.service.findAllUsers().subscribe(
      (data: any) => {
        console.log(data);
        this.users = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}


