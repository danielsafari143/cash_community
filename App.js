import * as React from 'react';
import Welcome from './components/Welcom';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PreSign from './components/PreSign';
import Anim from './components/Anim';
import SignUp from './components/custome/SignUp';
import SignIn from './components/custome/SignIn';
import Forgot from './components/custome/Forgot';
import Account from './components/account/Account';
import Add from './components/account/Add';
import Ok from './components/account/Ok';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/home/Home';

export default function App() {
  const Stack = createNativeStackNavigator();
  return(
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="welcom" >
            <Stack.Screen name='welcome' component={Welcome} options={{
              headerShadowVisible:false , 
              headerBackVisible:false ,
              headerTitle:'',
              headerStyle:{backgroundColor : 'white'}
            }}/>
            <Stack.Screen name='anime' component={Anim} options={{headerShown:false}}/>
            <Stack.Screen name='presign' 
              component={PreSign} options={{
              headerShadowVisible:false , 
              headerBackVisible:false ,
              headerTitle:'',
              headerStyle:{backgroundColor : 'white'}
            }}/>
            <Stack.Screen name='SignUp' component={SignUp} 
              options={{
                title:'Sign Up',
                headerShadowVisible:false,
                headerTitleAlign:'center',
                headerTitleStyle:{fontWeight:'800'}
              }}
            />
            <Stack.Screen name='SignIn' component={SignIn} 
              options={{
                title:'Sign In',
                headerShadowVisible:false,
                headerTitleAlign:'center',
                headerTitleStyle:{fontWeight:'800'}
              }}
            />
            <Stack.Screen name='Forgot' component={Forgot} 
              options={{
                title:'Forgot password',
                headerShadowVisible:false,
                headerTitleAlign:'center',
                headerTitleStyle:{fontWeight:'800'}
              }}
            />
            <Stack.Screen name='Account' component={Account} 
              options={{
                title:'',
                headerShadowVisible:false,
              }}
            />
            <Stack.Screen name='Add' component={Add} 
              options={{
                title:'Add new account',
                headerShadowVisible:false,
                headerTitleAlign:'center',
                headerStyle:{ backgroundColor:'#7E82D9',},
                headerTitleStyle:{fontWeight:'500'},
                headerTitleStyle:{color:'white'},
                headerTintColor: 'white'
              }}
            />
            <Stack.Screen name='Ok' component={Ok} 
              options={{
                title:'',
                headerShadowVisible:false,
                headerTitleAlign:'center',
                headerTitleStyle:{fontWeight:'800'},
                headerBackVisible:false ,
              }}
            />
            <Stack.Screen name='Home' component={Home} 
              options={{
                title:'Home',
                headerShadowVisible:false,
                headerTitleAlign:'center',
                headerTitleStyle:{fontWeight:'800'},
              }}
            />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


