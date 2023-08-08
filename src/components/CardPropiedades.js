import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import HouseAspiradora from "../assets/images/HouseAspiradora.png";

export default function CardPropiedades(props) {
  const {
    formData,
    onLongPress,
  } = props;

  // Cons para hacer la dirección con los datos de formData
    const direccion = formData.calle + " " + formData.numero + ", " + formData.colonia + ", " + formData.codigoPostal + ", " + formData.estado;
  return (
    <TouchableOpacity
      style={styles.containerCard}
      activeOpacity={1}
      onLongPress={onLongPress}
    >
      <>
        <Image source={HouseAspiradora} style={styles.img} />
        <View style={styles.containerInfo}>
          <Text style={styles.txtDireccion}>
            {direccion}Torres Bases, Querétaro, Qro.
          </Text>
          <Text style={styles.txtTituloCasa}>{formData.tituloCasa}Casa del centro</Text>
          <Text style={styles.txtTituloCasa}>
            Tipo de propiedad: {formData.tipoPropiedad}Casa
          </Text>
          <Text style={styles.txtReferencias}>
            {formData.referencias}La casa está ubicada entre calle Revolución y Av Paseo
            de las Peñas
          </Text>
          <View
            style={[
              styles.containerIsApproved,
              {
                backgroundColor:
                formData.estatus === "aprobado"
                    ? "#D4F4E2"
                    : formData.estatus === "rechazado"
                    ? "#EE7677"
                    : "#E6E6E6",
              },
            ]}
          >
            <Text style={[
              styles.txtIsApproved,
              {
                color:
                formData.estatus === "rechazado"
                    ? "#fff"
                    : "#000",
              },
            ]}>{formData.estatus}</Text>
          </View>
        </View>
      </>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    borderRadius: 8,
    marginBottom: 24,
  },
  img: {
    width: "100%",
    height: 250,
    borderRadius: 8,
    resizeMode: "center",
  },
  containerInfo: {},
  txtDireccion: {
    fontSize: 16,
    fontWeight: "bold",
  },
  txtTituloCasa: {
    fontSize: 14,
  },
  txtReferencias: {
    fontSize: 14,
    color: "#707070",
  },
  containerIsApproved: {
    backgroundColor: "#E6E6E6",
    borderRadius: 50,
    width: 100,
    paddingVertical: 4,
    //Alinearlo a la derecha
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },
  txtIsApproved: {
    textAlign: "center",
    fontSize: 12,

  },
});
