import { useDispatch } from "react-redux";
import { View , Text , StyleSheet , TextInput , Linking} from "react-native";
import { useState } from "react";
import { CheckBox } from "react-native-btr";
import Button from "./Button";
import google from '../../assets/flat-color-icons_google.png';
import { signup } from "../../reduxSlice/signupSlice";

const SignUp = ({navigation}) => {
    const [name , setName] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();

    const dispatch = useDispatch();

    return (
    <View style = {style.bod}>
        <View style={style.view}>
            <TextInput textContentType="familyName" onChangeText={(value) => setName(value)}  style = {style.inpute} placeholder="Name"/>
            <TextInput textContentType="emailAdress" onChangeText={(value) => setEmail(value)}  style = {style.inpute} placeholder="Email"/>
            <TextInput textContentType="password" onChangeText={(value) => setPassword(value)}  style = {style.inpute} placeholder="Password"/>
        </View>
        <View style={style.check}>
            <View>
                <View style={style.secondView} > 
                    <CheckBox
                        checked={true}
                        color="white"
                    /> 
                    <Text>By signing up, you agree to the <Text style={{color: '#7E82D9'}} onPress={() => Linking.openURL('http://google.com')}> Terms of Service and Privacy Policy</Text></Text>
                </View> 
                
            </View>
            <View style={{display:'flex' , flexDirection:'column' , gap:10 , marginTop:10 , justifyContent:'center' , alignItems:'center'}}>
                <Button
                    title='Sign Up'
                    style={styleb}
                    onPress={() => {
                        if(name !== undefined && password !== undefined && email !== undefined){
                            dispatch(signup({name , password , email}))
                            navigation.navigate('SignIn')
                        }
                    }}
                />
                 <Text style={{fontWeight:'900' , color:'#91919F'}}>Or with</Text>
                 <Button
                    title='Sign up with google'
                    style={secondStyle}
                    onPress={() => navigation.navigate('SignUp')}
                    image={google}
                />
                <Text style={{fontWeight:'900' , color:'#91919F' , marginTop : 15}}>Already have an account? <Text style={{color: '#7E82D9'}} onPress={() => navigation.navigate('SignIn')}> Login</Text></Text>
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
        gap:10,
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

const secondStyle = StyleSheet.create({
    button :{
        alignItems : 'center',
        width:300,
        borderRadius:10,
        backgroundColor:'#EEE5FF',
        padding:13,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        gap:10,
        alignItems:'center',
    },
    text : {
        color:'#7E82D9',
        textAlign : 'center',
        fontWeight:'bold'
    }
})

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

export default SignUp;