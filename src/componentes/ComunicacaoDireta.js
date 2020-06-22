import React from 'react'
import {View, Text} from 'react-native'

const fonte = {style: {fontSize: 30}}

export const Filho = props => 
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props => 
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {props.children}
    </View>

export const Avo = props =>
    <View>
        <Text {...fonte}>Avo: {props.nome} {props.sobrenome}</Text>
        <Pai nome = 'João' sobrenome = {props.sobrenome}>
            <Filho nome = 'Pedro'/>
            <Filho nome = 'Paulo'/>
            <Filho nome = 'Pietro'/>
        </Pai>
        <Pai {...props} nome = 'Fernando'>
            <Filho nome = 'Roberto'/>
            <Filho nome = 'Renata'/>
        </Pai>
    </View>