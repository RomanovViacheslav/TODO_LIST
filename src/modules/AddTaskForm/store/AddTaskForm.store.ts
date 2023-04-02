import { makeObservable, observable, action, computed } from 'mobx';

import { AddTaskEntity } from 'domains/index';

type PrivateFields = '_error' | '_isLoading';
class AddTaskStore {
  private _isLoading = false;
  private _error: string | null = null;

  constructor() {
    makeObservable<this, PrivateFields>(this, {
      _isLoading: observable,
      _error: observable,

      isLoading: computed,
      error: computed,

      addTask: action,
    });
  }

  get isLoading() {
    return this._isLoading;
  }

  get error() {
    return this._error;
  }

  addTask = (task: AddTaskEntity) => {
    this._isLoading = true;
    this._error = null;
    console.log(task);

    // try {
    //   const response = await addTaskAPI(task);
    //   runInAction(() => {
    //     this._isLoading = false;
    //   });
    // } catch (error) {
    //   runInAction(() => {
    //     this._isLoading = false;
    //     this._error = error.message;
    //   });
    // }
  };
}

export const AddTasksStoreInstance = new AddTaskStore();
