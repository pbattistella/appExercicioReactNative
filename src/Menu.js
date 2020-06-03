import React from 'react'
import {createDrawerNavigator} from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Mult'

export default createDrawerNavigator({
    /*MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: {title: 'Mega Sena'}
    } ,
    Inverter: {
        screen: () => <Inverter texto = 'Paulo' />,
        navigationOptions: {title: 'Inverter Meu Texto'}
    },
    ParImpar: {
        screen: () => <ParImpar numero = {30} />,
        navigationOptions: {title: 'Par & Impar'}
    },*/
    Simples: {
        screen: () => <Simples texto = 'Flexível'/>,
        navigationOptions : {title : 'Simples'}
    } 
}, {drawerWidth: 300})