import axios from 'axios'
//import {API_URL} from '@env'
const API_URL= 'http://192.168.200.132:2813/ch'
export const fetchEstados = async (page) => {
  try {
    console.log(API_URL);  
    const response = await axios.get(API_URL+"/catalogo/getEstados");
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export const fetchTipos = async (page) => {
    try {
      console.log(API_URL);  
      const response = await axios.get(API_URL+"/catalogo/getTipos");
      return response.data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  export const fetchPropiedades = async (page) => {
    try {
      console.log(API_URL);  
      const response = await axios.get(API_URL+"/propiedad/getPropiedades");
      return response.data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
