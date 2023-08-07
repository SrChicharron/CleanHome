import { View, Text, TextInput, StyleSheet, Button, ScrollView } from "react-native";
import React, { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faEnvelope, } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import CakeIcon from "../../assets/icons/CakeIcon.svg";
import ResenaCard from "../ResenaCard";

export default function DataProfile( props ) {
    const { formData } = props;

  return (
    <View>
      <Text style={styles.titleInfo}>Información personal</Text>
      <Text style={styles.txtDescripcion}>Me dedico a trabajar la limpieza en general de las casas, puedo limpiar desde cuartos, cocinas, cocheras, baños, lavar trastes, barrer, trapear, todo lo que sea necesario para dejar tu casa limpia.</Text>
      <View style={styles.containerInfo}>
        <FontAwesomeIcon icon={faUser} style={styles.icons} size={24} />
        <Text style={styles.txtLabels}>{formData.nombre}Carlos Ricardo Espinoza Pliego</Text>
      </View>
      <View style={styles.containerInfo}>
        <FontAwesomeIcon icon={faEnvelope} style={styles.icons} size={24} />
        <Text style={styles.txtLabels}>{formData.correo}carlospliego226@gmail.com</Text>
      </View>
      <View style={styles.containerInfo}>
        <FontAwesomeIcon icon={faMobileScreen} style={styles.icons} size={24} />
        <Text style={styles.txtLabels}>{formData.celular}7772673669</Text>
      </View>
      <View style={styles.containerInfo}>
        <CakeIcon style={styles.icons} />
        <Text style={styles.txtLabels}>{formData.celular}7772673669</Text>
      </View>
      <Text style={styles.titleResenias}>Lo que dicen los anfitriones sobre mi</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ResenaCard/>
            <ResenaCard/>
            <ResenaCard/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    titleInfo: {
        fontSize: 18,
        letterSpacing: 1,
        marginBottom: 4,
    },
    txtDescripcion: {
        fontSize: 14,
        marginBottom: 16,
        color: "#707070",
    },
    containerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        borderBottomColor: "#DEDEDE",
        borderBottomWidth: 1,
        paddingBottom: 8,
    },
    icons: {
        color: "#aaaaaa",
        marginRight: 16,
    },
    txtLabels: {
        fontSize: 14,
        letterSpacing: 1,
        color: "#707070",
    },
    titleResenias: {
        marginVertical: 8,
        fontSize: 18,
    }

})
