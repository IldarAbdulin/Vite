import React, { FC } from 'react';
import { Layout } from '../components/layout/Layout';

export const HomePage: FC = () => {
  return (
    <>
      <Layout>
        <div className="h-[88vh] flex items-center justify-center">
          <h1 className="border-4 border-sky-400 p-5">Home</h1>
        </div>
      </Layout>
    </>
  );
};
