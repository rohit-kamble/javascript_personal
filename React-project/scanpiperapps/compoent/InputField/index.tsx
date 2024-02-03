// import {TextInput} from '@react-native-material/core';
import {TextInput, View, Text} from 'react-native';
import {InputFieldProps} from './types';
import React from 'react';

export default function InputField({
  placholder,
  onChangeText,
  value,
  isMultipleLine,
  label,
}: InputFieldProps) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 14, color: 'gray', width: 90}}>{label}:</Text>
      <TextInput
        placeholder={placholder}
        placeholderTextColor={'gray'}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          color: 'black',
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          flex: 4,
        }}
        multiline={isMultipleLine}
        numberOfLines={isMultipleLine ? 4 : undefined}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}
