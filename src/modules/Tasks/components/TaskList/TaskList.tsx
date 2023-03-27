import React from 'react';
import { TaskItem } from '../TaskItem';
import { TaskListProps } from './TasksList.types';

export function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="task-wrapper">
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
