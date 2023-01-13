export interface Task {
  id?: number; //Cuando creamos un id podria no venir por eso el signo de interrogación
  text: string;
  day: string;
  reminder: boolean;
}
