import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React,{useState, useEffect} from 'react'
import ProfileImg from '../assets/images/welcome1.jpg'
import { AntDesign } from '@expo/vector-icons'
import axios from 'axios'
import AccionesSolicitudes from './AccionesSolicitudes'
import StarRating from "react-native-star-rating-widget";
import useAuth from '../hooks/UseAuth';

export default function SolicitudesCard(props) {
  const {auth,logout} = useAuth()
    const token=auth.token;
    const {solicitudes, getSolicitudes} = props
    const [isModalVisible, setModalVisible] = useState(false);
    let idEmpleado = solicitudes.empleado.id;
    // Variables de prueba para que funcione el componente de status y estrellas -----
    const [estatus, setEstatus] = useState();
    const [data,setData]=useState()
    const [calificacion, setCalificacion] = useState([]);
    // ----- fin de variables de prueba -----//
    let id=solicitudes.id;
    const name = `${solicitudes.empleado.name} ${solicitudes.empleado.lastname}`;
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
      console.log(id)
    };

    const getEstresllasTrabajador= async () => {
      const urlGetEstrellas=`http://clenhometm.trafficmanager.net:2813/ch/resena/getResenasEvaluado?idEvaluado=${idEmpleado}`
      try{
        const response = await axios.get(urlGetEstrellas,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers":
                "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
              "Content-Type": "application/json",
              'Authorization':`Bearer ${token}`
            }
          })
        // const response = await axios.get(urlGetSolicitudes,{
        //   params:{idCliente:9},
        //   headers:{
        //     'Authorization':`Bearer ${token}`
        //   }
        // });
        setData(response.data)
        setCalificacion(data.map(x => x.calificacion))
      }catch(error){
          console.log(error)
      }
    };

    useEffect(() => {
      getEstresllasTrabajador();
    });

  return (
    <>
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
                estatus === "aprobada"
                    ? "#D4F4E2"
                    : estatus === `finalizada`
                    ? "#075493"
                    : "#E6E6E6",
              },
            ]}
          >
            <Text style={[
              styles.txtIsApproved,
              {
                color:
                estatus === `finalizada`
                    ? "#fff"
                    : "#000",
              },
            ]}>{solicitudes.estatus}</Text>
          </View>
        </View>

        <View style={styles.containerInfo}>
            <Text style={styles.textNombre}>{solicitudes.empleado.name} {solicitudes.empleado.lastname}</Text>
            <Text style={styles.textRol}>Celular: {solicitudes.empleado.cellphone}</Text>

            <Text style={styles.textDescripcion}>{solicitudes.empleado.name} se postuló para <Text style={{fontWeight:'bold'}}>{solicitudes.propiedad.titulo}</Text> ubicado en {solicitudes.propiedad.calle} #{solicitudes.propiedad.numeroExt} Col. {solicitudes.propiedad.colonia} {solicitudes.propiedad.codigoPostal}, {solicitudes.propiedad.estado.estado}</Text>
        </View>

      </View>
    </View>
        
    </TouchableWithoutFeedback>
    <AccionesSolicitudes isModalVisible={isModalVisible} toggleModal={toggleModal} id={id} name={name} getSolicitudes={getSolicitudes}/>
    </>
  )
}

const styles = StyleSheet.create({
    containerCard:{
        
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