import axios from 'axios'


// const API_URL= 'https://cleanhomeapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/ch/publicacion'
const API_URL= 'http://192.168.0.16:2813/ch/postulacion'
const API_URL_RESENA = 'http://192.168.0.16:2813/ch/resena'
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

export const getPostulaciones = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/getPostulacionesEmpleado?idEmpleado=${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// FUNCIÓN PARA ACTUALIZAR POSTULACIÓN
export const updatePostulacion = async (postulacion) => {
  console.log("Esto es lo que llegó a la api de updatePostulacion: ", postulacion)
  try {
    const response = await axios.post(`${API_URL}/updatePostulacion`, postulacion);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
