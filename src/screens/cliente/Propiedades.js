import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SinSolicitudes from "../../components/SinSolicitudes";
import ListPropiedades from "../../components/propiedad/ListPropiedades";
import CardPropiedades from "../../components/CardPropiedades";
import ModalAddPropiedad from "../../components/ModalAddPropiedad";
import AccionesModal from "../../components/AccionesModal";
import { fetchPropiedades } from "../../api/propiedad/PropiedadesAPI";

export default function Propiedades() {
  const [activeOption, setActiveOption] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalOptionVisible, setModalOptionVisible] = useState(false);
  const [titleModalPropiedad, setTitleModalPropiedad] = useState("");
  const [propiedades, setPropiedades] = useState([]);
  const [propiedadEdicion, setPropiedadEdicion]=useState({});
  const [formData, setFormData] = useState({
    id:"",
    titulo: "",
    calle: "",
    numeroExt: "",
    codigoPostal: "",
    colonia: "",
    referencias: "",
    estatus: "pendiente",
    estado:{
      id:"",
      estado:""},
    tipoPropiedad:{
      id:"",
      tipo:""
      },
    idUsuario:""
  });

  // Función para actualizar el estado formData cuando cambie algún campo del formulario
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const formatFormData = () => {
    setFormData({
      id:"",
      titulo: "",
      calle: "",
      numeroExt: "",
      codigoPostal: "",
      colonia: "",
      referencias: "",
      estatus: "pendiente",
      estado:{
        id:"",
        estado:""},
      tipoPropiedad:{
        id:"",
        tipo:""
        },
      idUsuario:""
      });
  };

  const openModal = (titleModal) => {
    setTitleModalPropiedad(titleModal);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    formatFormData();
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const openModalOptions = () => {
    console.log("openModalOptions");
    setModalOptionVisible(true);
    setFormData({
      id:propiedadEdicion.id,
      titulo: propiedadEdicion.titulo,
      calle: propiedadEdicion.calle,
      numeroExt: propiedadEdicion.numeroExt,
      codigoPostal: propiedadEdicion.codigoPostal,
      colonia: propiedadEdicion.colonia,
      referencias: propiedadEdicion.referencias,
      estatus: "pendiente",
      estado:{
        id:propiedadEdicion.estado.id,
        estado:propiedadEdicion.estado.estado},
      tipoPropiedad:{
        id:propiedadEdicion.tipoPropiedad.id,
        tipo:propiedadEdicion.tipoPropiedad.tipo
        },
      idUsuario:propiedadEdicion.idUsuario
      });
  };

  const closeModalOptions = () => {
    setModalOptionVisible(false);
  };
  
  const openModalPropiedad = () => {
    console.log("openModalPropiedad")
    setModalOptionVisible(false);
    openModal("Editar propiedad");
  }

  const openModalPropiedadAdd = () => {
    console.log("openModalPropiedadAdd");
    setModalOptionVisible(false);
    openModal("Agregar propiedad");
  };
  const loadData = async () => {
    const resultPropiedades = await fetchPropiedades();
    console.log(resultPropiedades);
    setPropiedades(resultPropiedades);
  };
  // Simulación de llamada a API para obtener los servicios
  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {activeOption === false && (
        <SinSolicitudes
          mensajeTitulo="No tienes propiedades publicadas"
          mensajeDescripcion="Publica una propiedad para poder publicar un trabajo"
          txtBtn="Añadir"
          onPressBtn={openModalPropiedadAdd}
        />
      )}
      <View style={styles.containerLinkAdd}>
        <TouchableOpacity
          style={styles.containerBtnLinkAdd}
          onPress={openModalPropiedadAdd}
        >
          <Text style={styles.txtAdd}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <ListPropiedades 
        propiedades={propiedades}
        propiedadEdicion={propiedadEdicion}
        setPropiedadEdicion={setPropiedadEdicion}
        formData={formData}
        openModalOptions={openModalOptions}
        setModalOptionVisible={setModalOptionVisible}
        closeModalOptions={closeModalOptions}
      />
      <ModalAddPropiedad
        modalVisible={modalVisible}
        closeModal={closeModal}
        formData={formData}
        handleChange={handleChange}
        formatFormData={formatFormData}
        titleModal={titleModalPropiedad}
      />

      <AccionesModal
                modalOptionVisible={modalOptionVisible}
                setModalOptionVisible={setModalOptionVisible}
                closeModalOptions={closeModalOptions}
                txtBtnBlue="Editar"
                txtBtnRed="Eliminar"
                onPressBlue={openModalPropiedad}
                onPressRed={() => console.log("Eliminar")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    flex: 1,
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
  containerFilter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingBottom: 8,
    width: "100%",
  },
  containerTextFilter: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    width: "30%",
    textAlign: "center",
    alignItems: "center",
  },
  activeOptionBtnFilter: {
    color: "#E6E6E6",
  },
  activeOptionTxtBtnFilter: {
    color: "#075493",
    fontWeight: "bold",
  },
});
