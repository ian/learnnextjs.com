import React from 'react';
import { AppStateProvider } from '@components/app-state';
import { BaseLayout } from '@components/layouts/base-layout';
import { Meta } from '@components/meta-head';
import { useFathom } from '@common/hooks/use-fathom';

export const AppWrapper: React.FC<any> = ({ children, isHome }) => {
  useFathom();
  return (
    <>
      <Meta />
      <AppStateProvider>
        <BaseLayout isHome={isHome}>{children}</BaseLayout>
      </AppStateProvider>
    </>
  );
};
