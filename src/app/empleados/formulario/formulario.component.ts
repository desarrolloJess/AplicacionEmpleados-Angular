import { Component } from '@angular/core';
import { IEmpleado } from '../modelos/empleado';
import { EmpleadosService } from '../servicios/empleados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  public empleado : IEmpleado = {};

  constructor(private empleadosService : EmpleadosService){}

  public agregarEmpleado() {
    console.log("entra :)");
    
    this.empleadosService.agregarEmpleado(this.empleado);
    this.empleado = {};
  }

  validarCamposFormulario(): boolean {
    if (this.empleado.nombre && this.empleado.correo && this.empleado.telefono && this.empleado.fecha && this.empleado.sexo) {
      return false; // No disabled
    } else {
      return true; // Disabled
    }
  }


}
