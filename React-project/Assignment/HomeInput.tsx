/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

function HomeInput({navigation}: any): React.JSX.Element {
  const [text, setText] = useState<any>(null);
  return (
    <View style={styles.container}>
      <View style={styles.centertConetnt}>
        <TextInput
          style={styles.inputStyle}
          keyboardType="numeric"
          placeholder="search image"
          placeholderTextColor={'black'}
          onChangeText={(newText: string) => setText(newText)}
          defaultValue={text}
        />
        <View style={styles.buttonStyle}>
          <Button
            onPress={() => {
              if (text) {
                navigation.navigate('Preview', {image: text});
              } else {
                Alert.alert('please Enter input');
              }
            }}
            title="Submit"
            color={'gray'}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
  centertConetnt: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  inputStyle: {
    borderColor: 'gray',
    borderWidth: 2,
    borderStyle: 'solid',
    width: '60%',
    padding: 10,
    color: 'black',
    borderRadius: 10,
  },
  buttonStyle: {
    height: 40,
    borderRadius: 30,
    marginTop: 10,
  },
});
export default HomeInput;
