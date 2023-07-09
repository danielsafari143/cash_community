import { View , Text , StyleSheet } from "react-native";
import { useState } from "react";
import Button from "../custome/Button";
import { useSelector } from "react-redux";

const Account = ({navigation}) => {
    const identity = useSelector(state => state.accountRaducer);
    const data = identity.user.info[0];
    
    return (
    <View style = {style.bod}>
        <Text style={{fontSize : 40 , textAlign:'left' ,  fontWeight:'700' , alignSelf:'flex-start' , paddingLeft:20 }} >Let’s setup your account!</Text>
        <Text style={{fontSize : 14 , textAlign:'left' , marginBottom:10 , fontWeight:'500' , alignSelf:'flex-start' , paddingLeft:20 , color:'#292B2D'}} >{data.name} your account can be your bank, credit card or 
your wallet.</Text>
        <View style={style.check}>
            <View style={{display:'flex' , flexDirection:'column' , gap:15 , marginTop:10 , justifyContent:'center' , alignItems:'center'}}>
                <Button
                    title="Let's go"
                    style={styleb}
                    onPress={() =>  navigation.navigate('Add')}
                />
                    </View>
        </View>
    </View>)
};


const style = StyleSheet.create({
    bod : {
        backgroundColor:'white',
        flex:1,
        alignItems:'center',
        padding:10,
        paddingTop:30
    },

    secondView : {
        padding:10,
        width:300,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:5,
    },

    view :{
        display:"flex",
        flexDirection:'column',
        alignContent:'center',
        justifyContent:'center',
        gap:15
    },

    inpute : {
        borderStyle:'solid',
        borderColor:'#F1F1FA',
        borderWidth:1,
        color:'#91919F',
        padding:10,
        borderRadius:5,
        width:300
    },
    check :{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
        width:300,
        gap:20,
    }
});


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

export default Account;