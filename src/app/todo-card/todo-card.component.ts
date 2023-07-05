import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {
  @Input() category;
  @Input() action;
  @Output() onEdit = new EventEmitter();
  @Output() onUpdate = new EventEmitter();
  displayEditForm:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  editCard(data:any){
    console.log(`Edit: ${this.category}, ${this.action}`);
    this.onEdit.emit({category: this.category, action: this.action});
    this.displayEditForm = true;
  }

  onUpdatingData(data:any){
    this.onUpdate.emit(data);
    this.displayEditForm = false;
  }

}
