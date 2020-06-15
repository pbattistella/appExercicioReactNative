import React from 'react'
import {View, Text, Button} from 'react-native'
import {NavigationContainer, DrawerActions} from '@react-navigation/native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
    } from '@react-navigation/drawer'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Mult'
import Contador from './componentes/Contatdor'

function CustomDrawerContent(props){
    return(
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
            <DrawerItem
                label = 'Fechar Menu'
                onPress = {() => props.navigation.dispatch(DrawerActions.closeDrawer())}
            />
        </DrawerContentScrollView>
    )
}

const Drawer = createDrawerNavigator()

function MeuDrawer() {
    return (
        <Drawer.Navigator drawerContent = {props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name = 'Contador'>
                    {props => <Contador />}
            </Drawer.Screen>
            <Drawer.Screen name = 'Mega Semana'>
                {props => <MegaSena numeros = {6} />}
            </Drawer.Screen>
            <Drawer.Screen name = 'Inveter Nome'>
                {props => <Inverter texto = 'Paulo' />}
            </Drawer.Screen>
            <Drawer.Screen name = 'ParOuImpar'>
                {props => <ParImpar numeros = {30} />}
            </Drawer.Screen>
            <Drawer.Screen name = 'Simples'>     
                {props => <Simples texto = 'Flexível'/>}
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}


export default function Menu(){
    return (
        <NavigationContainer>
            <MeuDrawer />
        </NavigationContainer>
    )
}
