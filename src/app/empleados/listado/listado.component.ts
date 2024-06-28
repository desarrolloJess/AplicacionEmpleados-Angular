import { Component } from '@angular/core';
import { EmpleadosService } from '../servicios/empleados.service';
import { IEmpleado } from '../modelos/empleado';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  constructor(private empleadosService: EmpleadosService){}

  get lstEmpleados(): IEmpleado[]{
    return this.empleadosService.empleadosList;
  }

  eliminarEmpleado(idEmpleado: number) {
    this.empleadosService.eliminarEmpleado(idEmpleado);
  }
}
