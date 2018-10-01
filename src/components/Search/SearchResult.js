import * as React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { Container, TextNormal } from './../Core';
import { addTags } from './../../actions';

const TitleText = TextNormal.extend`
  text-decoration: underline;
`;

const enhance = compose(
  connect(
    null,
    dispatch => ({
      addTags: tags => {
        dispatch(addTags(tags));
      }
    }),
  ),
  withHandlers({
    handleAddTags: ({ tags, addTags }) => () => {
      addTags(tags);
    }
  }),
);

const Result = ({ handleAddTags, title }) => (
  <Container py="12" onClick={handleAddTags}>
    <TitleText>{title}</TitleText>
  </Container>
);

export const SearchResult = enhance(Result);
