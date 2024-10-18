import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ConfirmationComponent } from '../dialogs/confirmation/confirmation.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder,private auth:AuthService,private router:Router,private dialog:MatDialog) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],
    pswd: ['', [Validators.required, Validators.minLength(4)]],
      phone: [''],
      address: [''],
      role: ['user']
    });
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      this.auth.register(this.registrationForm.value).subscribe(
        (res) => {
          this.dialog.open(ConfirmationComponent);

          this.router.navigateByUrl('login');

        },
        (error) => {
          console.log('Error:', error);
          alert("Registration failed");

        }
      );
    } else {
      console.log('Error: Form is invalid');
    }
  }
  

}
