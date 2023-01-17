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

  deleteTask(task: Task) {
    //Necesario hacer el filter para que actualice la vista
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== task.id;
      });
    });
  }

  toggleReminder(task: Task) {
    //Manejo de estado, pero no actualiza la base de datos
    task.reminder = !task.reminder;
    //Aqui si se actualiza la base de datos
    //El servicio se encarga de comunicarse con la base de datos y la logica se maneja aqui en el componente
    //Esto es como el useDispatch de Redux. los service serian como los features
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }
}
