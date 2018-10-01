import * as React from 'react';
import { compose, withStateHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';
import { Container, Input } from './../Core';
import { SearchResults } from './';

const SearchContainer = Container.extend`
  position: relative;
`;

const enhance = compose(
  connect(({ groups }) => ({ groups })),
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

const Search = ({
  setSearchTag,
  searchTag,
  matchingGroups,
}) => (
  <SearchContainer flexColumn mb="30" >
    <Input
      type="text"
      placeholder="Search for tags"
      value={searchTag}
      onChange={setSearchTag}
    />
    <SearchResults matchingGroups={matchingGroups} />
  </SearchContainer>
)


export const TagSearch = enhance(Search);
