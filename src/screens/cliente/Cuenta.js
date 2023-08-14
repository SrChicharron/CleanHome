import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useState, useEffect, useCallback} from 'react'
import { useFocusEffect } from '@react-navigation/native'
import {FontAwesome, Foundation} from '@expo/vector-icons'
import ProfileImg from '../../assets/images/welcome1.jpg'
import ResenaCard from '../../components/ResenaCard'
import { useNavigation } from '@react-navigation/native';
import ProfileCard from '../../components/ProfileCard'
import ModalEditPerfil from '../../components/trabajador/ModalEditPerfil'
import DataProfile from '../../components/trabajador/DataProfile'
import useAuth from '../../hooks/UseAuth';
import axios from 'axios'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'

export default function Cuenta() {
  const {auth} = useAuth()
  const [modalVisible, setModalVisible] = useState(false);
  const [infoUser,setInfoUser] = useState(null);
  const urlgetInfo =`http://192.168.1.154:2813/ch/auth/getUsuario/${auth.username}`
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    cellphone: "",
    descripcion: "",
    //urlImgProfile: null,
  });

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
    try{
      const response = await axios.get(urlgetInfo);
      setInfoUser(response.data);
    }catch(error){
        console.log(error)
    }
  };

  useEffect(() => {
    getInfoUsuario();
  });

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
    alignItems: "flex-end",
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