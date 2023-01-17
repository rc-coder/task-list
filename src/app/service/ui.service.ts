import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
//Subject es un tipo especial de observable, es como un eventEmitter

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    //Aqui emitimos showAddTask
    this.subject.next(this.showAddTask);
  }
  //Observable es como es async, en el componente podemos subscribirnos al observable y esperar que haya un cambio
  //Con esto podemos subscribirnos en los componentes donde injectemos el servicio a subject, que nos va a dar el valor de showAddtask
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
