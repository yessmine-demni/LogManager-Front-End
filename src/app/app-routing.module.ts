import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLogComponent } from './list-log/list-log.component';
import { ListMachineComponent } from './list-machine/list-machine.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [ 
  {path:"ListLog" , component:ListLogComponent},
  {path:"ListMachine" , component:ListMachineComponent },
  {path:"ListUser", component:ListUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
