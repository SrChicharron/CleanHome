import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";

export default function EditProfileForm(props) {
    const { formData, handleChange } = props;
    const [image, setImage] = useState(null);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
                style={styles.input}
                value={formData.nombre}
                onChangeText={(text) => handleChange("nombre", text)}
            />
            <Text style={styles.label}>Correo electrónico</Text>
            <TextInput
                style={styles.input}
                value={formData.correo}
                onChangeText={(text) => handleChange("correo", text)}
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
