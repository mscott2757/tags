import * as React from 'react';
import { compose, withStateHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';
import { Container, Input } from './../Core';
import { SearchResults } from './';

const SearchContainer = Container.extend`
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

class Search extends React.Component {
  focusTextInput = () => {
    if (this.textInput) this.textInput.focus();
  }

  render() {
    const { setSearchTag, searchTag, matchingGroups } = this.props;
    return (
      <SearchContainer flexColumn mb="30" >
        <Input
          type="text"
          placeholder="Search for tags"
          value={searchTag}
          onChange={setSearchTag}
          innerRef={c => this.textInput = c}
        />
        <SearchResults
          focusTextInput={this.focusTextInput}
          matchingGroups={matchingGroups}
        />
      </SearchContainer>
    );
  }
}

export const TagSearch = enhance(Search);
