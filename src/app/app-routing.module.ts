import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLogComponent } from './list-log/list-log.component';
import { ListMachineComponent } from './list-machine/list-machine.component';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateLogComponent } from './create-log/create-log.component';
import { CreateMachineComponent } from './create-machine/create-machine.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdatelogComponent } from './updatelog/updatelog.component';

const routes: Routes = [ 
  {path:"ListLog" , component:ListLogComponent},
  {path:"ListMachine" , component:ListMachineComponent },
  {path:"ListUser", component:ListUserComponent},
  {path:"createmachine", component:CreateMachineComponent},
  {path:"createlog", component:CreateLogComponent},
  {path:"createuser", component:CreateUserComponent},
  {path:"updatelog/:id", component:UpdatelogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
