import React, { FC, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getUserById } from '../redux/slices/users-slice';

export const UserPage: FC = () => {
  const { user } = useAppSelector(({ users }) => users);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  console.log(user);

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch]);

  return (
    <>
      <button
        onClick={goBack}
        className="border-2 border-sky-300 p-2 rounded-lg"
      >
        Go Back
      </button>
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
    </>
  );
};
