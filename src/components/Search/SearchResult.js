import * as React from 'react';
import { Container, TextNormal } from './../Core';

const TitleText = TextNormal.extend`
  text-decoration: underline;
`;

export const SearchResult = ({ title, ...rest }) => (
  <Container py="12" {...rest}>
    <TitleText>{title}</TitleText>
  </Container>
);
