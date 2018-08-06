import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
//import { HttpClient } from '../../../node_modules/@types/selenium-webdriver/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { SubscribeService } from '../subscribe.service';
import { Http } from '../../../node_modules/@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private http: Http, private data: SubscribeService) { }
  getData(){
    var data1= this.data.getData().subscribe(Response =>(console.log(Response)));
    console.log(data1);

  }

  ngOnInit() {
  }

}
