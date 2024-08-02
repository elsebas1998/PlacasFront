import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { RestriccionService } from 'src/app/services/restriccion/restriccion.service';
import { Router } from '@angular/router';
import { restriccion } from 'src/app/models/restriccion';
@Component({
  selector: 'app-created-restriccion',
  templateUrl: './created-restriccion.component.html',
  styleUrls: ['./created-restriccion.component.css']
})
export class CreatedRestriccionComponent implements OnInit {
  restriccionForm: FormGroup;
  formSubmitted = false;
  restriccion: restriccion = new restriccion();

  constructor(
    private fb: FormBuilder,
    private restriccionService: RestriccionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.restriccionForm = this.fb.group({
      numberFinal: ['', [Validators.required, Validators.min(0), Validators.max(9)]],
      dateDay: this.fb.array([])
    });
  }

  get dateDayForm() {
    return this.restriccionForm.get('dateDay') as FormArray;
  }

  addDay() {
    const day = this.fb.group({
      hourStart: ['', Validators.required],
      hourFinal: ['', Validators.required],
      dateDay: ['', Validators.required]
    });
    this.dateDayForm.push(day);
  }

  removeDay(index: number) {
    this.dateDayForm.removeAt(index);
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.restriccionForm.valid && this.dateDayForm.length > 0) {
      const formValue = this.restriccionForm.value;
      formValue.dateDay = formValue.dateDay.map((day: any) => ({
        hourStart: day.hourStart,
        hourFinal: day.hourFinal,
        dateDay: day.dateDay
      }));

      this.restriccionService.createRestriccion(formValue).subscribe(
        response => {
          console.log('Restricción creada', response);
          this.router.navigate(['/placas']);
        },
        error => {
          console.error('Error al crear la restricción', error);
        }
      );
    } else {
      console.error('Formulario inválido o sin días de restricción');
    }
  }
}
