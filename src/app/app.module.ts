import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';

import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NavigationComponent } from './navigation/navigation.component';
import {MatMenuModule} from '@angular/material/menu';
import { ProfileComponent } from './profile/profile.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { PerfomanceDetailsComponent } from './perfomance-details/perfomance-details.component';
import { DonationsComponent } from './donations/donations.component';
import {MatTableModule} from '@angular/material/table';
import { EPurchasesComponent } from './e-purchases/e-purchases.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    NavigationComponent,
    ProfileComponent,
    PerfomanceDetailsComponent,
    DonationsComponent,
    EPurchasesComponent
    
  ],
  entryComponents:[AddFormComponent],
  imports: [
 
  BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
