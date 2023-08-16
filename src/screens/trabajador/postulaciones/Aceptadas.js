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
import ModalReseniaTrabajo from "../../../components/trabajador/ModalReseniaTrabajo";
import PostulacionesList from "../../../components/trabajador/PostulacionesList";

export default function Aceptadas({ postulaciones }) {
  const navigation = useNavigation();
  const [activeOption, setActiveOption] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [postulacionesAceptadas, setPostulacionesAceptadas] = useState([]);
  const [formData, setFormData] = useState({
    direccion: "Torres Bases, Querétaro, Qro.",
    propietario: "Carlos Ricardo Espinoza Pliego",
    descripcion:
      "Limpieza general, se tiene que limpiar 3 cuartos y sala y comedor y tambie limpiar bien",
    sueldo: "350 MXN",
    fechaPublicacion: "Hoy",
    phoneNumber: "7772673669",
    calificacion: "",
    resenia: "",
  });
  const [formDataResenia, setFormDataResenia] = useState({
    calificacion: "",
    resenia: "",
  });

  useEffect(() => {
    setPostulacionesAceptadas(filterPostulacionesAceptadas());
  }, [postulaciones]);

  // FUNCIÓN PARA FILTRAR LAS POSTULACIONES ACEPTADAS
  const filterPostulacionesAceptadas = () => {
    return postulaciones.filter(
      (postulacion) => postulacion.estatus === "aceptados"
    );
  };

  // Función para actualizar el estado formData cuando cambie algún campo del formulario
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  // Agregar función para formatear el objeto formData
  const formatFormData = () => {
    setFormDataResenia({
      calificacion: "",
      resenia: "",
    });
  };

  const openModal = (titleModal) => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    formatFormData();
  };

  return (
    <View style={styles.container}>
      {!postulacionesAceptadas ||
        (postulacionesAceptadas.length === 0 && (
          <SinSolicitudes
            mensajeTitulo="No tienes postulaciones aceptadas... ¡por ahora!"
            mensajeDescripcion="Sé paciente, pronto te aceptarán en un trabajo. Por ahora, puedes seguir buscando"
            txtBtn="Empezar a buscar"
            onPressBtn={() => navigation.navigate("HomeTrabajador")}
          />
        ))}
      {/* <CardPostulaciones activeOpacity={null} onLongPress={openModal} isAceppted={'aceptado'} formData={formData} /> */}

      <PostulacionesList
        postulaciones={postulacionesAceptadas}
        activeOpacity={null}
        onLongPress={openModal}
        isAceppted={"aceptados"}
      />

      <ModalReseniaTrabajo
        modalVisible={modalVisible}
        closeModal={closeModal}
        formData={formData}
        handleChange={handleChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
  },
});