import React from 'react';
import styled from 'styled-components';
import Header from '../components/base/Header';

const WatchListPageBlock = styled.div``;
type WatchListPageProps = {
  children: React.ReactNode;
};

function WatchListPage({ children }: WatchListPageProps) {
  return (
    <WatchListPageBlock>
      <Header />
      {children}
    </WatchListPageBlock>
  );
}
export default WatchListPage;
