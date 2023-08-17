import { View, Text, TextInput, StyleSheet, Button, ScrollView } from "react-native";
import React, { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser, faEnvelope, } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import CakeIcon from "../../assets/icons/CakeIcon.svg";

export default function DataProfile( props ) {
    const { formData, titleResenias, auth, infoUser } = props;

  return (
    <View>
      <Text style={styles.titleInfo}>Información personal</Text>
      <Text style={styles.txtDescripcion}>{infoUser?infoUser.descripcion:'Escribe una breve descripcion en `Editar`'}</Text>
      <View style={styles.containerInfo}>
        <FontAwesomeIcon icon={faUser} style={styles.icons} size={24} />
        <Text style={styles.txtLabels}>{infoUser?infoUser.name:''} {infoUser?infoUser.lastname:''}</Text>
      </View>
      <View style={styles.containerInfo}>
        <FontAwesomeIcon icon={faEnvelope} style={styles.icons} size={24} />
        <Text style={styles.txtLabels}>{auth.email}</Text>
      </View>
      <View style={styles.containerInfo}>
        <FontAwesomeIcon icon={faMobileScreen} style={styles.icons} size={24} />
        <Text style={styles.txtLabels}>{infoUser?infoUser.cellphone:''}</Text>
      </View>
      <View style={styles.containerInfo}>
        <CakeIcon style={styles.icons} />
        <Text style={styles.txtLabels}>{infoUser?infoUser.birthday:''}</Text>
      </View>
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
        paddingBottom: 16,
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
