import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import welcome1 from '../assets/images/welcome1.jpg';
import { AntDesign } from '@expo/vector-icons';
import EscobaClean from '../assets/icons/escobaClean.svg';
import ubicacion from '../assets/images/ubicacion.png';
import { ScrollView } from 'react-native-gesture-handler';
import Postulaciones from '../screens/trabajador/Postulaciones'; import Swiper from 'react-native-swiper';
import pexels from '../assets/images/pexels.jpg'
import { useRoute } from '@react-navigation/native';


export default function DetalleHome() {
  const route=useRoute()
  const{publicacion}=route.params
  const usuario = `${publicacion.usuario.name} ${publicacion.usuario.lastname}`;
  const direccion = `${publicacion.propiedad.calle} ${publicacion.propiedad.numeroExt}, ${publicacion.propiedad.colonia}, ${publicacion.propiedad.codigoPostal}, ${publicacion.propiedad.estado.estado}`;
  const formattedDate = new Date(publicacion.fecha).toLocaleDateString("es-ES");
  const servicio=`${publicacion.servicio.nombre}  ${publicacion.servicio.descripcion}`;

  
  console.log("DetalleHome ==== "+JSON.stringify(publicacion,null,4))
  const handlePostulacion = async () => {
    try {

    } catch (error) {

    }
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.containerD}>
        <Swiper style={styles.swiperContainer}>
          <Image source={welcome1} style={styles.img} />
          <Image source={pexels} style={styles.img} />

        </Swiper>
        <View style={styles.propietarioContainer}>
          <EscobaClean height={15} style={styles.escobaIcon} />
          <Text style={styles.txtPropietario}>{usuario}</Text>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((index) => (
              <AntDesign key={index} name="star" size={15} color="#FFC300" style={styles.starIcon} />
            ))}
          </View>
        </View>
        <View style={styles.contentContainer}>

          <Image source={ubicacion} style={styles.imgub} />

          <Text style={styles.txtDireccion}>{direccion} </Text>
        </View>
        <View style={styles.direccionContainer}>
          <Text style={styles.txtFecha}>{formattedDate}</Text>
        </View>
        <View style={styles.detallesContainer}>
          <Text style={styles.dettext}> Detalles</Text>
          <Text style={styles.txtDetalles}>{publicacion.servicio.descripcion}</Text>
        </View>
        <View style={styles.descripcionContainer}>
          <Text style={styles.destext}> Descripción del trabajo</Text>
          <Text style={styles.txtDescripcion}>{publicacion.descripcion}</Text>
          <Text style={styles.txtTipolimpieza}>{publicacion.servicio.nombre}</Text>
        </View>
        <View style={styles.sueldoContainer}>
          <View style={styles.sueldoContainer}>
            <Text style={styles.txtSueldo}> ${publicacion.pagoOfrecido}MXN</Text>



            <TouchableOpacity
              style={styles.customButtonStyle}
              onPress={handlePostulacion}
            >
              <Text style={styles.customButtonTextStyle}>Postularse</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>




    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerD: {
    flex: 1,
    padding: 1,
    backgroundColor: '#FFFFFF'
  },
  img: {
    width: '100%',
    height: 305,
    borderRadius: 1,
    resizeMode: 'cover',
  },

  txtDireccion: {
    fontSize: 14,
    color: '#707070',
    justifyContent: 'space-between',
    letterSpacing: 2,
  },
  txtPropietario: {
    fontSize: 18,
    marginTop: 4,
    fontWeight: 'bold',
    letterSpacing: 0.1,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginLeft: 70,
   

  },
  starIcon: {
    marginRight: 10,
    
   
  },
  txtDescripcion: {
    fontSize: 14,
    color: '#707070',
    marginTop: 8,

  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  txtSueldo: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
    justifyContent: 'center',

    marginLeft: 10

  },
  txtTipolimpieza: {
    fontSize: 14,
    color: '#707070',
  },
  txtFecha: {
    fontSize: 12,
    marginTop: 1,
    color: '#707070',
    marginLeft: 40,
    alignItems: 'flex-start',

  },
  propietarioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  escobaIcon: {
    marginRight: -18,
    marginLeft: -12,
  },
  contentContainer1: {
    marginTop: 16,
  },
  imgub: {
    marginRight: 6,
    marginLeft: -8,
    width: 15,
    height: 15,
  },
  contentContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 20,

  },
  direccionContainer: {
    marginTop: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    paddingBottom: 8,
  },
  detallesContainer: {
    marginTop: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    paddingBottom: 8,
  },
  dettext: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 4,
    textAlign: 'left',


  },
  txtDetalles: {
    fontSize: 14,
    marginTop: 4,
    color: '#707070',
    textAlign: 'left',
    justifyContent: 'flex-end',
    marginLeft: 10,
    color: '#707070',
  },

  descripcionContainer: {
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    paddingBottom: 8,
    height: 360

  },
  sueldoContainer: {
    marginTop: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    paddingBottom: 8,
    width: '100%',
    height: 84,
    
  },
  destext: {
    fontSize: 15,
    marginTop: 8,
    fontWeight: 'bold',
    letterSpacing: 4,
    textAlign: 'left',
    marginLeft: 1

  },
  txtDescripcion: {
    fontSize: 14,
    marginTop: 4,
    color: '#707070',
    textAlign: 'left',
    justifyContent: 'flex-end',
    marginLeft: 10,
    color: '#707070',

  },
  scrollView: {
    flex: 1,
  },

  txtTipolimpieza: {
    fontSize: 14,
    marginTop: 4,
    color: '#707070',
    textAlign: 'right',
    color: '#707070',
    alignSelf: 'flex-start',
    marginLeft: 10


  },
  txtFechalimite: {
    fontSize: 12,
    marginTop: 4,
    color: '#707070',
    textAlign: 'left',
    justifyContent: 'center',
    marginLeft: 10,
    color: '#707070',
  },
  customButtonStyle: {
    backgroundColor: '#075493',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
    alignItems: 'center', 
    justifyContent: 'center', 
    width: 125,
    height: 44,
    marginEnd: 9,
    justifyContent:'center',
    marginTop:-30
    
    

  },
  customButtonTextStyle: {
    color: 'white',
    fontSize: 16,

    alignItems: 'flex-end',
    textAlign: 'center',
    letterSpacing: 1,
  },
  swiperContainer: {
    height: 300,
  },

});