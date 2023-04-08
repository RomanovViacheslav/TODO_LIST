import React from 'react';
import { observer } from 'mobx-react';
import './TaskStats.css';
import { TasksStoreInstance } from '../../store';
import { Loader } from 'components/index';

function TasksStatsComponent() {
  const { isLoading, tasksStats } = TasksStoreInstance;

  if (!tasksStats) {
    return <p className="d-flex justify-content-center w-100">Stats is not available</p>;
  }

  return (
    <ul className="list d-flex w-100 justify-content-between">
      {Object.entries(tasksStats).map(([key, value]) => (
        <li className="list-elem" key={key}>
          <span className="statistic-name">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
          <Loader isLoading={isLoading} variant="dot">
            <span className="badge bg-secondary">{value}</span>
          </Loader>
        </li>
      ))}
    </ul>
  );
}

export const TasksStats = observer(TasksStatsComponent);
