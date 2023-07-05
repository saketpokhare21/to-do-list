import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  todoListArr = [];
  filterValue:string = "Filter by category..";

  onActionSubmit(data:any){
    this.todoListArr.push(data);
    console.log(this.todoListArr);
  }

  getDataOnEdit(data:any){
    console.log(data);
  }

  onUpdation(data:any){
    console.log(data);
    console.log(this.todoListArr);
  }

}
