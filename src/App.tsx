import { FC } from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  AboutPage,
  NotFoundPage,
  UsersPage,
  UserPage,
} from './pages';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};
