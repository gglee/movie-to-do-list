import React from 'react';
import styled from 'styled-components';

const UpcomingTemplateBlock = styled.div``;

type UpcomingTempleteProps = {
  children: React.ReactNode;
};

function UpcomingTemplate({ children }: UpcomingTempleteProps) {
  return <UpcomingTemplateBlock>{children}</UpcomingTemplateBlock>;
}

export default UpcomingTemplate;
