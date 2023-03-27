import React from 'react';
import { Outlet } from 'react-router-dom';
import './PageContainer.css';
import { PageContainerProps } from './PageContainer.types';

export function PageContainer({ className = '' }: PageContainerProps) {
  return (
    <div className={`container ${className}`}>
      <Outlet />
    </div>
  );
}
