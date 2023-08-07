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

export default function PropiedadForm(props) {
  const { formData, handleChange } = props;

  const [listaTipoPropiedades, setListaTipoPropiedades] = useState([]);
  const [image, setImage] = useState(null);
  const [imageComprobante, setImageComprobante] = useState(null);

  const pickImage = async (option) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      if (option === 1) {
        setImage(result.assets[0].uri);
        handleChange("imagen", result.assets[0].uri);
      } else if (option === 2) {
        setImageComprobante(result.assets[0].uri);
        handleChange("comprobanteDomicilio", result.assets[0].uri);
      }
    }
  };

  // Simulación de llamada a API para obtener los servicios
  useEffect(() => {
    // Aquí puedes realizar una llamada real a una API para obtener los servicios disponibles
    // En este ejemplo, utilizaremos datos estáticos
    const mockTipoPropiedad = [
      { id: 1, nombre: "Casa" },
      { id: 2, nombre: "Comercial" },
    ];
    setListaTipoPropiedades(mockTipoPropiedad);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => pickImage(1)}
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
      <Text style={styles.label}>Tipo de propiedad</Text>
      <Picker
        style={styles.picker}
        selectedValue={formData.tipoServicio}
        onValueChange={(itemValue) => handleChange("tipoPropiedad", itemValue)}
      >
        <Picker.Item label="Seleccione un servicio" value="" />
        {listaTipoPropiedades.map((TipoPropiedad) => (
          <Picker.Item
            key={TipoPropiedad.id}
            label={TipoPropiedad.nombre}
            value={TipoPropiedad.id}
          />
        ))}
      </Picker>

      <Text style={styles.label}>Título de la casa</Text>
      <TextInput
        style={styles.input}
        placeholder="Casa de las lomas"
        value={formData.tituloCasa}
        onChangeText={(text) => handleChange("tituloCasa", text)}
      />

      <Text style={styles.label}>Calle / avenida</Text>
      <TextInput
        style={styles.input}
        placeholder="Calle Revolucion"
        value={formData.calle}
        onChangeText={(text) => handleChange("calle", text)}
      />

      <Text style={styles.label}>No. exterior e interior</Text>
      <TextInput
        style={styles.input}
        placeholder="1611-3"
        value={formData.numero}
        onChangeText={(text) => handleChange("numero", text)}
      />

      <Text style={styles.label}>Código postal</Text>
      <TextInput
        style={styles.input}
        placeholder="12344"
        value={formData.codigoPostal}
        onChangeText={(text) => handleChange("codigoPostal", text)}
      />

      <Text style={styles.label}>Colonia</Text>
      <TextInput
        style={styles.input}
        placeholder="Lomas"
        value={formData.colonia}
        onChangeText={(text) => handleChange("colonia", text)}
      />

      <Text style={styles.label}>Estado</Text>
      <TextInput
        style={styles.input}
        placeholder="Querétaro"
        value={formData.estado}
        onChangeText={(text) => handleChange("estado", text)}
      />

      <Text style={styles.label}>Referencias adicionales</Text>
      <TextInput
        style={{ ...styles.input, ...styles.labelDescripcion }}
        placeholder="Referencias adicionales (opcional)"
        multiline
        value={formData.referencias}
        onChangeText={(text) => handleChange("referencias", text)}
      />

      <TouchableOpacity
        style={styles.imageContainerComprobante}
        onPress={() => pickImage(2)}
      >
        <Image source={{ uri: imageComprobante }} style={styles.imageComprobante} />
        {/* Poner icono de camara de fontawesome */}
        <FontAwesomeIcon
          style={styles.iconCameraComrobante}
          icon={faCamera}
          size={24}
          color="#373737"
        />
      </TouchableOpacity>
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
  imageContainer: {
    alignItems: "center",
    width: "100%",
    height: 200,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
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
  imageContainerComprobante: {
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#F5F5F5",
  },
  iconCameraComrobante: {
    position: "absolute",
    //Posicionar al centro
    top: 10,
    left: "50%",
  },
    imageComprobante: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    },
});
