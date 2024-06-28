import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosModule } from './empleados/empleados.module';
import { CabeceraModule } from './cabecera/cabecera.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmpleadosModule,CabeceraModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AplicacionEmpleados';
}
