import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailcarComponent } from '../detailcar/detailcar.component';
import { EditAgreementComponent } from '../edit-agreement/edit-agreement.component';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ConfirmationComponent } from 'src/app/dialogs/confirmation/confirmation.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  data: any;
  _isAdmin: boolean = false;
  user: any;
  constructor(private service: ServicesService, private authService: AuthService, private route: Router,private dialog:MatDialog) {
   

  }

  ngOnInit(): void {
    this.service.getAllAggrement().subscribe((_data: any) => {
      this.data = _data;
    });
    if (localStorage.getItem('role') == 'Admin') {
      this._isAdmin = true
    };
    console.log(this._isAdmin);
  };
  logOut() {
    sessionStorage.removeItem('key');
    this.route.navigate([`login`]);
  };



  deleteAgreement(id: number) {
    this.service.deleteAgreement(id).subscribe({
      next: (response) => {
        this.dialog.open(ConfirmationComponent);


        this.route.navigate(['admin']);
      }
    });
  }
  acceptReturn(id: number) {
    this.service.acceptReturn(id).subscribe({
      next: (response) => {
        this.dialog.open(ConfirmationComponent);

        this.route.navigate(['admin']);
      }
    });
  }
  open(vehicleNo: any) {
    this.service.getCarDetails(vehicleNo).subscribe(vehicle => {
      this.dialog.open(EditAgreementComponent, {
        data: {
          vehicleData: vehicle
        },
        panelClass: 'dialog-container'
      });
    });
  }
}

