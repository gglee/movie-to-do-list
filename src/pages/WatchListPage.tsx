import React from 'react';
import styled from 'styled-components';
import Header from '../components/base/Header';
import WatchList from '../components/watch/WatchList';
import WatchTemplate from '../components/watch/WatchTemplate';

const WatchListPageBlock = styled.div``;
type WatchListPageProps = {};

function WatchListPage() {
  return (
    <WatchListPageBlock>
      <Header />
      <WatchTemplate>
        <WatchList />
      </WatchTemplate>
    </WatchListPageBlock>
  );
}
export default WatchListPage;
