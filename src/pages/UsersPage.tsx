import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getAllUsers } from '../redux/slices/users-slice';
import { Layout } from '../components/layout/Layout';
import { User } from '../components/User';

export const UsersPage: FC = () => {
  const { users, loading, error } = useAppSelector(({ users }) => users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <Layout>
      <div>
        {error && (
          <h1 className="text-red-600 text-center text-[30px]">{error}</h1>
        )}
        {!users.length ? (
          <h1>Loading...</h1>
        ) : (
          users.map((user) => <User user={user} key={user.id} />)
        )}
      </div>
    </Layout>
  );
};
