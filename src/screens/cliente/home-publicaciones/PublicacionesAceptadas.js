import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SinSolicitudes from "../../../components/SinSolicitudes";
import CardPublicaciones from "../../../components/CardPublicaciones";
import ModalResenia from "../../../components/ModalResenia";

export default function PublicacionesAceptadas() {
  const navigation = useNavigation();
  const [activeOption, setActiveOption] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    calificacion: 0,
    resenia: "",
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
      calificacion: "",
      resenia: "",
    });
  }

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
    formatFormData();
  }

  return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {activeOption === false && (
        <SinSolicitudes 
          mensajeTitulo='No haz aceptado ninguna solicitud'
          mensajeDescripcion='Acepta a un trabajador para limpiar tu hogar'
          txtBtn="Ver mis solicitudes"
          onPressBtn={() => navigation.navigate("SolictudesCliente")}
        />
      )}
      <CardPublicaciones onLongPress={openModal}/>
      <ModalResenia
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
    paddingTop: 8,
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