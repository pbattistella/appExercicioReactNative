import React from 'react'
import {View, Text} from 'react-native'
import Padrao from '../estilo/Padrao'

/* export default function (props){
    return <Text>{props.texto}</Text>
} */

//usando arrow function
//props pode estar entre parânteses
// só que teria que ter o return
/* Desse jeito aqui em baixo
export default (props) => {
    return <Text>{props.texto}</Text>
}
*/

//usando arrow function resumidamente
//export default props => <Text> {props.texto}</Text> 

/* encapsulando dois textos em uma View. Sem ela dá erro porque tem dois elementos iguais
export default props => 
    <View>
        <Text> Texto 1: {props.texto}</Text> 
        <Text> Texto 2: {props.texto}</Text> 
    </View>

 */

 //agora usando array
 /* export default props => [
     <Text key={1}>Texto 1: {props.texto} </Text>,
     <Text key={2}>Texto 2: {props.texto} </Text>,
     <Text key={3}>Texto 3: {props.texto} </Text>
 ]  */

 export default props => [
    <Text style={[Padrao.ex]} key={1}> Meu texto: {props.texto}</Text>
 ]