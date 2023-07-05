import { Text , Button , View } from "react-native";

const Money = ({navigation}) => {
    return(
        <View>
            <Text style={{padding:20 , textAlign:'center'}}>Second For Money</Text>
            <Button 
                title="Details"
                onPress={() => navigation.navigate('welcome' , {
                    name : "Safari",
                    id :"1234"
                })}
            />
        </View>
    );
};

export default Money;