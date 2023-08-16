import { View, Text } from 'react-native'


import React from 'react'
import axios from 'axios'


const API_URL= 'https://cleanhomeapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/ch/publicacion'
const API_URL_SERVICIO= 'https://cleanhomeapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/ch/servicio'
const API_URL_PROPIEDAD= 'https://cleanhomeapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/ch/propiedad'

// FUNCIÓN PARA OBTENER LAS PUBLICACIONES DE UN CLIENTE
export const getPublicaciones = async () => {
  console.log("getPublicaciones")
  try {
    const response = await axios.get(`${API_URL}/getPublicaciones`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

