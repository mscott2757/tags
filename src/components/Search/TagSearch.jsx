import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { compose, withStateHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';
import { Container, Input } from './../Core';
import { SearchResults } from './';

const SearchContainer = styled(Container)`
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

const useOutside = (ref, cb) => {
  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, cb])
}

const Search = ({ setSearchTag, searchTag, matchingGroups }) => {
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);
  const focusTextInput = () => inputRef.current.focus();
  const [visible, setVisibility] = useState(false);
  useOutside(wrapperRef, () => {
    setVisibility(false);
  });

  return (
    <SearchContainer ref={wrapperRef} flexColumn mb="30" >
      <Input
        type="text"
        placeholder="Search for tags"
        value={searchTag}
        onChange={setSearchTag}
        onFocus={() => {
          setVisibility(true);
        }}
        ref={inputRef}
      />
      <SearchResults
        visible={visible}
        focusTextInput={focusTextInput}
        matchingGroups={matchingGroups}
      />
    </SearchContainer>
  );
};

export const TagSearch = enhance(Search);
