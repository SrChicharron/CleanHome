import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SinSolicitudes from "../../../components/SinSolicitudes";
import ModalResenia from "../../../components/ModalResenia";
import PublicacionesList from "../../../components/cliente/PublicacionesList";

export default function PublicacionesAceptadas( { publicaciones } ) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [reseniaData, setReseniaData] = useState({
    calificacion: 0,
    resenia: "",
  });

    // FUNCIÓN PARA FILTRAR LAS PUBLICACIONES ACTIVAS
    const filtrarPublicacionesActivas = () => {
      return publicaciones.filter(publicacion => publicacion.estatus === "aceptados");
    }
  
    // Estado para almacenar las publicaciones activas
  const [publicacionesActivas, setPublicacionesActivas] = useState(filtrarPublicacionesActivas());

  useEffect(() => {
    const publicacionesActivas = filtrarPublicacionesActivas();
    setPublicacionesActivas(publicacionesActivas);
  }, [publicaciones]);

  console.log("Desde publicaciones Aceptadas ---> ")
  // Función para actualizar el estado publicacion cuando cambie algún campo del formulario
  const handleChange = (name, value) => {
    setReseniaData({
      ...reseniaData,
      [name]: value,
    });
    console.log(reseniaData)
  };

  // Agregar función para formatear el objeto publicacion 
  const formatReseniaData = () => {
    setReseniaData({
      calificacion: 0,
      resenia: "",
    });
  }

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
    formatReseniaData();
  }

  return (
      <View style={styles.container}>
      {!publicacionesActivas || publicacionesActivas.length === 0 && (
        <SinSolicitudes 
          mensajeTitulo='No haz aceptado ninguna solicitud'
          mensajeDescripcion='Acepta a un trabajador para limpiar tu hogar'
          txtBtn="Ver mis solicitudes"
          onPressBtn={() => navigation.navigate("SolictudesCliente")}
        />
      )}

        <PublicacionesList 
          publicaciones={publicacionesActivas} 
          onLongPress={openModal}
          setModalOptionVisible={setModalVisible}
          closeModalOptions={closeModal}
        />


      <ModalResenia
        modalVisible={modalVisible}
        closeModal={closeModal}
        publicaciones={publicaciones}
        handleChange={handleChange}
      />
    </View>
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

