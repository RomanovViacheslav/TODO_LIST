import { TaskEntity } from 'domains/index';

export type TaskItemProps = {
  task: TaskEntity;
  deleteTask: (id: string) => void;
  clickIsDone: (id: string, state: boolean) => void;
  clickIsImportant: (id: string, state: boolean) => void;
};
