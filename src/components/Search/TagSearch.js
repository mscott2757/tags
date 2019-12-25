import React, { useRef } from 'react';
import styled from 'styled-components';
import { compose, withStateHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';
import { Container, Input } from './../Core';
import { SearchResults } from './';

const SearchContainer = styled(Container)`
  position: relative;
`;

const withVisibility = withStateHandlers(
  { visible: false },
  {
    onToggle: ({ visible }) => () => ({ visible: !visible }),
  }
);

const enhance = compose(
  connect(({ groups }) => ({ groups })),
  withVisibility,
  withStateHandlers(
    { searchTag: '' },
    {
      setSearchTag: () => e =>({
        searchTag: e.target.value,
      }),
    }
  ),
  withProps(({ searchTag, groups }) => {
    searchTag = searchTag.toLowerCase();
    const matchingGroups = searchTag ?
      groups.filter(({ title }) => title.toLowerCase().includes(searchTag)) : [];
    return { matchingGroups };
  }),
);

const Search = ({ setSearchTag, searchTag, matchingGroups }) => {
  const inputRef = useRef(null);
  const focusTextInput = () => inputRef.current.focus();

  return (
    <SearchContainer flexColumn mb="30" >
      <Input
        type="text"
        placeholder="Search for tags"
        value={searchTag}
        onChange={setSearchTag}
        ref={inputRef}
      />
      <SearchResults
        focusTextInput={focusTextInput}
        matchingGroups={matchingGroups}
      />
    </SearchContainer>
  );
};

export const TagSearch = enhance(Search);
