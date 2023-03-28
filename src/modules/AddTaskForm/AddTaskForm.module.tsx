import React, { useState } from 'react';
import { Button, Checkbox, TextField } from 'components/index';
import { AddTaskEntity } from 'domains/index';
import { validateForm } from 'helpers/index';

export function AddTaskForm() {
  const [task, setTask] = useState<AddTaskEntity>({
    name: '',
    info: '',
    isImportant: false,
  });

  const [errorState, setErrorState] = useState([false, false]);

  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask((prevTask) => ({
      ...prevTask,
      name: event.target.value,
    }));
  };

  const handleTaskInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask((prevTask) => ({
      ...prevTask,
      info: event.target.value,
    }));
  };

  const handleIsImportantChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      isImportant: checked,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validateForm(task.name, task.info);
    if (isValid) {
      console.log(task);
      setErrorState([false, false]);
    } else {
      setErrorState([task.name.trim() === '', task.info.trim() === '']);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        inputType="text"
        label="Task name"
        placeholder="Task name"
        value={task.name}
        onChange={handleTaskNameChange}
        errorText={errorState[0] ? 'Поле должно быть заполнено' : ''}
      />
      <TextField
        inputType="text"
        label="What to do(description)"
        placeholder="What to do(description)"
        value={task.info}
        onChange={handleTaskInfoChange}
        errorText={errorState[1] ? 'Поле должно быть заполнено' : ''}
      />
      <Checkbox label="Important" checked={task.isImportant} onChange={handleIsImportantChange} />

      <Button text="Add task" type="submit" />
    </form>
  );
}
