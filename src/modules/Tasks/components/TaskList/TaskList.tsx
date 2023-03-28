import React from 'react';
import { TaskItem } from '../TaskItem';
import { TaskListProps } from './TasksList.types';

export function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="task-wrapper">
      <ul className="list-group todo-list">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item">
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
}
