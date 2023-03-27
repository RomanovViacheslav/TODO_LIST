import React from 'react';
import { TaskList } from './components';
import { TasksMock } from '__mocks__/index';

export function Tasks() {
  console.log('g');
  return <TaskList tasks={TasksMock} />;
}
