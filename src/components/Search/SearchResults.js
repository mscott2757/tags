import * as React from 'react';
import styled from 'styled-components';
import { compose, withHandlers, branch, renderNothing } from 'recompose';
import { connect } from 'react-redux';
import { addTags } from './../../actions';
import { Container } from './../Core';
import { SearchResult } from './';

const enhance= compose(
  branch(
    ({ matchingGroups }) => matchingGroups.length === 0,
    renderNothing,
  ),
  connect(
    null,
    dispatch => ({
      addTags: tags => {
        dispatch(addTags(tags));
      }
    }),
  ),
  withHandlers({
    handleAddTags: ({ addTags, focusTextInput }) => tags => {
      addTags({ tags });
      focusTextInput();
    }
  }),
);

const ResultWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 44px;
  z-index: 100;
  background: #fff;
  ${({ visible }) => !visible && 'display: none'};
`;

const ResultContainer = styled(Container)`
  border-radius: 2px;
  border: 1px solid #ddd;
  border-top: none;
`;

const Results = ({ visible, matchingGroups, handleAddTags }) => (
  <ResultWrapper visible={visible}>
    <ResultContainer flexColumn>
      {matchingGroups.map(({ id, tags, ...group })=> (
        <SearchResult
          key={id}
          onClick={() => handleAddTags(tags)}
          {...group}
        />
      ))}
    </ResultContainer>
  </ResultWrapper>
);

export const SearchResults = enhance(Results);
