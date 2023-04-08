import React, { memo } from 'react';
import { SearchFiltersProps } from './SearchFilters.types';
import { CLASSNAMES } from './SearchFilter.constants';
import { FiltersType } from 'domains/index';
import { FILTER_OPTIONS } from 'constants/index';

function SearchFiltersComponent({ onChange, disabled, filters }: SearchFiltersProps) {
  const onFilterChange = ({ isImportant, isDone }: FiltersType) => {
    if (!disabled) {
      const newFilters: FiltersType = {};
      if (isImportant !== undefined) newFilters.isImportant = isImportant;
      if (isDone !== undefined) newFilters.isDone = isDone;
      onChange(newFilters);
      console.log(newFilters);
    }
  };

  return (
    <div className="btn-group">
      {Object.entries(FILTER_OPTIONS).map(([name, filter]) => (
        <button
          type="button"
          className={JSON.stringify(filters) === JSON.stringify(filter) ? CLASSNAMES.ACTIVE : CLASSNAMES.SECONDARY}
          key={name}
          onClick={() => onFilterChange(filter)}>
          {name}
        </button>
      ))}
    </div>
  );
}

export const SearchFilters = memo(SearchFiltersComponent);
