import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import PublicacionesActivas from './home-publicaciones/PublicacionesActivas';
import PublicacionesAceptadas from './home-publicaciones/PublicacionesAceptadas';
import PublicacionesFinalizadas from './home-publicaciones/PublicacionesFinalizadas';

export default function Home() {
  const [activeOption, setActiveOption] = useState('activos');

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerFilter}>
      <TouchableOpacity
          style={[
            styles.containerTextFilter,
            activeOption === 'activos' && styles.activeOptionBtnFilter, // Estilo condicional para el botón activo
          ]}
          onPress={() => handleOptionClick('activos')}
        >
          <Text style={[styles.textFilter, activeOption === 'activos' && styles.activeOptionTxtBtnFilter]}>Activos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.containerTextFilter,
            activeOption === 'aceptados' && styles.activeOptionBtnFilter, // Estilo condicional para el botón activo
          ]}
          onPress={() => handleOptionClick('aceptados')}
        >
          <Text style={[styles.textFilter, activeOption === 'aceptados' && styles.activeOptionTxtBtnFilter]}>Aceptados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.containerTextFilter,
            activeOption === 'finalizados' && styles.activeOptionBtnFilter, // Estilo condicional para el botón activo
          ]}
          onPress={() => handleOptionClick('finalizados')}
        >
          <Text style={[styles.textFilter, activeOption === 'finalizados' && styles.activeOptionTxtBtnFilter]}>Finalizados</Text>
        </TouchableOpacity>
      </View>
      {activeOption === 'activos' && <PublicacionesActivas />}
      {activeOption === 'aceptados' && <PublicacionesAceptadas />}
      {activeOption === 'finalizados' && <PublicacionesFinalizadas/>}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  containerFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingBottom: 8,
    width: '100%'
  },
  containerTextFilter: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    width: '30%',
    textAlign: 'center',
    alignItems: 'center'
  },
  activeOptionBtnFilter: {
    color: '#E6E6E6',
  },
  activeOptionTxtBtnFilter: {
    color: '#075493',
    fontWeight: 'bold',
  },
  
})