import React from 'react'
import {View, Text}  from  'react-native'
import Padrao from '../estilo/Padrao'

export default props => 
    <View>
        {/* {
            props.numero % 2  == 0
        ? <Text style = {Padrao.ex}>O número {props.numero} é par</Text>
        : <Text style = {Padrao.ex}>O número {props.numero} é impar</Text>
        } */}

        {//criando a função parOuImpar
        }
        {parOuImpar(props.numero)}
    </View>

function parOuImpar(num){
    /* if (num % 2 == 0){
        return <Text style = {Padrao.ex}>O número {props.numero} é par</Text>
    } else {
        return <Text style = {Padrao.ex}>O número {props.numero} é impar</Text>
    } */

    const v = num % 2 == 0 ? 'par' : 'ímpar'

    return  <Text style = {Padrao.ex}>O número {num} é {v}</Text>
        
}
