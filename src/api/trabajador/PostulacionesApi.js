import axios from 'axios'

const API_URL= 'https://cleanhomeapi.ashymeadow-04120cb0.westus2.azurecontainerapps.io/ch/publicacion'


export const getPostulaciones = async () => {
  console.log("getPostulaciones")
  try {
    const response = await axios.get(`${API_URL}/getPublicaciones`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}