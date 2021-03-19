import { Injectable } from '@angular/core';
import { ITaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: ITaskModel[] = [];

  constructor() {}

  saveTask(task: ITaskModel): boolean {
    this.tasks.push(task);
    return true;
  }

  getTasks(): ITaskModel[] {
    return this.tasks;
  }
}
