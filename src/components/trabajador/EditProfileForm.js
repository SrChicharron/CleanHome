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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function EditProfileForm(props) {
  const { userData, handleChange } = props;
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      handleChange("foto", result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.containerImage}>
            <TouchableOpacity
                style={styles.imageContainer}
                onPress={() => pickImage()}
            >
                <Image source={{ uri: image }} style={styles.image} />
                {/* Poner icono de camara de fontawesome */}
                <FontAwesomeIcon
                style={styles.iconCamera}
                icon={faCamera}
                size={32}
                color="#373737"
                />
            </TouchableOpacity>
        </View>

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        value={userData.name}
        onChangeText={(text) => handleChange("name", text)}
      />
      <Text style={styles.label}>Número de celular</Text>
      <TextInput
        style={styles.input}
        value={userData.cellphone}
        keyboardType="numeric"
        maxLength={10}
        onChangeText={(text) => handleChange("cellphone", text)}
      />
      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={{ ...styles.input, ...styles.labelDescripcion }}
        placeholder="Descripción"
        multiline
        value={userData.descripcion}
        onChangeText={(text) => handleChange("descripcion", text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
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
  },
  containerImage: {
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    width: 200,
    height: 200,
    backgroundColor: "#F5F5F5",
    borderRadius: 100,
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    borderRadius: 10,
  },
  iconCamera: {
    position: "absolute",
    //Posicionar al centro
    top: "50%",
    left: "50%",
    marginLeft: -12,
    marginTop: -12,
  },
});
