import { Component, Input } from '@angular/core';
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
  faTimes = faTimes;
}
