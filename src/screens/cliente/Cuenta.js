import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ToastAndroid } from 'react-native'
import React, {useState, useEffect, useCallback} from 'react'
import { useFocusEffect } from '@react-navigation/native'
import {FontAwesome, Foundation} from '@expo/vector-icons'
import ProfileImg from '../../assets/images/welcome1.jpg'
import ResenaCard from '../../components/ResenaCard'
import { useNavigation } from '@react-navigation/native';
import ProfileCard from '../../components/ProfileCard'
import ModalEditPerfil from '../../components/trabajador/ModalEditPerfil'
import DataProfile from '../../components/trabajador/DataProfile'
import axios from 'axios'
import { getUsuario, updateUsuario } from "../../api/trabajador/CuentaApi";
import  Toast  from 'react-native-toast-message'
import useAuth from '../../hooks/UseAuth';


export default function Cuenta() {
  const {auth,logout} = useAuth()
  const token=auth.token;
  const [modalVisible, setModalVisible] = useState(false);
  const [infoUser,setInfoUser] = useState(null);
  const urlgetInfo =`http://clenhometm.trafficmanager.net:2813/ch/auth/getUsuario/${auth.username}`
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    cellphone: "",
    descripcion: "",
    //urlImgProfile: null,
  });

  
  useEffect(() => {
    getInfoUsuario();
  }, []);


  // Función para actualizar el estado formData cuando cambie algún campo del formulario
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Agregar función para formatear el objeto formData 
  const formatFormData = () => {
    setFormData({
      name: "",
      lastname: "",
      cellphone: "",
      descripcion: "",
      //urlImgProfile: null,
    });
  }

  const openModal = () => {
    setModalVisible(true);
    setFormData({
      name: infoUser.name,
      lastname: infoUser.lastname,
      cellphone: infoUser.cellphone,
      descripcion: infoUser.descripcion
    })
  };

  const closeModal = () => {
    setModalVisible(false);
    formatFormData();
  };

  const getInfoUsuario= async () => {
      const response = await getUsuario(auth.username);
      setInfoUser(response);
      console.log("response data user ====> " + JSON.stringify(response, null , 4))
      //const response = await axios.get(urlgetInfo);
      // const response = await axios.get(urlgetInfo,
      //   {
      //     headers: {
      //       "Access-Control-Allow-Origin": "*",
      //       "Access-Control-Allow-Headers":
      //         "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
      //       "Content-Type": "application/json",
      //       'Authorization':`Bearer ${token}`
      //     }
      //   });
      // setInfoUser(response.data);
      // console.log("response data user ====> " + JSON.stringify(response.data, null , 4))
  };
  // useFocusEffect(
  //   useCallback(()=>{
  //       getInfoUsuario();
  //   })
  // );


  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.containerLinkAdd}>
      <TouchableOpacity
          style={styles.containerBtnLinkAdd}
          onPress={openModal}
        >
          <Text style={styles.txtAdd}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containerBtnLinkAdd}
          onPress={logout}
        >
          <Text style={styles.txtAdd}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
      <ProfileCard 
        formData={formData}
        handleChange={handleChange}
        auth={auth}
        infoUser={infoUser}
        />

        <DataProfile auth={auth} infoUser={infoUser} formData={formData} titleResenias={"Lo que dicen los trabajadores sobre mi"}/>

      <ModalEditPerfil 
        modalVisible={modalVisible}
        closeModal={closeModal}
        formData={formData}
        handleChange={handleChange}
        infoUser={infoUser}
        auth={auth}
      />
      <Toast topOffset={20}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  containerLinkAdd: {
    flexDirection:'row-reverse',
    justifyContent:"space-between"
  },
  containerBtnLinkAdd: {
    borderRadius: 8,
    marginBottom: 16,
  },
  txtAdd: {
    color: "#A3A3A3",
    textDecorationLine: "underline",
    fontSize: 16,
    letterSpacing: 0.5,
  },
});