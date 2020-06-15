import React, { Component } from 'react'
import {View, Text, TextInput} from 'react-native'
import Padrao from '../estilo/Padrao'
//Exemplo de componente controlado
//esse é o padrão para maioria dos problemas
//A chamada da função muda o estado

//O componente não controlado é qdo iniciamos como nulo. texto: null
//Não vincula o estado com o que está sendo exibido pelo componente
export default class Evento extends Component{
    
    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({texto})
    }

    render(){
        return(
            <View>
                <Text style = {Padrao.fonte40}>{this.state.texto}</Text>
                <TextInput value = {this.state.texto} 
                    style = {Padrao.input}
                    onChangeText = {this.alterarTexto}/>

            </View>
        )
    }

}