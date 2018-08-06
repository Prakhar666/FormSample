import { Injectable } from '@angular/core';
import { CanActivate, Router } from '../../node_modules/@angular/router';


// import { map } from 'rxjs/operators';
// import { Observable } from '../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  //config="http://jsonplaceholder.typicode.com/photos";

  constructor(private route: Router) { }

 

 

  canActivate(){
    
    if(localStorage.getItem('username')=== "prakhar" && !!localStorage.getItem('password'))
    { 
      
     // this.route.navigate(['/home']);
      
      return true;
    }
    else{
     // this.route.navigate(['/login']);
      return false;
    }

  }
}
