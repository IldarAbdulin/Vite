import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <div className="border shadow-lg p-2">
      <div className="flex gap-5 items-center">
        <Link to={`/`} className="text-center uppercase">
          Home
        </Link>
        <Link to={`/about`} className="text-center uppercase">
          About
        </Link>
        <Link to={`/users`} className="text-center uppercase">
          Users
        </Link>
      </div>
    </div>
  );
};
