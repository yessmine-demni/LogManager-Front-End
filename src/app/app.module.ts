import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListLogComponent } from './list-log/list-log.component';
import { ListMachineComponent } from './list-machine/list-machine.component';
import { ListUserComponent } from './list-user/list-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CreateLogComponent } from './create-log/create-log.component';
import { CreateMachineComponent } from './create-machine/create-machine.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdatelogComponent } from './updatelog/updatelog.component';
import { UpdatemachineComponent } from './updatemachine/updatemachine.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

@NgModule({
  declarations: [
    AppComponent,
    ListLogComponent,
    
    ListMachineComponent,
    ListUserComponent,
    NavbarComponent,
    CreateLogComponent,
    CreateMachineComponent,
    CreateUserComponent,
    UpdatelogComponent,
    UpdatemachineComponent,
    UpdateuserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
