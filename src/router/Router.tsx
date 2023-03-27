import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { paths } from 'constants/index';
import { PageContainer } from 'components/index';
import { TasksPage } from 'pages/index';

export function Router() {
  return (
    <Routes>
      <Route path={paths.MAIN} element={<PageContainer />}>
        <Route index element={<TasksPage />} />
        <Route path={paths.ADD} element={<h2>add page</h2>} />
        <Route path={paths.EDIT} element={<div />} />
      </Route>
      <Route path={paths.NOTFOUND} element={<h2>404</h2>} />
    </Routes>
  );
}
