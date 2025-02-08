import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {
    path:'', redirectTo:'search' , pathMatch: 'full'
  },
  {
    path:'search',component:SearchComponent
  },
  {
    path:'booking',component:BookingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
