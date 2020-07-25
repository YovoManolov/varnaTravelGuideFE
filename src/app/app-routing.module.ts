import { ProfileDescriberComponent } from './profile-describer/profile-describer.component';
import { PlaceDescriberComponent } from './place-describer/place-describer.component';
import { ListPlacesComponent } from './list-places/list-places.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthGuard } from '@okta/okta-angular';

const routes: Routes = [
  { path: 'list-places/:placeTypeUrl', component: ListPlacesComponent,  canActivate: [OktaAuthGuard] },
  { path: 'place-describer/:typeOfPlace/:_id', component: PlaceDescriberComponent,  canActivate: [OktaAuthGuard]},
  { path: 'profile-describer', component: ProfileDescriberComponent,  canActivate: [OktaAuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
        onSameUrlNavigation: 'reload'
      }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const 
RoutingComponent = {ListPlacesComponent,PlaceDescriberComponent,ProfileDescriberComponent}
