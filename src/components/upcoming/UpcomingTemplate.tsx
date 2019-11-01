import React from 'react';
import styled from 'styled-components';

const UpcomingTemplateBlock = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding-top: 30px;
`;

type UpcomingTempleteProps = {
  children: React.ReactNode;
};

function UpcomingTemplate({ children }: UpcomingTempleteProps) {
  return <UpcomingTemplateBlock>{children}</UpcomingTemplateBlock>;
}

export default UpcomingTemplate;
