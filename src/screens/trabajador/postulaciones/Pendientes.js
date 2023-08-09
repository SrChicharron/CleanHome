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

export default function Pendientes() {
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

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {activeOption === false && (
                <SinSolicitudes
                    mensajeTitulo='No tienes postulaciones... ¡por ahora!'
                    mensajeDescripcion='Busca y elije el mejor trabajo para tí'
                    txtBtn="Empezar a buscar"
                    onPressBtn={() => navigation.navigate("HomeTrabajador")}
                />
            )}
            <CardPostulaciones activeOpacity={1} onLongPress={null} isAceppted={null} formData={formData} />
            <CardPostulaciones activeOpacity={1} onLongPress={null} isAceppted={null} formData={formData} />
            <CardPostulaciones activeOpacity={1} onLongPress={null} isAceppted={null} formData={formData} />
            <CardPostulaciones activeOpacity={1} onLongPress={null} isAceppted={null} formData={formData} />
            <CardPostulaciones activeOpacity={1} onLongPress={null} isAceppted={null} formData={formData} />
            <CardPostulaciones activeOpacity={1} onLongPress={null} isAceppted={null} formData={formData} />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 8,
    },
});