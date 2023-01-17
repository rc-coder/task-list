import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { Router } from '@angular/router';
//Router nos permite acceder a la current url

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'My TaskList';
  showAddTask: boolean = false;
  subscription?: Subscription;
  private uiService = inject(UiService);
  private router = inject(Router);
  // inyectamos el Router

  //Aqui inyectamos uiService para manejar el estado del boton (color, texto)

  constructor() {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
    //Aqui nos subscribimos a onToggle que es subject dandonos el valor de showAddtask del uiservice, para pasarlo al showaddtask de este componente
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
    //Esto cambia el valor de addtask y emite el valor con el subject, esto es escuchado arriba con el subscribe a onToggle
  }

  hasRoute(route: string) {
    //Verificamos si el current url es igual al route especificado en el parametro
    return this.router.url === route;
  }
}
