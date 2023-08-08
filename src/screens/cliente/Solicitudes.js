import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React,{useState} from 'react'
import SinSolicitudes from '../../components/SinSolicitudes'
import SolicitudesCard from '../../components/SolicitudesCard'

export default function Solicitudes() {
  const [solicitudes,setSolicitudes]=useState(null)
  return (
    <View style={styles.container}>
      {
        !solicitudes ? (
          <ScrollView nestedScrollEnabled={false}>
            <SolicitudesCard/>
            <SolicitudesCard/>
          </ScrollView>
          
        ) : (
          <SinSolicitudes 
          mensajeTitulo="No tienes solicitudes" 
          mensajeDescripcion="Asegurate de tener publicaciones"
          />
        )
      }
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    flex: 1,
  }
})
