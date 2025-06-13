import { ContactRequest } from './../../models/contactRequest.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [

    FormsModule,
    ReactiveFormsModule,
    CommonModule

  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  contactRequest!: FormGroup;
  loading = false;
  success = false;
  error = false;
  errorMessage: string = "Ocurrió un error, intenta de nuevo."

  constructor(private fb: FormBuilder,
              private api: ApiServiceService) {}

  ngOnInit(){
    this.contactRequest = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    celular: ['', [Validators.required, Validators.pattern(/^\+?\d{9,15}$/)]],
    servicio: ['', Validators.required],
    mensaje: [''],
  });

  }

  onSubmit() {
    this.error = false;
    this.success = false;
    if (this.contactRequest.get('celular')?.hasError('pattern') || this.contactRequest.get('email')?.hasError('email')){
      this.error = true;
      this.errorMessage = "Datos invalidos."
      return;
    } 
    else if(this.contactRequest.invalid){
      this.error = true;
      this.errorMessage = "Formulario incompleto."
      return;
    }

    this.loading = true;
    this.api.sendContact(this.contactRequest.value)
      .subscribe({
        next: () => {
          this.loading = false;
          this.success = true;
        },
        error: () => {
          this.loading = false;
          this.error = true;
        }
      });
  }

}
