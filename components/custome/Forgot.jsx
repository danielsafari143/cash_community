import { View , Text , StyleSheet , TextInput} from "react-native";
import { useState } from "react";
import Button from "./Button";

const Forgot = ({navigation}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
    <View style = {style.bod}>
        <Text style={{fontSize : 20 , textAlign:'left' , marginBottom:10 , fontWeight:'700' , alignSelf:'flex-start' , padding:20 }} >Don’t worry. Enter your {"\n"} email and we’ll send you a link  {"\n"} to reset your password.</Text>
        <View style={style.view}>
            <TextInput textContentType="emailAddress" style = {style.inpute} placeholder="Email address"/>
        </View>
        <View style={style.check}>
            <View style={{display:'flex' , flexDirection:'column' , gap:15 , marginTop:10 , justifyContent:'center' , alignItems:'center'}}>
                <Button
                    title='Continue'
                    style={styleb}
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
        gap:20,
        padding:10,
        paddingTop:50
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
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
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

export default Forgot;