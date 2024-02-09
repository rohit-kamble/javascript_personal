import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { colors, defaultStyle, inputStyling } from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import Header from "../components/Header";

export default function UpdateProfile(){
    const [avatar, setAvatar] = useState('');
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [pincode, setPincode] = useState('');
    const loading = true;
    const submitHandler = () => {
        alert('login')
        navigation.navigate('verify')
    }
    const disabledBtn = !name || !email || !address || !city || !country || !pincode;
    
    return (
        <View style={defaultStyle}>
        <Header isBack={true}/>
        <View style={{marginBottom: 20}}>
            <Text style={styles.heading}>Edit Profile</Text>
        </View>
        <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{
                padding: 20,
                elevation: 10,
                borderRadius: 10,
                backgroundColor: colors.colors3,
            }}
        >
        <View style={styles.container}>
            {/* <Avatar.Image 
                style={{ 
                    alignSelf: 'center',
                    backgroundColor: colors.color1}}
                size={80}
                source={{
                    uri: avatar? avatar : defaultimg
                }}
            />
            <TouchableOpacity onPress={()=> navigation.navigate('camera')}>
                <Button
                    textColor={colors.color2}
                >
                    Change Photo
                </Button>
            </TouchableOpacity> */}
            <TextInput 
                mode="outlined" 
                activeOutlineColor={colors.color1} 
                placeholder="Name"
                value={name}
                onChangeText={setname}
                style={inputStyling}
            />
            <TextInput 
                mode="outlined" 
                activeOutlineColor={colors.color1} 
                placeholder="email"
                value={email}
                onChangeText={setEmail}
                style={inputStyling}
            />
             <TextInput 
                mode="outlined" 
                activeOutlineColor={colors.color1} 
                placeholder="password"
                value={password}
                onChangeText={setPassWord}
                style={inputStyling}
            />
            <TextInput 
                mode="outlined" 
                activeOutlineColor={colors.color1} 
                placeholder="City"
                value={city}
                onChangeText={setCity}
                style={inputStyling}
            />
            <TextInput 
                mode="outlined" 
                activeOutlineColor={colors.color1} 
                placeholder="Country"
                value={country}
                onChangeText={setCountry}
                style={inputStyling}
            />
            <TextInput 
                mode="outlined" 
                activeOutlineColor={colors.color1} 
                placeholder="PinCode"
                value={pincode}
                onChangeText={setPincode}
                style={inputStyling}
            />
            <Button 
                textColor={colors.color2}
                disabled={disabledBtn}
                style={styles.btn}
                onPress={submitHandler}
                loading={loading}
            >
                Update
            </Button>       
        </View>
        </ScrollView>
        
    </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: "500",
        textAlign: 'center',
        backgroundColor: colors.color1,
        color: colors.color2,
        padding:5,
        borderRadius: 5,
        marginTop: 80,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.colors3,
        borderRadius:10,
        justifyContent: 'center'
    },
    forget: {
        color: colors.color2,
        marginVertical: 10,
        marginHorizontal: 20,
        alignItems: 'flex-end',
        fontWeight: "100",
        textAlign: "right",
    },
    btn: {
        backgroundColor: colors.color1,
        margin: 20,
        padding: 6,
        color: colors.color2
    },
    or: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: "100",
        color: colors.color2
    },
    link: {
        alignSelf: "center",
        color: colors.color2,
        fontSize: 18,
        textTransform: 'uppercase',
        marginHorizontal: 20,
        marginVertical: 10
    }
})