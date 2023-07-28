import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogServiceService } from '../log-service.service';

@Component({
  selector: 'app-updatelog',
  templateUrl: './updatelog.component.html',
  styleUrls: ['./updatelog.component.css']
})
export class UpdatelogComponent implements OnInit {
  name: any;
  Path: any;
  id:any
  constructor(private route :ActivatedRoute , private service : LogServiceService){}
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.findlogById(id).subscribe(
      (data: any) => {
        console.log(data)
        this.name = data.name;
        this.Path = data.Path;
        this.id = data.id;
        (error: any) => {
          console.error(error);
        }
      }
    );
  }
  updateme() {
    let ob = {
      name: this.name,
      path: this.Path,
      id: this.id
    }
    this.service.updatelog(ob).subscribe(
      (data: any) => {
        console.log(data)
        
      },
      (error: any) => {
        console.error(error);
      }
    )
  }

}
