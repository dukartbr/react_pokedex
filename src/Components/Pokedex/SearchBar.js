import React from 'react';
import { Box, SearchInput, Icon, Colors } from '../../ui';

const SearchBar = ({ setSearchQuery, searchQuery }) => {
  return (
    <Box position='relative'>
      <Icon
        className={'fas fa-search'}
        style={{
          color: `${Colors.DarkPurple}`,
          top: '10px',
          left: '5px',
          position: 'absolute',
        }}
      ></Icon>
      <SearchInput
        type='text'
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
    </Box>
  );
};

export default SearchBar;
