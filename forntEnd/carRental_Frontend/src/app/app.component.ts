import { Component } from '@angular/core';
import { AdminEmailService } from './services/admin-email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carRental_Frontend';
  /**
   *
   */
IsAdmin = false;
  constructor(private auth:AdminEmailService) {
    
   
  }
  ngOnInit(){
    if(localStorage.getItem('role') == 'Admin'){
      this.IsAdmin = true
      console.log("----------------",this.IsAdmin);

    }
    else{
      this.IsAdmin=false;
      console.log("User")
    }
    
   }
 
}


