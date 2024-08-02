import { Component, OnInit } from '@angular/core';
import { Plate } from 'src/app/models/plate';
import { Router } from '@angular/router';
import { PlateService } from 'src/app/services/plate/plate.service';
import { dayPlate } from 'src/app/models/dayPlate';
import { restriccion } from 'src/app/models/restriccion';
import { RestriccionService } from 'src/app/services/restriccion/restriccion.service';
import { dayRestriccion } from 'src/app/models/dayRestriccion';
@Component({
  selector: 'app-plate-list',
  templateUrl: './plate-list.component.html'
  
})
export class PlateListComponent implements OnInit {
  plates: Plate[];
  showDays: boolean[] = [];
  daysPlates: dayPlate[];
  restriccion: restriccion[];
  dayRestriccions: dayRestriccion[];
  circulationStatus: {[key: string]: string} = {};
  constructor(private router: Router, private plateService: PlateService, private restriccionService: RestriccionService) {}

  ngOnInit(): void {
    this.getPlate();
    this.getRestriccion();
  }

  deletePlate(plateNumber: string) {
    this.plateService.deletePlate(plateNumber).subscribe(
      () => {
        console.log('Placa eliminada con éxito');
        window.location.reload(); // Recarga la página
      },
      (error) => {
        window.location.reload();
        console.error('Error al eliminar la placa:', error);
      }
    );
  }
  deleteRestriccion(restriccionId: number) {
    this.restriccionService.deleteRestriccion(restriccionId).subscribe(
      () => {
        console.log('Restricción eliminada con éxito');
        window.location.reload(); 
      },
      (error) => {
        window.location.reload();
        console.error('Error al eliminar la restricción:', error);
      }
    );
  }

  private getPlate() {
    this.plateService.getPlateList().subscribe(
      (datos => {
        this.plates = datos;
        this.showDays = new Array(this.plates.length).fill(false);
      })
    );
  }
  private getRestriccion() {
    this.restriccionService.getRestriccionList().subscribe(
      (datos => {
        this.restriccion = datos;
        this.showDays = new Array(this.plates.length).fill(false);
      })
    );
  }

  toggleDays(index: number) {
    this.showDays[index] = !this.showDays[index];
  }
  checkRestrictions(plateNumber: string) {
    this.plateService.canCirculate(plateNumber).subscribe(
      (status) => {
        this.circulationStatus = status;
        const url = this.router.serializeUrl(
          this.router.createUrlTree(['/circulation-status'], { queryParams: { plateNumber } })
        );
        window.open(url, '_blank');
      },
      (error) => {
        console.error('Error al verificar restricciones:', error);
      }
    );
  }
}