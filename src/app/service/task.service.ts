import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Nos permiten hacer llamadas a apis, es necesario importar el modulo en app.module para poder usar estos metodos
import { Task } from '../Task';
import { Observable, of } from 'rxjs';

//En los servicios nos comunicamos con el el backEnd (Base de datos)

const httpOptions = {
  //Aqui le informamos al backend que le estamos enviando un json con el put
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = ' http://localhost:5000/tasks';
  //inicializamos el metodo http en el constructor, este metodo seria el fetch
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
