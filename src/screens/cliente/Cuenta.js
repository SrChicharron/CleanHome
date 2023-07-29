import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView, StatusBar, TextInput } from 'react-native'
import React, {useState} from 'react'
import {FontAwesome, Foundation} from '@expo/vector-icons'
import ProfileImg from '../../assets/images/welcome1.jpg'
import ResenaCard from '../../components/ResenaCard'
import { useNavigation } from '@react-navigation/native';

export default function Cuenta() {
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };
  const iraEditar=()=>{
    navigation.navigate("EditarInfo")
  }
  return (
    
    <SafeAreaView style={styles.main}>

      <View style={{alignSelf:"flex-end",marginRight:10}}>
      <TouchableOpacity onPress={iraEditar} style={{flexDirection:"row",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
        <Text style={styles.textEditar}>Editar</Text>
        <FontAwesome name="edit" size={24} color="black" />
      </TouchableOpacity>
      </View>

      
      
        
      <View style={styles.viewCardCuenta}>
        <Image source={ProfileImg} style={styles.profileImg}/>
        <TouchableOpacity style={styles.buttonEditImg}>
        <Text style={styles.textButton}>Editar</Text>
        </TouchableOpacity>

        <Text style={styles.textName}>Nombre Apellido</Text>
        <Text>Rol (Trabajador/Cliente)</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>

      <Text style={styles.textInfo}>Información de Nombre</Text>
      <Text style={styles.textInfoDescription}>Me dedico a trabajar la limpieza en general de las casas, puedo limpiar desde cuartos, cocinas, cocheras, baños, lavar trastes, barrer, trapear, todo lo que sea necesario para dejar tu casa limpia.</Text>
      
      <View style={styles.viewIconData}>
        <FontAwesome name="user-o" size={24} color="gray" />
        <Text style={styles.textInfoDescription2}>Nombre Apellido1 Apellido2</Text>
      </View>
     

      <View style={styles.viewIconData}>
        <FontAwesome name="envelope-o" size={24} color="gray" />
        <Text style={styles.textInfoDescription2}>correoexample@example.com</Text>
      </View>
     

      <View style={styles.viewIconData}>
        <FontAwesome name="phone" size={24} color="gray" />
        <Text style={styles.textInfoDescription2}>123 456 7890</Text>
      </View>
     

      <View style={styles.viewIconData}>
        <FontAwesome name="birthday-cake" size={24} color="gray" />
        <Text style={styles.textInfoDescription2}>xx años</Text>
      </View>
      

      <View style={styles.viewIconData}>
        <Foundation name="male-symbol" size={34} color="gray" />
        <Text style={styles.textInfoDescription2}>sexo</Text>
      </View>
      

      <Text style={styles.textResenas}>Lo que dicen los anfitriones sobre mi</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ResenaCard/>
          <ResenaCard/>
          <ResenaCard/>
      </ScrollView>
      
      </ScrollView>
      
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  main:{
    flex:1
  },
  scrollViewContent:{
    flexGrow:1
  },
  textEditar:{
    textAlign:'right',
    color: '#6E6E6E',
    fontSize: 16,
  },
  viewCardCuenta:{
    alignSelf:'center',
    width:'90%',
    backgroundColor: '#fff', 
    borderRadius: 10,
    elevation: 5, // Esto agregará la sombra en Android
    shadowColor: '#000', // Esto agregará la sombra en iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent:"center",
    alignItems:'center'
  },
  profileImg:{
    width:150,
    height:150,
    borderRadius:100,
    marginTop:-20
  },
  buttonEditImg:{
    bottom:15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height:'15%',
    width:'30%',
    elevation: 5, // Esto agregará la sombra en Android
    shadowColor: '#000', // Esto agregará la sombra en iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textButton:{
    fontSize:16,
    color:'#000'
  },
  textName:{
    fontSize:25,
    fontWeight:'bold'
  },
  textInfo:{
    fontSize:18,
    margin:10,
    fontWeight:'bold'
  },
  textInfoDescription:{
    fontSize:15,
    margin:10,
    textAlign:'justify'
  },
  textInfoDescription2:{
    fontSize:17,
    margin:5,
    textAlign:'left',
    color:'gray',
    marginLeft:10
  },
  viewIconData:{
    flexDirection:'row',
    margin:10,
    alignContent:'center',
    alignItems:'center',
  },
  line:{
    borderBottomWidth: 2,
    borderColor: 'gray',
    marginLeft:10,
    marginRight:10
  },
  textResenas:{
    fontSize:22,
    fontWeight:'bold',
    textAlign:"center"
  },
  textInputs:{
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    padding: 10, 
    width:'90%',
    marginLeft:10
  }
})