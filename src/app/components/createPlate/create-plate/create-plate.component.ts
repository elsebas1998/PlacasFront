import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { PlateService } from 'src/app/services/plate/plate.service';
import { Router } from '@angular/router';
import { Plate } from 'src/app/models/plate';

@Component({
  selector: 'app-create-plate',
  templateUrl: './create-plate.component.html',
  styleUrls: ['./create-plate.component.css']
})
export class CreatePlateComponent implements OnInit{
  plateForm: FormGroup;
  formSubmitted = false;
  plate: Plate = new Plate();
  minDate: string;
  constructor(
    private fb: FormBuilder,
    private plateService: PlateService,
    private router: Router
  ) {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0]
   }

  ngOnInit() {
    this.plateForm = this.fb.group({
      number: ['', [Validators.required, Validators.pattern('[A-Za-z]{3}[0-9]{3}')]],
      days: this.fb.array([])
    });
    this.plateForm = this.fb.group({
      number: ['', [Validators.required, Validators.pattern('[A-Za-z]{3}[0-9]{3}')]],
      days: this.fb.array([])
    });
  }

  get daysForm() {
    return this.plateForm.get('days') as FormArray;
  }

  

  addDay() {
    const day = this.fb.group({
      hourStart: ['', Validators.required],
      hourFinal: ['', Validators.required],
      dateDay: ['', Validators.required]
    });
    this.daysForm.push(day);
  }

  removeDay(index: number) {
    this.daysForm.removeAt(index);
  }

  onSubmit() {
    if (this.plateForm.valid) {
      const formValue = this.plateForm.value;
      formValue.days = formValue.days.map((day: any) => ({
        hourStart: day.hourStart,
        hourFinal: day.hourFinal,
        dateDay: day.dateDay
      }));

      this.plateService.createPlate(formValue).subscribe(
        response => {
          console.log('Placa creada', response);
          this.router.navigate(['/placas']);
        },
        error => {
          console.error('Error al crear la placa', error);
        }
      );
    }
  }
  validateDays(formArray: FormArray): ValidationErrors | null {
    for (let i = 0; i < formArray.length; i++) {
      const group = formArray.at(i) as FormGroup;
      const hourStart = group.get('hourStart')?.value;
      const hourFinal = group.get('hourFinal')?.value;

      if (hourStart && hourFinal) {
        const start = new Date(`1970-01-01T${hourStart}:00`);
        const end = new Date(`1970-01-01T${hourFinal}:00`);
        if (end <= start) {
          return { invalidHours: 'La hora final debe ser al menos un minuto después de la hora de inicio' };
        }
      }
    }
    return null;
  }

}
