import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  _isAdmin: boolean =false;
  connected:boolean = false;
  username:any;
  constructor (private authService: AuthService,private route:Router){
    if(localStorage.getItem('role') == 'Admin'){
      this._isAdmin = true;
    }; 
    console.log(this._isAdmin)
  }

  ngOnInit():void{
    const token = sessionStorage.getItem('key');
    
  if (token ) {
    let name = sessionStorage.getItem('Name');
    this.username = token.split('@')[0];
    console.log("777777777777777", this.username);
        this.connected=true;
  } 
}

  
logOut(){
  sessionStorage.removeItem('key');
  this.route.navigate([`login`]);
};
}
