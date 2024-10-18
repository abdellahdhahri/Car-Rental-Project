
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.css']
})
export class AddVehiculeComponent {
  addVehicleForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private SR:ServicesService

  ) {}
  ngOnInit(): void {
    this.addVehicleForm = this.fb.group({
      vehicleModel: [''],
      matricule: [''],
      vehicleMaker: [''],
      rentalCost: [0],
      color: [''],
      availability: ['true']
    });
  }


  onSubmit(): void {
    if (this.addVehicleForm.valid) {
      console.log(this.addVehicleForm.value);
      // Appel du service pour soumettre les données
      this.SR.create(this.addVehicleForm.value).subscribe(response => {
        console.log('Vehicle added successfully', response);
        this.router.navigate(['/admin']); // Rediriger vers la liste des véhicules après l'ajout
      }, error => {
        console.error('Failed to add vehicle', error);
        // Ajouter une gestion des erreurs ici
      });
    } else {
      console.log('Form is not valid');
    }
  }
  
}
