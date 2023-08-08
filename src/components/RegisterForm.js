import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, FlatList } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";
import Button from "../components/atoms/Button";
import  { Picker }  from '@react-native-picker/picker' ;
import { format } from 'date-fns';


const options = [
  { label: 'Cliente', value: 'cliente' },
  { label: 'Trabajador', value: 'trabajador' },
];

export default function RegisterForm() {
  const navigation = useNavigation();
  const [showDatePicker, setShowDatePicker] = useState(false)
  
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [userRole, setUserRole] = useState(null); 

  const handleDateChange = (event, selectedDate) => {
    if (event.type === 'set') {
      setBirthDate(selectedDate);
    }
    setShowDatePicker(false);
  };

  const formattedBirthDate = format(birthDate, 'yyyy-MM-dd');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);


  const handleRegister = () => {
    const urlRegister = 'http://localhost:2813/ch/auth/register';

    const userData = {
      username: userName,
      email: email,
      password: password,
      cellphone: phoneNumber,
      name: firstName,
      lastName: lastName,
      birthday: formattedBirthDate,
      enabled: 0,
      authorities: [
        { authority: userRole, username: userName }
      ]
    };

    console.log(userData);

    fetch(urlRegister, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    .then(response => {
      if (!response.ok) {
        if (response.status === 409) {
          
          throw new Error("El nombre de usuario o el correo electrónico ya han sido utilizados");
        } else {
          throw new Error("Error al registrar el usuario,usuario o email ya registrado");
        }
      }
      return response.json();
    })
    
    .then(data => {
      setRegistrationSuccess(true); 
      console.log("Usuario registrado con éxito:", data);
    })
    .catch(error => {
      console.error(error);
    });
   
    
  }
 return (
    <>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={userName}
          onChangeText={setUserName}
        />
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
       <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
  <Text style={styles.inputLabel}>Fecha de nacimiento</Text>
  <Text style={styles.dateText}>
    {birthDate ? birthDate.toISOString() : 'Selecciona una fecha'}
  </Text>
</TouchableOpacity>

{showDatePicker && (
  <DateTimePicker
    value={birthDate}
    mode="date"
    is24Hour={true}
    display="default"
    onChange={handleDateChange}
  />
)}

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
 <Picker
          selectedValue={userRole}
          onValueChange={(itemValue) => setUserRole(itemValue)}
        >
          <Picker.Item /> 
          {options.map((option) => (
            <Picker.Item key={option.value} label={option.label} value={option.value} />
          ))}
        </Picker>
      </View>


      <Button txtBtn="Crear cuenta" onPress={() => {
  
  if (!userName || !email || !password || !firstName || !lastName || !phoneNumber || !birthDate || !userRole) {
    console.error("Por favor, completa todos los campos obligatorios.");
    return;
  }



  if (!phoneNumber.trim()) {
    console.error("El número de teléfono no debe estar vacío.");
    return;
  }

  if (!birthDate) {
    console.error("La fecha de nacimiento no debe estar vacía.");
    return;
  }
  handleRegister();
}} />

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
  label: {
    color: "#6E6E6E",
    marginBottom: 10,
    marginLeft: 3,
    textAlign: 'justify'
  },
  selectField: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  modalContainer1: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    marginBottom: 10, 
  },
  optionItem: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  dateText:{
    color: "#6E6E6E"
  },
  selectedOption: {
    color: "#6E6E6E"   
  },
  selectedOptionItem: { 
    backgroundColor: "#f0f0f0",
  },
  inputLabel:{
    color: "#6E6E6E"
  },
  successMessage: {
    color: "green",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
});