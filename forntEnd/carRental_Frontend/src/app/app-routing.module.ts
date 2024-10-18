import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { RentedcarComponent } from './component/rentedcar/rentedcar.component';
import { UserHomepageComponent } from './component/user-homepage/user-homepage.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { RentingprocessComponent } from './component/rentingprocess/rentingprocess.component';
import { authGuard } from './services/auth.guard';
import { RentalAggrementsComponent } from './component/rental-aggrements/rental-aggrements.component';
import { EditAgreementComponent } from './component/edit-agreement/edit-agreement.component';
import { AdminComponent } from './component/admin/admin.component';
import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';
import { RegisterComponent } from './register/register.component';
import { DetailcarComponent } from './component/detailcar/detailcar.component';
import { CarsComponent } from './component/admin/cars/cars.component';
import { adminGuard } from './services/guard/admin-guard';
import { ConfirmationComponent } from './dialogs/confirmation/confirmation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  },
 
  
  {
    path: '',
component:UserHomepageComponent  },
{
path:'index',
component:HomepageComponent
},
{
path:'dashboard',
component:DashbordComponent,
canActivate:[adminGuard]
},
  {

    path: 'rentedcar',
    component: RentedcarComponent,
    canActivate:[authGuard]
  },
  {
    path:'addvehicule',
    component:AddVehiculeComponent,
    canActivate:[adminGuard]
    

  },
  {
    path: 'home',
    component: UserHomepageComponent,
  },
  {
    path: 'renting/:id',
    component: RentingprocessComponent,
    canActivate:[authGuard]
  },
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[adminGuard]
  },
  {
  path:'cars',
  component:CarsComponent,
  canActivate:[adminGuard]
  }
  ,
{
path: 'aggrement',
component: RentalAggrementsComponent,

canActivate:[authGuard]
},

{
  path: 'edit/:id',
  component: EditAgreementComponent,
  canActivate:[adminGuard]
},
{
  path:'cardetail/:id',
  component:DetailcarComponent

},
{
path:'register',
component:RegisterComponent
},
  // This must be Last
  {
    path: '**',
    component: PagenotfoundComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
