import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
// Nos permiten hacer llamadas a apis, es necesario importar el modulo en app.module para poder usar estos metodos
import { taskList } from '../mock.task';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';

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
}
