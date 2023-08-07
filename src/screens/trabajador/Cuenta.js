import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import ModalEditPerfil from "../../components/trabajador/ModalEditPerfil";
import ProfileCard from "../../components/ProfileCard";
import DataProfile from "../../components/trabajador/DataProfile";

export default function Cuenta() {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    fechaNac: "",
    celular: "",
    correo: "",
    rol: "",
    sexo: "",
    descripcion: "",
    urlImgProfile: null,
  });

  // Función para actualizar el estado formData cuando cambie algún campo del formulario
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  };

  // Agregar función para formatear el objeto formData 
  const formatFormData = () => {
    setFormData({
      nombre: "",
      apellidos: "",
      fechaNac: "",
      celular: "",
      correo: "",
      rol: "",
      sexo: "",
      descripcion: "",
      urlImgProfile: null,
    });
  }

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    formatFormData();
  };

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
        />

        <DataProfile formData={formData}/>

      <ModalEditPerfil 
        modalVisible={modalVisible}
        closeModal={closeModal}
        formData={formData}
        handleChange={handleChange}
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