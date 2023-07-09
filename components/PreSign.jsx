import money from '../assets/money.png';
import {View , Image , Text , StyleSheet , BackHandler} from 'react-native';
import Button from './custome/Button';
import { useEffect } from 'react';

const PreSign = ({navigation}) => {
    
    useEffect(() => {
        navigation.addListener('beforeRemove' , (e) => {
            BackHandler.exitApp();
            e.preventDefault();
        })
    });

    return (
        <View style={{flex:1 , flexDirection:'column' , alignItems:'center' , justifyContent:'center' , padding:40 , gap:20 , backgroundColor:'white'}}>
            <View style={{flex:1 , flexDirection:'column' , alignItems:'center' , justifyContent:'center'}}>
                <Image
                    style={{width:200 , height : 200}}
                    source= {money}
                />
                <Text style={{fontSize : 30 , textAlign:'center' , marginTop : 20 , marginBottom:10 , fontWeight:'900' }}>Gain total control of your money</Text>
                <Text style={{fontSize : 14 , textAlign:'center' , color:'#91919F'}}>Become your own money manager and make every cent count</Text>
            </View>
            <View style={{display:'flex' , flexDirection:'column' , gap:15 }}>
                <Button
                    title='Sign Up'
                    style={style}
                    onPress={() => navigation.navigate('SignUp')}
                />
                <Button
                    title='Login'
                    style={secondStyle}
                    onPress={() => navigation.navigate('SignIn')}
                />
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    button :{
        alignItems : 'center',
        width:300,
        borderRadius:5,
        backgroundColor:'#7E82D9',
        padding:13
    },
    text : {
        color:'white',
        textAlign : 'center',
        fontWeight:'bold'
    }
}); 

const secondStyle = StyleSheet.create({
    button :{
        alignItems : 'center',
        width:300,
        borderRadius:5,
        backgroundColor:'#EEE5FF',
        padding:13
    },
    text : {
        color:'#7E82D9',
        textAlign : 'center',
        fontWeight:'bold'
    }
})

export default PreSign;