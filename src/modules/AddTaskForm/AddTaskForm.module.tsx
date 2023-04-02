import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { observer } from 'mobx-react';
import { AddTasksStoreInstance } from './store';
import { Button, Checkbox, Loader, TextField } from 'components/index';
import { AddTaskEntity } from 'domains/index';
import { validateSchema } from 'helpers/index';

function AddTaskFormComponent() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddTaskEntity>({
    resolver: yupResolver(validateSchema),
  });

  const { isLoading, addTask, error } = AddTasksStoreInstance;

  const onSubmit = (data: AddTaskEntity) => {
    addTask(data);
  };

  return (
    <>
      <Loader isLoading={isLoading}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                inputType="text"
                label="Task name"
                placeholder="Task name"
                value={field.value}
                onChange={field.onChange}
                errorText={errors.name?.message}
              />
            )}
          />

          <Controller
            name="info"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                inputType="text"
                label="What to do(description)"
                placeholder="What to do(description)"
                value={field.value}
                onChange={field.onChange}
                errorText={errors.info?.message}
              />
            )}
          />

          <Controller
            name="isImportant"
            control={control}
            defaultValue={false}
            render={({ field }) => <Checkbox label="Important" checked={field.value} onChange={field.onChange} />}
          />

          <Button text="Add task" type="submit" />
        </form>
      </Loader>
      {error && <p>{error}</p>}
    </>
  );
}

export const AddTaskForm = observer(AddTaskFormComponent);
