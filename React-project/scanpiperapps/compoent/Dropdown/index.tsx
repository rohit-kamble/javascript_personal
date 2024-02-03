import React from 'react';
import {
  DropDownContainer,
  DropDownText,
  DropDownButtonContainer,
  DropDownButton,
  DropDownSelectedText,
  DropDownIcon,
  DropDownButtonList,
  DropDownList,
  DropDownItemList,
} from './style';

function RenderList({setSelectValue, setSelected, item, selected}: any) {
  return (
    <DropDownButtonList
      onPress={() => {
        setSelectValue(item.title);
        setSelected(!selected);
      }}>
      <DropDownItemList>{item.title}</DropDownItemList>
    </DropDownButtonList>
  );
}

export default function Dropdown({
  setSelectValue,
  setSelected,
  selecValue,
  selected,
  List,
}: any) {
  const src = selected
    ? require('../../assets/up.png')
    : require('../../assets/down.jpg');
  return (
    <DropDownContainer>
      <DropDownText>Tag:</DropDownText>
      <DropDownButtonContainer>
        <DropDownButton onPress={() => setSelected(!selected)}>
          <DropDownSelectedText>{selecValue}</DropDownSelectedText>
          <DropDownIcon source={src} />
        </DropDownButton>
        {selected ? (
          <DropDownList
            data={List}
            renderItem={({item}: any) => (
              <RenderList {...{setSelectValue, setSelected, item, selected}} />
            )}
            keyExtractor={(item: any) => item.title}
          />
        ) : null}
      </DropDownButtonContainer>
    </DropDownContainer>
  );
}
