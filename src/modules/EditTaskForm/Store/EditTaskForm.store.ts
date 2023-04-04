import { makeObservable, observable, action, computed, runInAction } from 'mobx';

import { TaskUpdateEntity } from 'domains/index';

type PrivateFields = '_error' | '_isLoading' | '_task';
class EditTaskStore {
  private _isLoading = false;
  private _error: string | null = null;
  private _task: TaskUpdateEntity | null = null;

  constructor() {
    makeObservable<this, PrivateFields>(this, {
      _isLoading: observable,
      _error: observable,
      _task: observable,

      isLoading: computed,
      error: computed,
      task: computed,

      editTask: action,
      loadTask: action,
    });
  }

  get isLoading() {
    return this._isLoading;
  }

  get error() {
    return this._error;
  }

  get task() {
    return this._task;
  }

  editTask = (task: TaskUpdateEntity) => {
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

  loadTask = async (id: string) => {
    this._isLoading = true;
    this._error = null;
    try {
      const response = await fetch(`https://intership-liga.ru/tasks/${id}`);
      if (!response.ok) {
        throw new Error('Ошибочка');
      }
      const task = await response.json();
      runInAction(() => {
        this._isLoading = false;
        this._task = task;
        console.log(task);
      });
    } catch (error) {
      runInAction(() => {
        this._isLoading = false;
        // this._error = error.message;
      });
    }
  };
}

export const EditTasksStoreInstance = new EditTaskStore();
