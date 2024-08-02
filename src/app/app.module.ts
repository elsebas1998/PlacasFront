import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlateListComponent } from './components/plate-list/plate-list.component';
import { RestriccionListComponent } from './components/restriccion-list/restriccion-list.component';
import { CreatePlateComponent } from './components/createPlate/create-plate/create-plate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatedRestriccionComponent } from './components/created-restriccion/created-restriccion.component';
import { CirculationStatusComponent } from './components/circulation-status/circulation-status.component';

@NgModule({
  declarations: [
    AppComponent,
    PlateListComponent,
    RestriccionListComponent,
    CreatePlateComponent,
    CreatedRestriccionComponent,
    CirculationStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
