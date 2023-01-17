import { Component, Output, EventEmitter, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  //Estos seria los estados iniciales de los componentes
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription?: Subscription;
  uiService = inject(UiService);

  constructor() {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
    //Aqui nos subscribimos a onToggle que es subject dandonos el valor de showAddtask del uiservice, para pasarlo al showaddtask de este componente
  }

  //Aqui los manipulamos
  onSubmit() {
    if (this.text.length === 0) {
      alert('Please add some text');
      return;
    }
    let { text, day, reminder } = this;
    const newTask = { text, day, reminder };
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
    this.uiService.toggleAddTask();
  }
}
