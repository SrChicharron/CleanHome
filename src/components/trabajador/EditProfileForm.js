import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function EditProfileForm(props) {
    const { formData, handleChange } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
                style={styles.input}
                value={formData.name}
                onChangeText={(text) => handleChange("name", text)}
            />
            <Text style={styles.label}>Apellidos</Text>
            <TextInput
                style={styles.input}
                value={formData.lastname}
                onChangeText={(text) => handleChange("lastname", text)}
            />
            <Text style={styles.label}>Número de celular</Text>
            <TextInput
                style={styles.input}
                value={formData.cellphone}
                keyboardType="numeric"
                maxLength={10}
                onChangeText={(text) => handleChange("cellphone", text)}
            />
            <Text style={styles.label}>Descripción</Text>
            <TextInput
                style={{ ...styles.input, ...styles.labelDescripcion }}
                placeholder="Descripción"
                multiline
                value={formData.descripcion}
                onChangeText={(text) => handleChange("descripcion", text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#F5F5F5",
    },
    labelDescripcion: {
        height: 100,
        textAlignVertical: "top",
    },
    picker: {
        backgroundColor: "#F5F5F5",
        borderRadius: 5,

    }
});
