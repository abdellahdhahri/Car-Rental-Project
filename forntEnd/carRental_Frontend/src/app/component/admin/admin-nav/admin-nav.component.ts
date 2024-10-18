import { Component } from '@angular/core';
;
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddVehiculeComponent } from 'src/app/add-vehicule/add-vehicule.component';


@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  _isAdmin: boolean =false;
  user:any;
  connected:boolean = true;
  username:any
  constructor (private service:ServicesService,private authService: AuthService,private route:Router,private dialog:MatDialog){
   
    if(localStorage.getItem('role') == 'Admin'){
      this._isAdmin = true
    }; 
    console.log(this._isAdmin);
    
  }

  ngOnInit():void{
  
    const token = sessionStorage.getItem('key');
    
    if (token ) {
      let name = sessionStorage.getItem('Name');
      this.username = token.split('@')[0];
          this.connected=true;
    } 
    
 
  };
logOut(){
  sessionStorage.removeItem('key');
  this.route.navigate([`login`]);
};
open(){
  const dialogref=this.dialog.open(AddVehiculeComponent);

}
}
