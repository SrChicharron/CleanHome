import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import SinSolicitudes from "../../../components/SinSolicitudes";
import PublicacionesList from "../../../components/cliente/PublicacionesList";

export default function PublicacionesFinalizadas( { publicaciones, setActiveOption } ) {
  console.log("Desde publicaciones activa ---> ")

  return (
    <View style={styles.container}>
      {!publicaciones || publicaciones.length === 0 && (
        <SinSolicitudes
          mensajeTitulo="No tienes publicaciones finalizadas"
          mensajeDescripcion="Asegurate de finalizar tus publicaciones y calificar a los trabajadores"
          txtBtn="Ir a mis publicaciones"
          onPressBtn={() => setActiveOption('aceptados')}
        />
      )}

      <PublicacionesList
        publicaciones={publicaciones}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
  },
  containerLinkAdd: {
    alignItems: "flex-end",
  },
  containerBtnLinkAdd: {
    borderRadius: 8,
    marginBottom: 16,
  },
  txtAdd: {
    color: "#A3A3A3",
    textDecorationLine: "underline",
    fontSize: 16,
    letterSpacing: 0.5,
  },
});
