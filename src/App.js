import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Mult'

/* usando classe
export default class App extends Component{

  //função para renderizar o app
  render(){
    return (
        <View style={styles.container}>
            <Text style={styles.f40}>Meu App</Text>
        </View>
    )
  }
}
 */

 //usando function
export default function(){
  return(
    <View style = {styles.container}>
            <Text style = {styles.f40}>Meu App</Text>
            <Simples texto = 'Flexível'/>
            <ParImpar numero = {31}/>
            <Inverter texto = 'ana' />
            <MegaSena numeros = {6}/>

        </View>
  )
}

const styles = StyleSheet.create({
  //estilo padrão
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  //estilo de fonte tamanho 20
  /* f40: {
    fontSize: 40,
  } */
})