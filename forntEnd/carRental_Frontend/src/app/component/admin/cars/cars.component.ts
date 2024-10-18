import { Component } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddVehiculeComponent } from 'src/app/add-vehicule/add-vehicule.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars:any;
  constructor(private ss:ServicesService,private dialog:MatDialog){}
ngOnInit():void{
   this.ss.getAllData().subscribe((res)=>{
    this.cars=res;
    console.log("1111111",this.cars)
   })
}
open(){
  this.dialog.open(AddVehiculeComponent)

}
}
