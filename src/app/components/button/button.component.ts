import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  // De esta manera recibimos informacion desde el Dom hacia el componente, haciendo asi un boton dinamico
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter();
  // De esta manera emitimos una accion desde el componente hijo, pasa al template del mismo y llega al template y logica del componente padre
  onClick() {
    this.btnClick.emit();
  }
}
