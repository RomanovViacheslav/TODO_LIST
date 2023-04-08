import React from 'react';
import { observer } from 'mobx-react';
import { TaskItem } from '../TaskItem';
import { TasksStoreInstance } from '../../store';
import { Loader } from 'components/index';

export function TaskListComponent() {
  const { isLoading, tasks, error, deleteTask, toggleTaskCompletion, toggleTaskImportance } = TasksStoreInstance;
  return (
    <Loader isLoading={isLoading}>
      {tasks ? (
        <div className="task-wrapper">
          <ul className="list-group todo-list">
            {tasks.map((task) => (
              <li key={task.id} className="list-group-item">
                <TaskItem
                  clickIsImportant={toggleTaskImportance}
                  clickIsDone={toggleTaskCompletion}
                  deleteTask={deleteTask}
                  task={task}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <p>Что то не так...</p> {error && <p>{error}</p>}
        </>
      )}
    </Loader>
  );
}

export const TaskList = observer(TaskListComponent);
