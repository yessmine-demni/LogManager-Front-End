import { Component, OnInit } from '@angular/core';
import { LogServiceService } from '../log-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  users: any[] = []
  Name = ""
  password = ""
  lastName = ""
  user: any;
  constructor(private service: LogServiceService) { }
  createuser() {
    console.log(this.Name)
    let ob = {
      name: this.Name,
      password: this.password,
      lastName: this.lastName
    }

    this.service.createuser(ob).subscribe(
      (data: any) => {
        console.log(data);
        this.user = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
    
    this.users.push(ob)

  }

}
