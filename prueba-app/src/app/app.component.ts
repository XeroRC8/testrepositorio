import { Component } from '@angular/core';
//decorador en typescript
@Component({
  selector: 'app-root',//seleccionar el componente en la app
  templateUrl: './app.component.html',//este es el html que se debe poner
  styleUrls: ['./app.component.css']//Estilos encapsulados para trabjar en este componente
})
export class AppComponent {
  public counter: number =10;

  increaseBy(value: number){
    this.counter+=value;
  }

}

