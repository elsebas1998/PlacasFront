import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlateListComponent } from './components/plate-list/plate-list.component';
import { CreatePlateComponent } from './components/createPlate/create-plate/create-plate.component';
import { CreatedRestriccionComponent } from './components/created-restriccion/created-restriccion.component';
import { CirculationStatusComponent } from './components/circulation-status/circulation-status.component';

const routes: Routes = [
  {path: 'placas', component: PlateListComponent},
  {path: '', redirectTo: 'placas', pathMatch: 'full'},
  { path: 'circulation-status', component: CirculationStatusComponent },
  {path: 'agregar-placa', component: CreatePlateComponent },
  {path: 'agregar-restriccion', component: CreatedRestriccionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
