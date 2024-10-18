import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomepageComponent } from './component/user-homepage/user-homepage.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RentedcarComponent } from './component/rentedcar/rentedcar.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { RentingprocessComponent } from './component/rentingprocess/rentingprocess.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './filter.pipe';
import { RentalAggrementsComponent } from './component/rental-aggrements/rental-aggrements.component';
import { AdminComponent } from './component/admin/admin.component';
import { EditAgreementComponent } from './component/edit-agreement/edit-agreement.component';
import { AdminNavComponent } from './component/admin/admin-nav/admin-nav.component';
import { AddVehiculeComponent } from './add-vehicule/add-vehicule.component';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { RegisterComponent } from './register/register.component';
import { DetailcarComponent } from './component/detailcar/detailcar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CarsComponent } from './component/admin/cars/cars.component';
import { adminGuard } from './services/guard/admin-guard';
import { FooterComponent } from './footer/footer.component';
import { ConfirmationComponent } from './dialogs/confirmation/confirmation.component';
import {MatButtonModule} from '@angular/material/button';
import { HomepageComponent } from './homepage/homepage.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';





@NgModule({
  declarations: [
    AppComponent,
    UserHomepageComponent,
    NavbarComponent,
    RentedcarComponent,
    LoginFormComponent,
    PagenotfoundComponent,
    RentingprocessComponent,
    FilterPipe,
    RentalAggrementsComponent,
    AdminComponent,
    EditAgreementComponent,
    AdminNavComponent,
    AddVehiculeComponent,
    DashbordComponent,
    RegisterComponent,
    DetailcarComponent,
    CarsComponent,
    FooterComponent,
    ConfirmationComponent,
    HomepageComponent,
    
  ],
  imports: [
    BrowserModule,
    
    // Ng2SearchPipeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    NgxChartsModule,
    MatButtonModule,

  ],
  providers: [
    AuthService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
