import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="p-2">
      <button
        onClick={goBack}
        className="border-2 border-sky-300 p-2 rounded-lg"
      >
        Go Back
      </button>
      <h1 className="text-center text-red-600 underline text-[30px]">
        Page is not defind
      </h1>
    </div>
  );
};
