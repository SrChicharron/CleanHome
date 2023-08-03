import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React,{useState} from 'react'
import ProfileImg from '../assets/images/welcome1.jpg'
import { AntDesign } from '@expo/vector-icons'
import AccionesSolicitudes from './AccionesSolicitudes'

export default function SolicitudesCard() {

    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    const statusColor = (status)=> {
        if(status=='pendiente'){
            return '#E6E6E6'
        } else if(status=='aprobado'){
            return '#CEFDDE'
        } else if(status=='rechazado'){
            return '#E73C3C'
        } else if(status=='finalizado'){
            return '#075493'
        }
    };

  return (
    <View>
    <TouchableWithoutFeedback onPress={toggleModal}>
    
    <View style={styles.containerCard}>
      <View style={styles.dividedView}>

        <View style={{width:'40%',alignItems:'center',justifyContent:'center'}}>
            <Image source={ProfileImg} style={styles.profileiImg}/>
            {/* <Text style={[styles.textStatus,{backgroundColor:statusColor(status)}]}>Pendiente</Text> */}
            <Text style={styles.textStatus}>Pendiente</Text>
        </View>

        <View style={{width:'60%',}}>
            <Text style={styles.textNombre}>Nombre Trabajador</Text>
            <Text style={styles.textRol}>Rol</Text>

            <View style={styles.viewStars}>
                <AntDesign name="staro" size={35} color="#FFC300" />
                <AntDesign name="staro" size={35} color="#FFC300" />
                <AntDesign name="staro" size={35} color="#FFC300" />
                <AntDesign name="staro" size={35} color="#FFC300" />
                <AntDesign name="staro" size={35} color="#FFC300" />
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
        width:340,
        height:200,
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
    dividedView:{
        flexDirection:'row',
        width:'100%',
        height:'100%'
    },
    profileiImg:{
        width:120,
        height:120,
        borderRadius:100
    },
    textStatus:{
        fontSize:14,
        width:'80%',
        textAlign:'center',
        borderRadius:10,
        marginTop:10
    },
    textNombre:{
        fontSize:20,
        fontWeight:'bold',
    },
    textRol:{
        fontSize:18,
        textAlign:'left'
    },
    viewStars:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:5
      },
    textDescripcion:{
        fontSize:14,
        textAlign:'justify',
        marginRight:5
    }
})