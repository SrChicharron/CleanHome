import axios from 'axios'

// const API_URL= 'https://cleanhomeapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/ch/publicacion'
const API_URL= 'http://192.168.0.16:2813/ch/postulacion'
const API_URL_RESENA = 'http://192.168.0.16:2813/ch/resena'


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

// FUNCIÓN PARA AÑADIR UNA RESEÑA
export const addResena = async (resena) => {
  console.log("Esto es lo que llegó a la api de addResena: ", resena)
  try {
    const response = await axios.post(`${API_URL_RESENA}/addResena`, resena);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}