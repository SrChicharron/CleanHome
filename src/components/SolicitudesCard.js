import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React,{useState} from 'react'
import ProfileImg from '../assets/images/welcome1.jpg'
import { AntDesign } from '@expo/vector-icons'
import AccionesSolicitudes from './AccionesSolicitudes'
import StarRating from "react-native-star-rating-widget";

export default function SolicitudesCard() {

    const [isModalVisible, setModalVisible] = useState(false);
    // Variables de prueba para que funcione el componente de status y estrellas -----
    const [estatus, setEstatus] = useState('finalizado');
    const [calificacion, setCalificacion] = useState(4.5);
    // ----- fin de variables de prueba -----//
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

  return (
    <View>
    <TouchableWithoutFeedback onLongPress={toggleModal}>
    
    <View style={styles.containerCard}>
      <View style={styles.dividedView}>

        <View style={styles.containerImg}>
            <Image source={ProfileImg} style={styles.profileiImg}/>
            {/* <Text style={[styles.textStatus,{backgroundColor:statusColor(status)}]}>Pendiente</Text> */}
            <View
            style={[
              styles.containerIsApproved,
              {
                backgroundColor:
                estatus === "aprobado"
                    ? "#D4F4E2"
                    : estatus === "finalizado"
                    ? "#075493"
                    : "#E6E6E6",
              },
            ]}
          >
            <Text style={[
              styles.txtIsApproved,
              {
                color:
                estatus === "finalizado"
                    ? "#fff"
                    : "#000",
              },
            ]}>{estatus}</Text>
          </View>
        </View>

        <View style={styles.containerInfo}>
            <Text style={styles.textNombre}>Nombre Trabajador</Text>
            <Text style={styles.textRol}>Rol</Text>

            <View style={styles.viewStars}>
                <StarRating rating={calificacion} /*onChange={(rating) => handleChange("calificacion", rating)}*/ starSize={30} style={styles.starRating}/>
            </View>

            <Text style={styles.textDescripcion}>Moises se postuló para casa centro ubicado en Mariano escobedo #68 Col. Centro 68001, Qro Qro.</Text>
        </View>

      </View>
    </View>
        
    </TouchableWithoutFeedback>
    <AccionesSolicitudes isModalVisible={isModalVisible} toggleModal={toggleModal}/>
    </View>
  )
}

const styles = StyleSheet.create({
    containerCard:{
        height:200,
        backgroundColor:'#FFF',
        margin: 8,
        padding: 16,
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
    dividedView:{
        flexDirection:'row',
    },
    containerImg: {
        width:'40%',
        alignItems:'center',
        justifyContent:'center',
        marginRight: 16,
    },
    profileiImg:{
        width:140,
        height:140,
        borderRadius: 100
    },
    containerInfo: {
        width: '55%',
    },
    textNombre:{
        fontSize:18,
        fontWeight:'bold',
    },
    textRol:{
        fontSize:14,
        textAlign:'left'
    },
    viewStars:{
        paddingVertical: 4,
      },
    textDescripcion:{
        fontSize:14,
        textAlign:'justify',
        color: '#707070',
    },
    containerIsApproved: {
        backgroundColor: "#E6E6E6",
        borderRadius: 50,
        width: 100,
        paddingVertical: 4,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8,
      },
      txtIsApproved: {
        textAlign: "center",
        fontSize: 12,
    
      },
      starRating: {
        alignSelf: "flex-start",
      }
})