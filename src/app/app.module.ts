import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityListComponent } from './city-list/city-list.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DetailComponent } from './detail/detail.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    DoctorListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: CityListComponent},
      {path: 'doctor-list', component: DoctorListComponent},
      {path: 'detail', component: DetailComponent},
      {path: '**', component: CityListComponent}
    ]),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatStepperModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ClipboardModule,
    MatRadioModule,
    MatTabsModule,
    Ng2SearchPipeModule,
    NgbModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyDbWyco53r4ljx0mUHeVl7Lkl-yWHDE5CA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
