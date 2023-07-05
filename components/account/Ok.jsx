import { Image , View  , Text , Animated} from "react-native";
import { useRef } from "react";
import image from '../../assets/Vector.png';

const Ok = ({navigation}) => {
    const animate = useRef(new Animated.Value(0)).current;

    const onStart = () => {
        Animated.timing(animate , {
            toValue:1,
            duration:3000,
            useNativeDriver:true
        }).start(() => {
            navigation.navigate('Home');
        })
    }

    return (
        <Animated.View style={{flex:1 , justifyContent:'center' , alignItems:'center', backgroundColor:'white' , gap:20 , opacity:animate}}>
            <Image style={{width:50, height:50}} source={image}/>
            <Text style={{color:"#212325" , fontSize:16}}>You are set!</Text>
            {onStart()}
        </Animated.View>
    );
};

export default Ok;