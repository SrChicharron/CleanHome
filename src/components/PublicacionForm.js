import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";


export default function PublicacionForm( props ) {
    const { publicacion, handleChange } = props;
  
    const [listaServicios, setListaServicios] = useState([]);
    const [listaPropiedades, setListaPropiedades] = useState([]);
  
    // Simulación de llamada a API para obtener los servicios
    useEffect(() => {
      // Aquí puedes realizar una llamada real a una API para obtener los servicios disponibles
      // En este ejemplo, utilizaremos datos estáticos
      const mockServicios = [
        { id: 1, nombre: "Servicio 1" },
        { id: 2, nombre: "Servicio 2" },
        { id: 3, nombre: "Servicio 3" },
      ];
      setListaServicios(mockServicios);
  
      // Simulación de llamada a API para obtener las propiedades
      // Aquí también puedes hacer una llamada real a una API para obtener las propiedades disponibles
      const mockPropiedades = [
        { id: 1, nombre: "Propiedad 1" },
        { id: 2, nombre: "Propiedad 2" },
        { id: 3, nombre: "Propiedad 3" },
      ];
      setListaPropiedades(mockPropiedades);
    }, []);
  
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Tipo de servicio</Text>
        <Picker
            style={styles.picker}
          selectedValue={publicacion.idTipoServicio}
          onValueChange={(itemValue) => handleChange("idTipoServicio", itemValue)}
        >
          <Picker.Item label="Seleccione un servicio" value="" />
          {listaServicios.map((servicio) => (
            <Picker.Item
              key={servicio.id}
              label={servicio.nombre}
              value={servicio.id}
            />
          ))}
        </Picker>
  
        <Text style={styles.label}>Propiedad</Text>
        <Picker
            style={styles.picker}
            selectedValue={publicacion.idPropiedad}
            onValueChange={(itemValue) => handleChange("idPropiedad", itemValue)}
        >
          <Picker.Item label="Seleccione una propiedad" value="" />
          {listaPropiedades.map((propiedad) => (
            <Picker.Item
              key={propiedad.id}
              label={propiedad.nombre}
              value={propiedad.id}
            />
          ))}
        </Picker>
  
        <Text style={styles.label}>Pago ofrecido</Text>
        <TextInput
          style={styles.input}
          placeholder="$ 400 MXN"
          keyboardType="numeric"
          value={publicacion.pagoOfrecido}
          onChangeText={(text) => handleChange("pagoOfrecido", text)}
        />
  
        <Text style={styles.label}>Descripción del trabajo</Text>
        <TextInput
          style={{...styles.input, ...styles.labelDescripcion}}
          placeholder="Descripción del trabajo"
          multiline
          value={publicacion.descripcion}
          onChangeText={(text) => handleChange("descripcion", text)}
        />
  
      </View>
    );
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
