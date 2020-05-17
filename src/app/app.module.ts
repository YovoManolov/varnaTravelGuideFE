import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthRoutingModule } from './auth-routing.module';
import { ListPlacesComponent } from './list-places/list-places.component';
import { PlaceDescriberComponent } from './place-describer/place-describer.component';
import { ProfileDescriberComponent } from './profile-describer/profile-describer.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from  '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    ListPlacesComponent,
    PlaceDescriberComponent,
    ProfileDescriberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
