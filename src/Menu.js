import React from 'react'
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Mult'
import Padrao from './estilo/Padrao'

function HomeScreen(){
    return(
        <View style ={Padrao.container}>
            <Text style ={Padrao.ex}>Home</Text>
        </View>
    )
}

const Stack = createStackNavigator();

function Menu(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Home" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Menu
