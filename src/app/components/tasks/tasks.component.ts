import { Component } from '@angular/core';
import { Task } from 'src/app/Task';
import { taskList } from 'src/app/mock.task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = taskList;
}
