import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailcarComponent } from '../detailcar/detailcar.component';


@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent {
  vehicule:any;
  searchText:any;
  data:any;
  _available: boolean = true;
  _isAdmin: boolean =false;
  car:any;
  
  constructor (    private route: ActivatedRoute, 
    private service:ServicesService, private authService:AuthService,    private router: Router,
    private dialog: MatDialog) {
    this._isAdmin =this.authService.getAdminValue(); 
  
    this.service.getAllData().subscribe((_data :any) => {
      this.data = _data;
      console.log(this.data);
    });
  }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.service.getCarDetails(id).subscribe((r) => {
        this.car = r;
      });
    }
  }
 
  open(vehicleNo: any) {
    this.service.getCarDetails(vehicleNo).subscribe(vehicle => {
      this.dialog.open(DetailcarComponent, {
        data: {
          vehicleData: vehicle
        },
        panelClass: 'dialog-container'
      });
    });
  }
  }

