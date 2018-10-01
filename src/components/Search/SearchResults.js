import * as React from 'react';
import styled from 'styled-components';
import { branch, renderNothing } from 'recompose';
import { Container } from './../Core';
import { SearchResult } from './';

const enhance= branch(
  ({ matchingGroups }) => matchingGroups.length  === 0,
  renderNothing,
)

const ResultWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 31px;
  z-index: 100;
  background: #fff;
`;

const ResultContainer = Container.extend`
  border-radius: 2px;
  border: 1px solid #ddd;
  border-top: none;
`;

const Results = ({ matchingGroups }) => (
  <ResultWrapper>
    <ResultContainer p="8" flexColumn>
      {matchingGroups.map(({ id, ...rest })=> <SearchResult key={id} {...rest} />)}
    </ResultContainer>
  </ResultWrapper>
);

export const SearchResults = enhance(Results);
