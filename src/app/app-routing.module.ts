import { ProfileDescriberComponent } from './profile-describer/profile-describer.component';
import { PlaceDescriberComponent } from './place-describer/place-describer.component';
import { ListPlacesComponent } from './list-places/list-places.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'list-places', component: ListPlacesComponent },
  { path: 'place-describer', component: PlaceDescriberComponent },
  { path: 'profile-describer', component: ProfileDescriberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const 
RoutingComponent = {ListPlacesComponent,PlaceDescriberComponent,ProfileDescriberComponent}
