import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Pendientes from './postulaciones/Pendientes';
import Aceptadas from './postulaciones/Aceptadas';
import Finalizados from './postulaciones/Finalizados';

export default function Postulaciones() {
  const [activeOption, setActiveOption] = useState('pendientes');

   const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerFilter}>
      <TouchableOpacity
          style={[
            styles.containerTextFilter,
            activeOption === 'pendientes' && styles.activeOptionBtnFilter, // Estilo condicional para el botón activo
          ]}
          onPress={() => handleOptionClick('pendientes')}
        >
          <Text style={[styles.textFilter, activeOption === 'pendientes' && styles.activeOptionTxtBtnFilter]}>Pendientes</Text>
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
      {activeOption === 'pendientes' && <Pendientes />}
      {activeOption === 'aceptados' && <Aceptadas />}
      {activeOption === 'finalizados' && <Finalizados/>}

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