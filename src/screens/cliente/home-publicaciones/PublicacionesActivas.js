import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import SinSolicitudes from "../../../components/SinSolicitudes";
import CardPublicaciones from "../../../components/CardPublicaciones";
import ModalPublicacion from "../../../components/ModalAddPublicacion";
import AccionesModal from "../../../components/AccionesModal";

export default function PublicacionesActivas() {
  const [activeOption, setActiveOption] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalOptionVisible, setModalOptionVisible] = useState(false);
  const [titleModalPublicacion, setTitleModalPublicacion] = useState("");
  const [formData, setFormData] = useState({
    tipoServicio: "",
    propiedad: "",
    pagoOfrecido: "",
    descripcion: "",
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
      tipoServicio: "",
      propiedad: "",
      pagoOfrecido: "",
      descripcion: "",
    });
  }

  const openModal = (titleModal) => {
    setTitleModalPublicacion(titleModal);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    formatFormData();
  };

  const openModalOptions = () => {
    console.log("openModalOptions")
    setModalOptionVisible(true);
  }

  const closeModalOptions = () => {
    setModalOptionVisible(false);
  }
  const openModalPublicacion = () => {
    console.log("openModalPublicacion")
    setModalOptionVisible(false);
    openModal("Editar publicación");
  }
  const openModalPublicacionAdd = () => {
    console.log("openModalPublicacionAdd")
    setModalOptionVisible(false);
    openModal("Agregar publicación");
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {activeOption === false && (
        <SinSolicitudes
          mensajeTitulo="No tienes publicaciones activas"
          mensajeDescripcion="Publica un trabajo y elije al mejor trabajador para tí"
          txtBtn="Publicar"
          onPressBtn={() => console.log("Publicar")}
        />
      )}
      <View style={styles.containerLinkAdd}>
        <TouchableOpacity
          style={styles.containerBtnLinkAdd}
          onPress={openModalPublicacionAdd}
        >
          <Text style={styles.txtAdd}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <CardPublicaciones 
        onLongPress={ openModalOptions } 
        setModalOptionVisible={setModalOptionVisible} 
        closeModalOptions={closeModalOptions}
        
      />
      <CardPublicaciones />
      <CardPublicaciones />

      <ModalPublicacion 
        modalVisible={modalVisible} 
        closeModal={closeModal} 
        formData={formData}
        handleChange={handleChange}
        formatFormData={formatFormData}
        titleModal={titleModalPublicacion}
      />

      <AccionesModal
        modalOptionVisible={modalOptionVisible}
        setModalOptionVisible={setModalOptionVisible}
        closeModalOptions={closeModalOptions}
        txtBtnBlue="Editar"
        txtBtnRed="Eliminar"
        onPressBlue={openModalPublicacion}
        onPressRed={() => console.log("Eliminar")}
      />
    </ScrollView>
  );
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
