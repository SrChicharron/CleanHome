import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export default function SinSolicitudes(props) {
    const {mensajeTitulo, mensajeDescripcion}= props
  return (
    <View style={styles.container}>
        <MaterialIcons name="cleaning-services" size={54} color="#075493" />
      <Text style={styles.textTitle}>{mensajeTitulo}</Text>
      <Text style={styles.textDescription}>{mensajeDescripcion}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:300,
        height:180,
        backgroundColor:'#FFF',
        margin:10,
        borderRadius: 10,
        elevation: 5, // Esto agregará la sombra en Android
        shadowColor: '#000', // Esto agregará la sombra en iOS
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent:"center",
        alignItems:'center'
    },
    textTitle:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center'
    },
    textDescription:{
        fontSize:16,
        color:'gray',
        textAlign:'center'
    }
})