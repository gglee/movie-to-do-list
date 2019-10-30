import React from 'react';
import styled from 'styled-components';
import Header from '../components/base/Header';
import UpcomingTemplate from '../components/upcoming/UpcomingTemplate';

const UpcomingPageBlock = styled.div``;

type UpcomingPageProps = {};

function UpcomingPage() {
  return (
    <UpcomingPageBlock>
      <Header />
      <UpcomingTemplate></UpcomingTemplate>
    </UpcomingPageBlock>
  );
}
export default UpcomingPage;
