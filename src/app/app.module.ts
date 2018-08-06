import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms"
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';

import { HttpModule, Http} from '@angular/http'
import { SubscribeService } from './subscribe.service';
const routes: Routes= [
  {
    path: 'login',
    component: LoginComponent
   
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate : [AuthService]

  },

  // {
  //   path: '',
  //   component: AppComponent
  // }

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent  
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    
    HttpModule,
    

    
  ],
  providers: [AuthService, SubscribeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
