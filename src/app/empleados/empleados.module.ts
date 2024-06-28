import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';
import { EmpleadosCompletoComponent } from './empleados-completo/empleados-completo.component';



@NgModule({
  declarations: [
    FormularioComponent,
    ListadoComponent,
    EmpleadosCompletoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    FormularioComponent,
    ListadoComponent,
    EmpleadosCompletoComponent
  ]
})
export class EmpleadosModule { }
