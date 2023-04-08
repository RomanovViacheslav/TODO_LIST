import React, { FormEvent } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { SearchFilters } from '../SearchFilters';
import { TasksStoreInstance } from '../../store';
import { FiltersType, SearchFilterTaskEntity } from 'domains/index';
import { Button, SearchInput } from 'components/index';

export function SearchTask() {
  const { isLoading, loadTasks } = TasksStoreInstance;
  const { control, handleSubmit, setValue } = useForm<SearchFilterTaskEntity>({
    defaultValues: { filters: {} },
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit((data: SearchFilterTaskEntity) => {
      loadTasks(data);
    })();
  };

  const handleFilterChange = ({ isImportant, isDone }: FiltersType) => {
    const filters: FiltersType = {};
    if (isImportant !== undefined) {
      filters.isImportant = isImportant;
    }
    if (isDone !== undefined) {
      filters.isDone = isDone;
    }
    setValue('filters', filters);
  };

  const onSearchInputReset = () => setValue('name_like', '');

  return (
    <form onSubmit={onSubmit} className="search-form d-flex justify-content-between">
      <Controller
        name="name_like"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <SearchInput
            value={field.value || ''}
            onChange={field.onChange}
            onReset={onSearchInputReset}
            disabled={isLoading}
          />
        )}
      />
      <Controller
        name="filters"
        control={control}
        render={({ field }) => (
          <SearchFilters filters={field.value} disabled={isLoading} onChange={handleFilterChange} />
        )}
      />
      <Button text="Find" type="submit" />
    </form>
  );
}
