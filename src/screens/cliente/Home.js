import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import PublicacionesActivas from "./home-publicaciones/PublicacionesActivas";
import PublicacionesAceptadas from "./home-publicaciones/PublicacionesAceptadas";
import PublicacionesFinalizadas from "./home-publicaciones/PublicacionesFinalizadas";
import useAuth from "../../hooks/UseAuth";
import {
  getPublicaciones,
  updatePublicacion,
  deletePublicacion,
  getServicios,
  getPropiedades,
  addPublicacion
} from "../../api/cliente/PublicacionesApi";

export default function Home() {
  const { auth } = useAuth();
  const [activeOption, setActiveOption] = useState("activo");
  const [publicaciones, setPublicaciones] = useState([]);
  const [mensajes, setMensajes] = useState("");
  const [listaServicios, setListaServicios] = useState([]);
  const [listaPropiedades, setListaPropiedades] = useState([]);

  // console.log(" Auth = " + JSON.stringify(auth, null, 4));

  useEffect(() => {
    loadPublicaciones();
    loadServiciosPropiedades();
  }, [publicaciones]);

  const loadServiciosPropiedades = async () => {
    const responseServicios = await getServicios();
    setListaServicios(responseServicios);
    const responsePropiedades = await getPropiedades();
    setListaPropiedades(responsePropiedades);
  };

  const loadPublicaciones = async () => {
    const responseData = await getPublicaciones();
    setPublicaciones(responseData.reverse());
  };

  const handleFilterClick = (filtro) => {
    setActiveOption(filtro);
  };

  // FUNCIÓN PARA ELIMINAR UNA PUBLICACIÓN
  const onDeletePublicacion = async (publicacion) => {
    const responseData = await deletePublicacion(publicacion);
    console.log("responseData = " + JSON.stringify(responseData));
    setMensajes(responseData);
    // Actualizar publicaciones eliminando la publicación
    const updatedPublicaciones = publicaciones.filter(
      (item) => item.id !== publicacion.id
    );
    setPublicaciones(updatedPublicaciones);
  };

  // FUNCIÓN PARA ACTUALIZAR UNA PUBLICACION
  const onUpdatePublicacion = async (publicacion) => {
    const responseData = await updatePublicacion(publicacion);
    console.log("responseData ACTUALIZAR  ===>>>>>>>>  " + JSON.stringify(responseData));
    setMensajes(responseData);
    // Actualizar publicaciones
    const updatedPublicaciones = publicaciones.map((item) => {
      if (item.id === publicacion.id) {
        return publicacion;
      }
      return item;
    });
    setPublicaciones(updatedPublicaciones);
  };

  const onAddPublicacion = async (publicacion) => {
    const responseData = await addPublicacion(publicacion);
    console.log("responseData ===>>>>>>>>  " + JSON.stringify(responseData));
    setMensajes(responseData);
    // Actualizar publicaciones
    const updatedPublicaciones = publicaciones.map((item) => {
      if (item.id === publicacion.id) {
        return publicacion;
      }
      return item;
    });
    setPublicaciones(updatedPublicaciones);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerFilter}>
        <TouchableOpacity
          style={[
            styles.containerTextFilter,
            activeOption === "activo" && styles.activeOptionBtnFilter, // Estilo condicional para el botón activo
          ]}
          onPress={() => handleFilterClick("activo")}
        >
          <Text
            style={[
              styles.textFilter,
              activeOption === "activo" && styles.activeOptionTxtBtnFilter,
            ]}
          >
            Activos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.containerTextFilter,
            activeOption === "aceptados" && styles.activeOptionBtnFilter, // Estilo condicional para el botón activo
          ]}
          onPress={() => handleFilterClick("aceptados")}
        >
          <Text
            style={[
              styles.textFilter,
              activeOption === "aceptados" && styles.activeOptionTxtBtnFilter,
            ]}
          >
            Aceptados
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.containerTextFilter,
            activeOption === "finalizados" && styles.activeOptionBtnFilter, // Estilo condicional para el botón activo
          ]}
          onPress={() => handleFilterClick("finalizados")}
        >
          <Text
            style={[
              styles.textFilter,
              activeOption === "finalizados" && styles.activeOptionTxtBtnFilter,
            ]}
          >
            Finalizados
          </Text>
        </TouchableOpacity>
      </View>

      {activeOption === "activo" && (
        <PublicacionesActivas
          publicaciones={publicaciones}
          onDeletePublicacion={(publicacion) => onDeletePublicacion(publicacion)}
          onUpdatePublicacion={(publicacion) => onUpdatePublicacion(publicacion)}
          onAddPublicacion={(publicacion) => onAddPublicacion(publicacion)}
          listaServicios={listaServicios}
          listaPropiedades={listaPropiedades}
        />
      )}
      {activeOption === "aceptados" && (
        <PublicacionesAceptadas publicaciones={publicaciones} />
      )}
      {activeOption === "finalizados" && (
        <PublicacionesFinalizadas
          publicaciones={publicaciones}
          setActiveOption={setActiveOption}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    flex: 1,
  },
  containerFilter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingBottom: 8,
    width: "100%",
  },
  containerTextFilter: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    width: "30%",
    textAlign: "center",
    alignItems: "center",
  },
  activeOptionBtnFilter: {
    color: "#E6E6E6",
  },
  activeOptionTxtBtnFilter: {
    color: "#075493",
    fontWeight: "bold",
  },
});
