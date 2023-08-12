import axios from 'axios'
//import {API_URL} from '@env'
const API_URL= 'http://192.168.200.218:2813/ch'
export const fetchEstados = async () => {
  try {
    const response = await axios.get(API_URL+"/catalogo/getEstados");
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export const fetchTipos = async () => {
    try {
      const response = await axios.get(API_URL+"/catalogo/getTipos");
      return response.data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  export const fetchPropiedades = async (idCliente) => {
    try {
      const response = await axios.get(API_URL+"/propiedad/getPropiedades?idCliente="+idCliente);
      return response.data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
//registro de propiedades en 3 pasos
  export const registrarPropiedad = async(formData, fotos, comprobantes)=>{

    axios({
      method:"POST",
      url:API_URL+"/propiedad/addPropiedad",
      data: JSON.stringify(formData),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
        "Content-Type": "application/json",
      },
  }).then(response=>{
    console.log(response.data);
    console.log(fotos)
    //si se envian fotos se guardan
    if(fotos.length>0){
      const uploadFotos=subirFotosPropiedad(fotos, response.data.id);
    }
    //se guardan comprobantes
    if(comprobantes.length>0){
      const uploadFotos=subirComprobantesPropiedad(comprobantes, response.data.id);
    }
    return response.data;
  }).catch(error=>{
  console.log(error);
  })
  
  }

  export const subirFotosPropiedad = async(fotos, idPropiedad)=>{
  const formData = new FormData();

  fotos.forEach((uri, index) => {
      let filename = uri.split('/').pop();
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      formData.append('fotos', { uri, name: filename, type });
  });

  formData.append('idPropiedad', idPropiedad);
  try {
      const response = await axios.post(API_URL+'/propiedad/addFotos', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      } );
      console.log("Fotos Upload success!", response.data);
  } catch (error) {
      console.error("Error uploading Fotos:", error);
  }
  }

  export const subirComprobantesPropiedad = async(comprobantes, idPropiedad)=>{
    const formData = new FormData();
  
    comprobantes.forEach((uri, index) => {
        let filename = uri.split('/').pop();
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;
  
        formData.append('comprobantes', { uri, name: filename, type });
    });
    formData.append('idPropiedad', idPropiedad);
    try {
        const response = await axios.post(API_URL+'/propiedad/addComprobantes', formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        } );
        console.log("comprobantes Upload success!", response.data);
    } catch (error) {
        console.error("Error uploading comprobantes:", error);
    }
    }


    export const deletePropiedad = async(formData)=>{
      axios({
        method:"POST",
        url:API_URL+"/propiedad/deletePropiedad",
        data: JSON.stringify(formData),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
          "Content-Type": "application/json",
        },
    }).then(response=>{
      console.log(response.data);
      return response.data;
    }).catch(error=>{
    console.log(error);
    })
    
    }