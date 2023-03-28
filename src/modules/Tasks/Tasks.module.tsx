import React from 'react';
import { TaskList } from './components';
import { TasksMock } from '__mocks__/index';

export function Tasks() {
  return <TaskList tasks={TasksMock} />;
}
