import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, defaultStyle } from '../styles/styles';
import { Avatar, Button } from 'react-native-paper';
import { useState } from 'react';
import ButtonBox from '../components/ButtonBox';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
const user = {
  name: 'rohit Kamble',
  email: 'abc@gmail.com',
};
export default function Profile({ navigation }) {
  const [avatar, setAvatar] = useState(null);
  const loading = false;
  const navigateHandlere = (text) => {
    switch (text) {
      case 'Admin':
        navigation.navigate('adminpannel');
        break;
      case 'Order':
        navigation.navigate('orders');
        break;
      case 'Profile':
        navigation.navigate('updateprofile');
        break;
      case 'Password':
        navigation.navigate('changepassword');
        break;
      case 'SignOut':
        navigation.navigate('login');
        break;
      default:
        break;
    }
  };
  return (
    <>
      <View style={defaultStyle}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.heading}>Sign Up</Text>
        </View>
        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={styles.container}>
              <Avatar.Image
                size={100}
                source={{
                  uri: avatar,
                }}
                style={{
                  backgroundColor: colors.colors3,
                }}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('camera', {
                    updateProfile: true,
                  })
                }
              >
                <Button textColor={colors.color1}>Change Photo</Button>
              </TouchableOpacity>

              <Text style={styles.name}>{user?.name}</Text>
              <Text style={[styles.name, { color: colors.color2 }]}>{user?.email}</Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  justifyContent: 'space-between',
                }}
              >
                <ButtonBox
                  text={'Order'}
                  icon={'format-list-bulleted-square'}
                  handler={navigateHandlere}
                />
                <ButtonBox
                  text={'Admin'}
                  icon={'view-dashboard'}
                  reverse={true}
                  handler={navigateHandlere}
                />
                <ButtonBox text={'Profile'} icon={'pencil'} handler={navigateHandlere} />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  justifyContent: 'space-evenly',
                }}
              >
                <ButtonBox text={'Password'} icon={'pencil'} handler={navigateHandlere} />
                <ButtonBox text={'Profile'} icon={'exit-to-app'} handler={navigateHandlere} />
              </View>
            </View>
          </>
        )}
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.colors3,
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: colors.color1,
    color: colors.color2,
    padding: 5,
    borderRadius: 5,
  },
  name: {
    fontWeight: '400',
    color: colors.color2,
    marginTop: 10,
    color: colors.color2,
  },
});
