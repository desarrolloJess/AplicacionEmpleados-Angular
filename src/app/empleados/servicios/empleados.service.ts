import { Injectable } from '@angular/core';
import { IEmpleado } from '../modelos/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() { }

  private _lstEmpleados: IEmpleado[] = [];

  get empleadosList(): IEmpleado[]{
      return this._lstEmpleados;
  }

  agregarEmpleado(empleado : IEmpleado){
      this._lstEmpleados.push(empleado);
      localStorage.setItem("lstEmpleados",JSON.stringify(this._lstEmpleados));
  }

  eliminarEmpleado(idEmpleado:number){
    this._lstEmpleados.splice(idEmpleado,1);
    localStorage.setItem('lstEmpleados', JSON.stringify(this._lstEmpleados));
  }
}
