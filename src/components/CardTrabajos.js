import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import HouseAspiradora from '../assets/images/HouseAspiradora.png';

export default function CardTrabajos(props) {
  const { direccion, propietario, descripcion, sueldo, fechaPublicacion, onLongPress, tipolimpieza } = props;
  return (
    <TouchableOpacity style={styles.containerCard} activeOpacity={1} onLongPress={onLongPress}>
      <>
        <Image source={HouseAspiradora} style={styles.img} />
        <View style={styles.containerInfo}>
        <Text style={styles.txtDireccion}>{direccion}Torres Bases, Querétaro, Qro.</Text>
        <Text style={styles.txtPropietario}>{propietario}Carlos Ricardo Espinoza Pliego</Text>
        <Text style={styles.txtDescripcion}>{descripcion}Limpieza general, se tiene que limpiar 3 cuartos y sala y comedor</Text>
        <Text style={styles.txtSueldo}>${sueldo}350 MXN </Text>
        <Text style={styles.txtTipolimpieza}>{tipolimpieza}Espacio comercial </Text>
        <Text style={styles.txtFecha} >{fechaPublicacion}Hoy</Text>
        </View>
      </>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    borderRadius: 8,
    marginBottom: 8,
  },
  img: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    resizeMode: 'center',
  },
  containerInfo: {},
  txtDireccion: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtPropietario: {
    fontSize: 14,
  },
  txtDescripcion: {
    fontSize: 14,
    color: '#707070',
  },
  txtSueldo: {
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  txtFecha: {
    fontSize: 10,
  },
  txttipo: {
    fontSize: 14,
    color: '#707070',
  },
  txtTipolimpieza:{
    fontSize: 14,
    color: '#707070',
  }
});

