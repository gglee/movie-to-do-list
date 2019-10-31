import React from 'react';
import styled from 'styled-components';
import Header from '../components/base/Header';
import UpcomingTemplate from '../components/upcoming/UpcomingTemplate';
import UpcomingList from '../components/upcoming/UpcomingList';

const UpcomingPageBlock = styled.div``;

type UpcomingPageProps = {};

function UpcomingPage() {
  return (
    <UpcomingPageBlock>
      <Header />
      <UpcomingTemplate>
        <UpcomingList />
      </UpcomingTemplate>
    </UpcomingPageBlock>
  );
}
export default UpcomingPage;
