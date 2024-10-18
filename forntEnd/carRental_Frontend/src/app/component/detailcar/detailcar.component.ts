import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-detailcar',
  templateUrl: './detailcar.component.html',
  styleUrls: ['./detailcar.component.css']
})
export class DetailcarComponent {
  car:any;
  constructor(private route: ActivatedRoute, private service: ServicesService, private router: Router,@Inject(MAT_DIALOG_DATA) public data: any) {
 

console.log("+++++++++++++++++",this.data.vehicleData)
  }
  
 
  }
 /* ngOnInit():void{
    const id = this.route.snapshot.params['id'];
    if(id){
      this.service.getCarDetails(id).subscribe((r)=>{this.car=r;
        console.log("this is the car ",this.car)

      });
    }
  }*/

