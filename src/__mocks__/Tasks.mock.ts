import { TaskEntity, TasksStatsEntity } from 'domains/index';

export const TasksStatsMock: TasksStatsEntity = {
  total: 5,
  important: 4,
  done: 10,
};

export const TasksMock: TaskEntity[] = [
  {
    name: 'Поспать',
    id: '34',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    isImportant: false,
    isDone: true,
  },
  {
    name: 'Поесть',
    id: '2343',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    isImportant: true,
    isDone: false,
  },
  {
    name: 'Попить',
    id: '4324324344',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    isImportant: true,
    isDone: false,
  },
  {
    name: 'Полежать',
    id: '114331',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    isImportant: false,
    isDone: false,
  },
];
