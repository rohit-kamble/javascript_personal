/* eslint-disable prettier/prettier */
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
function Login({navigation}: any): React.JSX.Element {
  const userName = 'Rohit';
  const password = 'abc';
  const [user, setUserName] = useState('');
  const [pass, setPassword] = useState('');

  const submit = () => {
    if (userName === user && pass === password) {
      Alert.alert('Login Suceesfully');
      navigation.navigate('Home');
    } else {
      Alert.alert('try again');
    }
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <View
      style={{
        backgroundColor: 'black',
        height: '100%',
        alignItems: 'center',
        flex: 1,
        // padding: '20px',
        justifyContent: 'center',
      }}>
      <View style={{alignContent: 'center', width: 200}}>
        <Text>user</Text>
        <TextInput
          keyboardType="default"
          onChangeText={txt => setUserName(txt)}
          placeholder="userName"
          style={{
            width: 100,
            borderRadius: 10,
            borderStyle: 'solid',
            borderColor: 'white',
          }}
        />
        <Text>Password</Text>
        <TextInput
          keyboardType="visible-password"
          onChangeText={txt => setPassword(txt)}
          placeholder="password"
        />
        <TouchableOpacity onPress={submit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Login;
