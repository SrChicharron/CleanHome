import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'

const API_URL= 'https://cleanhomeapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/ch/publicacion'

export const getPublicaciones = async () => {
  console.log("getPublicaciones")
  try {
    const response = await axios.get(`${API_URL}/getPublicaciones`);
    console.log("Desde getPublicaciones ---> " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
  }
}