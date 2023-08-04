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
import CardPostulaciones from "../../../components/trabajador/CardPostulaciones";
import ModalReseniaTrabajo from "../../../components/trabajador/ModalReseniaTrabajo";

export default function Aceptadas() {
    const navigation = useNavigation();
    const [activeOption, setActiveOption] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [formData, setFormData] = useState({
        direccion: "Torres Bases, Querétaro, Qro.",
        propietario: "Carlos Ricardo Espinoza Pliego",
        descripcion: "Limpieza general, se tiene que limpiar 3 cuartos y sala y comedor y tambie limpiar bien",
        sueldo: "350 MXN",
        fechaPublicacion: "Hoy",
        phoneNumber: '7772673669',
        calificacion: "",
        resenia: "",
    });
    const [formDataResenia, setFormDataResenia] = useState({
        calificacion: "",
        resenia: "",
    })

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
        setFormDataResenia({
            calificacion: "",
            resenia: "",
        });
    }


    const openModal = (titleModal) => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        formatFormData();
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {activeOption === false && (
                <SinSolicitudes
                    mensajeTitulo='No tienes postulaciones aceptadas... ¡por ahora!'
                    mensajeDescripcion='Sé paciente, pronto te aceptarán en un trabajo. Por ahora, puedes seguir buscando'
                    txtBtn="Empezar a buscar"
                    onPressBtn={() => navigation.navigate("HomeTrabajador")}
                />
            )}
            <CardPostulaciones activeOpacity={null} onLongPress={openModal} isAceppted={'aceptado'} formData={formData} />
            <CardPostulaciones activeOpacity={null} onLongPress={openModal} isAceppted={'aceptado'} formData={formData}/>
            <CardPostulaciones activeOpacity={null} onLongPress={openModal} isAceppted={'aceptado'} formData={formData}/>
            <CardPostulaciones activeOpacity={null} onLongPress={openModal} isAceppted={'aceptado'} formData={formData}/>
            <CardPostulaciones activeOpacity={null} onLongPress={openModal} isAceppted={'aceptado'} formData={formData}/>
            <CardPostulaciones activeOpacity={null} onLongPress={openModal} isAceppted={'aceptado'} formData={formData}/>
            <CardPostulaciones activeOpacity={null} onLongPress={openModal} isAceppted={'aceptado'} formData={formData}/>
            <CardPostulaciones activeOpacity={null} onLongPress={openModal} isAceppted={'aceptado'} formData={formData}/>

            <ModalReseniaTrabajo
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
});