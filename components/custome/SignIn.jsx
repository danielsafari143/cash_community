import { View , Text , StyleSheet , TextInput} from "react-native";
import { useState , useEffect } from "react";
import Button from "./Button";
import { useSelector} from "react-redux";

const SignIn = ({navigation}) => {
    const identity = useSelector(state => state.accountRaducer);
    const data =identity;
    const check = data.sign

    const [name , setName ] = useState();
    const [password , setPassword ] = useState();
   
    useEffect(() => {
       if(check){
            navigation.addListener('beforeRemove' , (e) => {
                e.preventDefault();
            });
       }
    });

    return (
    <View style = {style.bod}>
        <View style={style.view}>
                <TextInput 
                    textContentType="emailAdress" 
                    value={data.account.name.length > 1 ? data.account.name : name}
                    style = {style.inpute} placeholder="Email"
                    onChangeText={(text) => setName(text)}
                />

                <TextInput textContentType="password" value={data.account.password.length > 1 ? data.account.password : password} 
                style = {style.inpute} placeholder="Password"
                onChangeText={(text) => setPassword(text)}
            />
        </View>
        <View style={style.check}>
            <View style={{display:'flex' , flexDirection:'column' , gap:15 , marginTop:10 , justifyContent:'center' , alignItems:'center'}}>
                <Button
                    title='Login'
                    style={styleb}
                    onPress={() => navigation.navigate('Account')}
                />
                 <Text style={{color: '#7E82D9'}} onPress={() => navigation.navigate('Forgot')}> Forgot your password?</Text>
                <Text style={{fontWeight:'900' , color:'#91919F' , marginTop : 15}}>Don’t have an account yet ? <Text style={{color: '#7E82D9'}} onPress={() => navigation.navigate('SignUp')}> Sign UP</Text></Text>
            </View>
        </View>
    </View>)
};


const style = StyleSheet.create({
    bod : {
        backgroundColor:'white',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        gap:20,
        padding:10,
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
        padding:13
    },
    text : {
        color:'white',
        textAlign : 'center',
        fontWeight:'bold'
    }
}); 

export default SignIn;