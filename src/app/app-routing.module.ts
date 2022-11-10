import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PerfomanceDetailsComponent } from './perfomance-details/perfomance-details.component';
import { DonationsComponent } from './donations/donations.component';
import { EPurchasesComponent } from './e-purchases/e-purchases.component';
const routes: Routes = [
  
  {path:'profile' ,component:ProfileComponent},
  {path:'perfomance', component:PerfomanceDetailsComponent},
  {path:'donations', component:DonationsComponent},
  {path:'purchase', component:EPurchasesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],




exports: [RouterModule]
})
export class AppRoutingModule { }
