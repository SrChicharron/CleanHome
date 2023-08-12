import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import PublicacionesActivas from './home-publicaciones/PublicacionesActivas';
import PublicacionesAceptadas from './home-publicaciones/PublicacionesAceptadas';
import PublicacionesFinalizadas from './home-publicaciones/PublicacionesFinalizadas';

import { getPublicaciones } from '../../api/cliente/PublicacionesApi';

export default function Home() {
  const [activeOption, setActiveOption] = useState('activo');
  const [publicaciones, setPublicaciones] = useState([]);
  const [publicacionesFiltradas, setPublicacionesFiltradas] = useState([]);

  useEffect(() => {
    loadPublicaciones();
  }, []);

  useEffect(() => {
    filtrarPublicaciones(activeOption);
  }, [publicaciones, activeOption]); // Agregamos "publicaciones" como dependencia

  const loadPublicaciones = async () => {
    const responseData = await getPublicaciones();
    console.log("responseData = " + responseData);
    setPublicaciones(responseData);
    
  }
  
  const filtrarPublicaciones = (filtro) => {
    const publicacionesFiltradas = publicaciones.filter(publicacion => publicacion.estatus === filtro);
    setPublicacionesFiltradas(publicacionesFiltradas);
    console.log("Publicaciones filtradas => " + publicacionesFiltradas)
  }

  const handleFilterClick = (filtro) => {
    setActiveOption(filtro);
    filtrarPublicaciones(filtro);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerFilter}>
      <TouchableOpacity
          style={[
            styles.containerTextFilter,
            activeOption === 'activo' && styles.activeOptionBtnFilter, // Estilo condicional para el botón activo
          ]}
          onPress={() => handleFilterClick('activo')}
        >
          <Text style={[styles.textFilter, activeOption === 'activo' && styles.activeOptionTxtBtnFilter]}>Activos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.containerTextFilter,
            activeOption === 'aceptados' && styles.activeOptionBtnFilter, // Estilo condicional para el botón activo
          ]}
          onPress={() => handleFilterClick('aceptados')}
        >
          <Text style={[styles.textFilter, activeOption === 'aceptados' && styles.activeOptionTxtBtnFilter]}>Aceptados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.containerTextFilter,
            activeOption === 'finalizados' && styles.activeOptionBtnFilter, // Estilo condicional para el botón activo
          ]}
          onPress={() => handleFilterClick('finalizados')}
        >
          <Text style={[styles.textFilter, activeOption === 'finalizados' && styles.activeOptionTxtBtnFilter]}>Finalizados</Text>
        </TouchableOpacity>
      </View>

      {activeOption === 'activo' && <PublicacionesActivas publicaciones={ publicacionesFiltradas }/>}
      {activeOption === 'aceptados' && <PublicacionesAceptadas publicaciones={ publicacionesFiltradas }/>}
      {activeOption === 'finalizados' && <PublicacionesFinalizadas publicaciones={ publicacionesFiltradas } setActiveOption={setActiveOption}/>}

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