import { Task } from './Task';
//Con la interfaz evitamos inconsistencias en el codigo y repetir la asignacion de tipos de variables

export const taskList: Task[] = [
  {
    id: 1,
    text: 'Terminar el primer Modulo de angular',
    day: 'Agosto 5 a las 12',
    reminder: true,
  },
  {
    id: 2,
    text: 'Terminar el segundo Modulo de angular',
    day: 'Agosto 5 a las 12',
    reminder: true,
  },
  {
    id: 3,
    text: 'Terminar el tercer Modulo de angular',
    day: 'Agosto 5 a las 12',
    reminder: false,
  },
  {
    id: 4,
    text: 'Terminar el cuarto Modulo de angular',
    day: 'Agosto 5 a las 12',
    reminder: false,
  },
];
