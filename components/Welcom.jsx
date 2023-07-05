import {Text , View ,ActivityIndicator  , Image} from "react-native";
import money from '../assets/money.png'
const Welcome = ({navigation}) => {
    navigation.navigate('presign')
    return (
    <View style={{backgroundColor:'white' , flex : 1 , justifyContent:'center', flexDirection:'column' , alignItems:'center' , padding:50}}>
        <View style={{ flex : 1 , justifyContent:'center' , alignItems:'center' , gap:20}}>
            <Image
                source={money}
                style={{width:100 , height:100}}
            />
            <Text style={{color:'#7E82D9' , fontWeight:'600', fontSize:18 }}>Cash Community</Text>
        </View>
        <ActivityIndicator size='large' color='#7E82D9'/>
    </View>
    );
}

export default Welcome;