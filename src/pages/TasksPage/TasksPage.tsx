import React from 'react';

import { Button } from 'components/index';
import { paths } from 'constants/index';
import { Tasks } from 'modules/index';

export function TasksPage() {
  return (
    <>
      <h1>TODO LIST</h1>
      <Tasks />
      <Button to={paths.ADD} text={'Add task'} />
    </>
  );
}
