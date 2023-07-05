import React from "react";
import { Text , Pressable , Image} from "react-native";

export default function (props) {
    const {onPress , title = 'Button' , style , image} = props;
    return (
    <Pressable style={style.button} onPress={onPress}>
        {image ?  <Image style={{width:25 , height:25 }} source={image}/> : ''}
        <Text style={style.text}>{title}</Text>
    </Pressable>)
};