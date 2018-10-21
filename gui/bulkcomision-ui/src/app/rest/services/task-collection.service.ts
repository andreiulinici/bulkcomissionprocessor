import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskCollection } from '../../model';

@Injectable()
export class TaskCollectionService {

  path = 'http://localhost:3000/tasks-collections';

  constructor(private _http: HttpClient) { }

  getTasksCollections() {
    return this._http.get<TaskCollection[]>(this.path);
  }
}
