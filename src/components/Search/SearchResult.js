import * as React from 'react';
import styled from 'styled-components';
import { Container, TextNormal } from './../Core';

const TitleText = styled(TextNormal)`
  text-decoration: underline;
`;

export const SearchResult = ({ title, ...rest }) => (
  <Container py="12" {...rest}>
    <TitleText>{title}</TitleText>
  </Container>
);
