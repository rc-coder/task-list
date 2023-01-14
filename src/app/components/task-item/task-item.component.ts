import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { taskList } from 'src/app/mock.task';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  //Aqui con @input hacemos que el tag app-task-item pueda aceptar la propiedad task
  @Input() task: Task = taskList[0];
  //Con @Output podemos emitir el evento para que sea manejado por el elemento padre, importante inicializar con new EventEmitter
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  //Pasando el task como parametro se selecciona el task especifico que se clickea
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
