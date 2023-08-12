import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import SinSolicitudes from "../../../components/SinSolicitudes";
import ModalPublicacion from "../../../components/ModalAddPublicacion";
import AccionesModal from "../../../components/AccionesModal";
import PublicacionesList from "../../../components/cliente/PublicacionesList";

export default function PublicacionesActivas({ publicaciones }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalOptionVisible, setModalOptionVisible] = useState(false);
  const [titleModalPublicacion, setTitleModalPublicacion] = useState("");
  const [publicacionData, setPublicacionData] = useState({
    "descripcion": "",
    "estadoPublicacion": "",
    "fecha": "",
    "pagoOfrecido": '',
    "idTipoServicio": '',
    "idUsuario": '',
    "idPropiedad": ''
  });

  console.log("Desde publicaciones activa ---> ")
  // Función para actualizar el estado publicacion cuando cambie algún campo del formulario
  const handleChange = (name, value) => {
    setPublicacionData({
      ...publicacionData,
      [name]: value,
    });
    console.log(publicacionData)
  };

  // Agregar función para formatear el objeto publicacion 
  const formatpublicacionData = () => {
    setPublicacionData({
      "descripcion": "",
      "estadoPublicacion": "",
      "fecha": "",
      "pagoOfrecido": '',
      "idTipoServicio": '',
      "idUsuario": '',
      "idPropiedad": ''
    });
  }

  const openModal = (titleModal) => {
    setTitleModalPublicacion(titleModal);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    formatpublicacionData();
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
    setPublicacionData(publicacionData);
    openModal("Editar publicación");
  }
  const openModalPublicacionAdd = () => {
    console.log("openModalPublicacionAdd")
    setModalOptionVisible(false);
    openModal("Agregar publicación");
  }


  return (
    <View style={styles.container}>
      <View style={styles.containerLinkAdd}>
        <TouchableOpacity
          style={styles.containerBtnLinkAdd}
          onPress={openModalPublicacionAdd}
        >
          <Text style={styles.txtAdd}>Agregar</Text>
        </TouchableOpacity>
      </View>

      {!publicaciones || publicaciones.length === 0 && (
        <SinSolicitudes
          mensajeTitulo="No tienes publicaciones activas"
          mensajeDescripcion="Publica un trabajo y elije al mejor trabajador para tí"
          txtBtn="Publicar"
          onPressBtn={openModalPublicacionAdd}
        />
      )}

      <PublicacionesList
        publicaciones={publicaciones}
        onLongPress={openModalOptions}
        setModalOptionVisible={setModalOptionVisible}
        closeModalOptions={closeModalOptions}
      />

      <ModalPublicacion
        modalVisible={modalVisible}
        closeModal={closeModal}
        publicacion={publicacionData}
        handleChange={handleChange}
        formatpublicacion={formatpublicacionData}
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
    </View>
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
