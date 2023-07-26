import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/atoms/Button";


export default function RegisterForm() {
    const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const handleRegister = () => {
    console.log("Registrando...")
    //Imprimir los datos que se mandaron
    console.log(email, password, firstName, lastName, phoneNumber)
    // Aquí puedes escribir la lógica para enviar los datos de registro a la API
    // Puedes utilizar fetch u otras librerías para realizar la solicitud HTTP
    // y procesar la respuesta de la API
    // Por ejemplo:
    /*
    fetch("URL_DE_LA_API/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Aquí puedes manejar la respuesta de la API después del registro exitoso
        console.log(data);
        // Redirigir a otra pantalla o realizar alguna acción adicional
      })
      .catch((error) => {
        // Aquí puedes manejar errores durante el registro
        console.error(error);
      });*/
  };

  return (
    <>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Celular"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Repetir contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Button txtBtn="Crear cuenta" onPress={handleRegister} />

      <TouchableOpacity
        style={styles.registerLink}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.registerLinkText}>
          ¿Ya tienes cuenta? <Text style={{ color: "#075493" }}>Inicia sesión</Text>
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  registerLink: {
    marginTop: 20,
  },
  registerLinkText: {
    color: "#6E6E6E",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});