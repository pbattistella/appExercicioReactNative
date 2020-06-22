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
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import {Avo} from './componentes/ComunicacaoDireta'
import ListaFlex from './componentes/ListaFlex'

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
            <Drawer.Screen name = 'Lista Alunos'>
                {props => <ListaFlex />}
            </Drawer.Screen>
            <Drawer.Screen name = 'Comunicação classes'>
                {props => <Avo nome ='Alceu' sobrenome = 'Battistella'/> }  
            </Drawer.Screen>
            <Drawer.Screen name = 'Evento'>
                {props => <Evento/>}
            </Drawer.Screen>
            <Drawer.Screen name = 'Validar Props'>
                {props => <ValidarProps ano={18} label = 'Novo ano: '/>}
            </Drawer.Screen>
            <Drawer.Screen name = 'Plataformas'>
                    {props => <Plataformas/>}       
            </Drawer.Screen>
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
