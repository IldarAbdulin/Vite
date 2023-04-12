import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../redux/slices/users-slice';

export const User: FC<IUser> = ({ user }) => {
  return (
    <Link to={`${user.id}`}>
      <div className="border-4 border-sky-200 p-2">
        <h1>
          name: <span className="text-red-600">{user.name}</span>
        </h1>
        <h1>
          email: <span className="text-purple-600">{user.email}</span>
        </h1>
        <h1>
          website: <span className="text-sky-600">{user.website}</span>
        </h1>
      </div>
    </Link>
  );
};
