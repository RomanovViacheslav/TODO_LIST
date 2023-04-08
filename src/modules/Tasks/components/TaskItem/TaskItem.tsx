import React from 'react';
import { OptionButton } from '../OptionButton';
import { TaskItemProps } from './TaskItem.types';
import { paths } from 'constants/paths';

export function TaskItem({ task, deleteTask, clickIsDone, clickIsImportant }: TaskItemProps) {
  const { name, info, isImportant, isDone, id } = task;

  const importantBtnClass = `task__btn btn ${
    isImportant ? 'btn-success' : 'btn-outline-success'
  } btn-sm float-right btn-important`;

  const doneBtnClass = `task__btn btn ${isDone ? 'btn-danger' : 'btn-outline-danger'} btn-sm float-right`;

  const deleteBtnClass = 'task__btn btn btn-outline-danger btn-sm float-right btn-delete';

  const editBtnClass = 'task__btn btn btn-outline-secondary btn-sm float-right';

  const editBtnLink = `${paths.EDIT}/${id}`;

  const title = `task__label ${isDone ? 'text-decoration-line-through text-secondary' : ''} ${
    isImportant ? 'text-success fw-bold' : ''
  }`;
  const handleDelete = () => deleteTask(id);
  const handleIsDone = () => clickIsDone(id, isDone);
  const handleIsImportant = () => clickIsImportant(id, isImportant);

  return (
    <div>
      <p className={title}>{name}</p>
      <p>{info}</p>
      <OptionButton
        className={importantBtnClass}
        iconClass="fa fa-exclamation"
        disabled={isDone}
        onClick={handleIsImportant}
      />
      <OptionButton className={doneBtnClass} iconClass="fa fa-check" onClick={handleIsDone} />
      <OptionButton className={deleteBtnClass} iconClass="fa fa-trash-o" onClick={handleDelete} />
      <OptionButton className={editBtnClass} iconClass="fa fa-pencil" to={editBtnLink} />
    </div>
  );
}
