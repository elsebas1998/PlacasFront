import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlateService } from 'src/app/services/plate/plate.service';

@Component({
  selector: 'app-circulation-status',
  
  templateUrl: './circulation-status.component.html',
  styleUrls: ['./circulation-status.component.css'],
  template: `
    <div class="container mt-4">
      <h2>Estado de Circulación para la Placa: {{plateNumber}}</h2>
      <ul class="list-group">
        <li class="list-group-item" *ngFor="let status of circulationStatus | keyvalue">
          {{status.key | date:'shortDate'}}: {{status.value}}
        </li>
      </ul>
    </div>
  `
})
export class CirculationStatusComponent {
  plateNumber: string;
  circulationStatus: {[key: string]: string} = {};

  constructor(
    private route: ActivatedRoute,
    private plateService: PlateService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.plateNumber = params['plateNumber'];
      this.loadCirculationStatus();
    });
  }

  loadCirculationStatus() {
    this.plateService.canCirculate(this.plateNumber).subscribe(
      (status) => {
        this.circulationStatus = status;
      },
      (error) => {
        console.error('Error al cargar el estado de circulación:', error);
      }
    );
  }
}
