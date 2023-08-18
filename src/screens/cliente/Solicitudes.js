import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import SinSolicitudes from "../../components/SinSolicitudes";
import SolicitudesCard from "../../components/SolicitudesCard";
import useAuth from "../../hooks/UseAuth";
import axios from "axios";
import Toast from "react-native-toast-message";

export default function Solicitudes() {
  const { auth, logout } = useAuth();
  const token = auth.token;
  const [solicitudes, setSolicitudes] = useState([]);
  const urlgetInfo = `http://clenhometm.trafficmanager.net:2813/ch/auth/getUsuario/${auth.username}`;
  const urlGetSolicitudes = `http://clenhometm.trafficmanager.net:2813/ch/postulacion/getPostulacionesCliente`;
  const [idCliente, setIdCliente] = useState();

  useEffect(() => {
    getSolicitudes();
    getInfoUsuario();
  }, [solicitudes]);

  const getInfoUsuario = async () => {
    try {
      const response = await axios.get(urlgetInfo);
      setIdCliente(response.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const getSolicitudes = async () => {
    try {
      const response = await axios.get(urlGetSolicitudes, {
        params: { idCliente: idCliente },
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setSolicitudes(response.data);
      console.log("solicitdes desde getSolicitudes ==== > ", + JSON.stringify(solicitudes, null, 4));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {solicitudes ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {solicitudes.map((solicitud, index) => (
            <SolicitudesCard key={index} solicitudes={solicitud} getSolicitudes={getSolicitudes} />
          ))}
        </ScrollView>
      ) : (
        <SinSolicitudes
          mensajeTitulo="No tienes solicitudes"
          mensajeDescripcion="Asegurate de tener publicaciones"
          txtBtn="Espera a que alguien se postule."
        />
      )}
      <Toast topOffset={20} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#fff",
    flex: 1,
  },
});
