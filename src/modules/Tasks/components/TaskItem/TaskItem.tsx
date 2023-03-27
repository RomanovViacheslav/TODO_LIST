import React from 'react';
import { OptionButton } from '../OptionButton';
import { TaskItemProps } from './TaskItem.types';
import { paths } from 'constants/paths';

export function TaskItem({ task }: TaskItemProps) {
  const { name, info, isImportant, isDone, id } = task;
  const importantBtnClass = `task__btn btn ${
    isImportant ? 'btn-success' : 'btn-outline-success'
  } btn-sm float-right btn-important`;

  const doneBtnClass = `task__btn btn ${isDone ? 'btn-danger' : 'btn-outline-danger'} btn-sm float-right`;

  const deleteBtnClass = 'task__btn btn btn-outline-danger btn-sm float-right btn-delete';

  const editBtnClass = 'task__btn btn btn-outline-secondary btn-sm float-right';

  const editBtnLink = `${paths.EDIT}/${id}`;

  return (
    <div>
      <OptionButton className={importantBtnClass} iconClass="fa fa-exclamation" disabled={isDone} />
      <OptionButton className={doneBtnClass} iconClass="fa fa-check" />
      <OptionButton className={deleteBtnClass} iconClass="fa fa-trash-o" />
      <OptionButton className={editBtnClass} iconClass="fa fa-pencil" to={editBtnLink} />
    </div>
  );
}
