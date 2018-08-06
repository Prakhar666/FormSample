import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  //template: `<p>The hero's birthday is {{ birthday | date }}</p>`
})
export class LoginComponent implements OnInit {
  // bday = new Date(1995, 7, 13)
  username: string;
  password: string;

  constructor(private routes:Router) { }

  onSubmit(){
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
 this.routes.navigate(['/home'])
  }

  ngOnInit() {
  }

}
