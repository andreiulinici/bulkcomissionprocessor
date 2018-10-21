import {Component, OnInit} from '@angular/core';
import {TaskCollectionService} from '../../rest';
import {TaskCollection} from '../../model';

@Component({
  templateUrl: 'tasks.component.html'
})
export class TasksComponent implements OnInit {

  tasksCollections: TaskCollection[];

  constructor(private _taskCollectionService: TaskCollectionService) {
  }

  ngOnInit(): void {
    this._taskCollectionService.getTasksCollections().subscribe(res => {
      this.tasksCollections = res;
    });
  }
}
