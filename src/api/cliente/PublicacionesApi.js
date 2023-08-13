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

// FUNCIÓN PARA EDITAR UNA PUBLICACIÓN
export const updatePublicacion = async (publicacion) => {
  console.log("editPublicacion ==> " + JSON.stringify(publicacion, null, 4))
  try {
    const response = await axios.post(`${API_URL}/updatePublicacion`, publicacion);
    console.log("Desde editPublicacion ---> " + response.data);
    return response.data.reverse();
  } catch (error) {
    console.log(error);
  }
}

// FUNCIÓN PARA ELIMINAR UNA PUBLICACIÓN
export const deletePublicacion = async (publicacion) => {
  console.log("deletePublicacion")
  try {
    const response = await axios.post(`${API_URL}/deletePublicacion`, publicacion);
    console.log("Desde deletePublicacion ---> " + response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}


// FUNCIÓN PARA OBTENER TODOS LOS SERVICIOS
export const getServicios = async () => {
  // console.log("getServicios")
  try {
    const response = await axios.get(`${API_URL_SERVICIO}/getServicios`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}


// FUNCIÓN PARA OBTENER TODAS LAS PROPIEDADES
export const getPropiedades = async () => {
  // console.log("getPropiedades")
  try {
    const response = await axios.get(`${API_URL_PROPIEDAD}/getPropiedades`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}


// FUNCIÓN PARA DAR DE ALTA UNA PUBLICACIÓN
export const addPublicacion = async (publicacion) => {
  console.log("addPublicacion")
  try {
    const response = await axios.post(`${API_URL}/addPublicacion`, publicacion);
    console.log("Desde addPublicacion ---> " + response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}