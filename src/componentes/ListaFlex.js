import React from 'react'
import {ScrollView, View, FlatList, Text} from 'react-native'

const alunos = [
    {id: 1, nome: 'Paulo', nota: 9.5},
    {id: 2, nome: 'Pedro', nota: 7.5},
    {id: 3, nome: 'Maria', nota: 8.6},
    {id: 4, nome: 'Marcia', nota: 8.5},
    {id: 5, nome: 'Fernando', nota: 9.5},
    {id: 6, nome: 'Diego', nota: 7.5},
    {id: 7, nome: 'Murilo', nota: 8.6},
    {id: 8, nome: 'Maciel', nota: 8.5},
    {id: 9, nome: 'Marco', nota: 8.5},
    {id: 10, nome: 'Maciel', nota: 8.5},
    {id: 11, nome: 'Maciel', nota: 8.5},
    {id: 12, nome: 'Maciel', nota: 8.5},
    {id: 13, nome: 'Maciel', nota: 8.5},
    {id: 14, nome: 'Maciel', nota: 8.5},
    {id: 15, nome: 'Maciel', nota: 8.5},
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 80,
    backgroundColor: '#781407',
    borderWidth: 0.5,
    borderColor: '#4f0900',

    //Flex
    alignItems: 'center',
    //alignItems: 'flex-end'//direita
    //alignItems: 'flex-start'//esquerda
    
    //justifyContent: 'center'
    //justifyContent: 'flex-end' //também tem space-around e space-between
    //justifyContent: 'flex-start'

    //mudando a direção
    flexDirection: 'row', //agora "nome" e "nota" estão na mesma linha
    justifyContent: 'space-between'
}

export const Aluno = props => 
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight:'bold'}}>Nota: {props.nota}</Text>

    </View>

export default props => {
    const renderItem = ({item}) => {
        return <Aluno {...item} />
    }

    return(
        <ScrollView>
            <FlatList data = {alunos} renderItem = {renderItem}
                keyExtractor= {(_, index) => index.toString()}/>
        </ScrollView>
    )
}