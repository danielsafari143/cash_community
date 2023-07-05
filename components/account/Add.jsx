import { View , Text , StyleSheet, TextInput} from "react-native";
import { useState } from "react";
import Button from "../custome/Button";
import { useDispatch } from "react-redux";
import { setAccount } from "../../reduxSlice/signupSlice";

const Add = ({navigation}) => {

    const [name , setName] = useState();
    const [types , setTypes] = useState();
    const dispatch = useDispatch();
    return(
        <View style={style.bod}>
                <Text style={{paddingLeft:20 , paddingBottom:10 , color:'#FCFCFC' , fontWeight:'100' , fontSize:20 }}>Balance</Text>
                <Text style={{paddingLeft:20, paddingBottom:10  , fontSize:50 , color:'white' , fontWeight:'900'}}>$0.00</Text>
            <View style={style.bode}>
                <View style={style.vi}>
                    <TextInput style={style.inpute} textContentType="name" onChangeText={(text) => setName(text)} placeholder="Name" />
                    <TextInput style={style.inpute} textContentType="name" onChangeText={(text) => setTypes(text)} placeholder="Account Type" />
                </View>
                <Button
                    title='Continue'
                    style={styleb}
                    onPress={() => {
                        dispatch(setAccount({name , types}));
                        navigation.navigate('Ok');
                    }}
                />
            </View>
        </View>
    );
};

const styleb = StyleSheet.create({
    button :{
        alignItems : 'center',
        width:300,
        borderRadius:10,
        backgroundColor:'#7E82D9',
        padding:15
    },
    text : {
        color:'white',
        textAlign : 'center',
        fontWeight:'bold'
    }
});

const style = StyleSheet.create({
    bod:{
        flex:1,
        backgroundColor:'#7E82D9',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'flex-end',
        gap:10
    },
    bode:{
        width:'100%',
        padding:20,
        backgroundColor:'white',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        gap:40,
        paddingTop:50,
        paddingBottom:50
    },
    inpute:{
        borderStyle:'solid',
        borderColor:'#F1F1FA',
        borderWidth:1,
        color:'#91919F',
        padding:10,
        borderRadius:10,
        width:300
        
    },
    vi:{
        gap:20
    }
})
export default Add;