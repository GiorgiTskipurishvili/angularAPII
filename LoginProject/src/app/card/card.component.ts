import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() data: any; 
  @Output() delete = new EventEmitter<void>(); 
  @Output() onEmployeeUpdated: EventEmitter<any> = new EventEmitter();
  @Output() edit = new EventEmitter<number>();
  onDelete() {
    this.delete.emit(); 
  }
  onEdit() {
    this.edit.emit(this.data.id);
  }

  // editEmployee(): void {
  //   this.onEmployeeUpdated.emit(this.data); 
  // }

  
}
