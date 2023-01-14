import { Component, inject } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = [];
  // Otra manera de injectar Servicios
  // taskService = inject(TaskService);

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Esto seria como las promises o async y await
    this.taskService.getTasks().subscribe((task) => {
      this.tasks = task;
    });
  }
}
