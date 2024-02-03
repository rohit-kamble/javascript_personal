import React, {useState} from 'react';
import {Container, SearchInput, SerachIcon} from './style';
import {SearchProps} from './types';

export default function Search({onChange, value}: SearchProps) {
  const [focusStyle, setFocusStyle] = useState<boolean>(false);
  return (
    <Container focusable={focusStyle}>
      <SearchInput
        placeholderTextColor="black"
        placeholder="name/company/contact/tag"
        keyboardType="default"
        cursorColor={'black'}
        onFocus={() => setFocusStyle(true)}
        onBlur={() => setFocusStyle(false)}
        onChangeText={onChange}
        value={value}
      />
      <SerachIcon source={require('../../assets/searchIcon.png')} />
    </Container>
  );
}
