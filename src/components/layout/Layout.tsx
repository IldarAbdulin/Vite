import React, { FC, PropsWithChildren } from 'react';

import { Header } from './header/Header';
import { Footer } from './footer/Footer';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
