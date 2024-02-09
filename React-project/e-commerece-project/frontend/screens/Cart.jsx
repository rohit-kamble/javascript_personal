import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import {colors, defaultStyle} from '../styles/styles'
import Header from "../components/Header"
import { Button } from "react-native-paper"
import Cartitem from '../components/CartItem'
import { useNavigation } from "@react-navigation/native"

export const cartItems= [
    {
        name: 'Macbook',
        image: 'https://lh3.googleusercontent.com/spp/AE_ITi1v31aCuN7M8M2zkfQumA8pcgtYmrmd5TRHzGZsZeOKC45b7psuiOuo5Y7bXeKYCCZDf-wKS6mi3PF9DXTD00obWnhErA99SvjRR-zujyxBr3sH37GHKA2_ofIwsSE3WDa1AZYWrj8CMKDbwVjDV0AzTrI2hTB_e_01CgQEDwrNiuHA1-xLBbTGX2avaIkj7JjzwtSit6I=s512-pd-pc0x00ffffff',
        product: 'abc',
        stock: 3,
        price: 3999,
        quantity: 2,
        id: 'p1'
    },
    {
        name: 'Macbook mmini',
        image: 'https://lh3.googleusercontent.com/spp/AE_ITi1v31aCuN7M8M2zkfQumA8pcgtYmrmd5TRHzGZsZeOKC45b7psuiOuo5Y7bXeKYCCZDf-wKS6mi3PF9DXTD00obWnhErA99SvjRR-zujyxBr3sH37GHKA2_ofIwsSE3WDa1AZYWrj8CMKDbwVjDV0AzTrI2hTB_e_01CgQEDwrNiuHA1-xLBbTGX2avaIkj7JjzwtSit6I=s512-pd-pc0x00ffffff',
        product: 'dd',
        stock: 5,
        price: 5999,
        quantity: 3,
        id: 'p2'
    }
]

export default function Cart(){
    const navigate= useNavigation() 
    const incrementtHandler = (id, quantity, stock) => {
        console.log(id, quantity, stock)
    }
    
    const decrementHandler = (id, quantity) => {

    }

    
    return(
        <View style={{
            ...defaultStyle,
            padding: 0,
        }}>
            {/* Heading */}
            <Header isBack={true} emptyCart={true}/>
            <Heading/>
            <View 
                style={{
                    paddingVertical: 20,
                    flex: 1,
                    // flexDirection: 'column'
                    // backgroundColor: 'red'
                }}
            >
                <ScrollView>
                    {cartItems.map((item, idx)=>(<Cartitem item={{...item, index: idx, incrementtHandler: incrementtHandler, decrementHandler: decrementHandler}} key={idx}/>))}
                </ScrollView>
            </View>
            <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 35,
                    }}
                >
                    <Text>5 ITEMs</Text>
                    <Text>$5</Text>
                </View>
                <TouchableOpacity onPress={cartItems.length > 0 ? ()=> navigate.navigate('Confirmorder') : navigate.goBack()}>
                    <Button 
                        style={{
                            backgroundColor: colors.colors3,
                            borderRadius: 100,
                            padding: 5,
                            margin: 30
                        }}
                        icon={'cart'}
                        textColor={colors.color2}
                    >
                        Checkout
                    </Button>
                </TouchableOpacity>
        </View>
    )
}

const Heading = () => {
    return (
        <View 
            style={{
                paddingTop: 70,
                marginLeft: 35
            }}>
            <Text style={{fontSize: 25}}>Shopping</Text>
            <Text style={{fontSize: 25, fontWeight: 900}}>Cart</Text>
        </View>
    )
}