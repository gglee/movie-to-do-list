import React from 'react';
import styled from 'styled-components';

const WatchTemplateBlock = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding-top: 30px;
`;

type WatchTempleteProps = {
  children: React.ReactNode;
};

function WatchTemplate({ children }: WatchTempleteProps) {
  return <WatchTemplateBlock>{children}</WatchTemplateBlock>;
}

export default WatchTemplate;
