import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from "react";
import ProfileImg from '../assets/images/ImgProfile.png'
import VerificateIcon from '../assets/icons/VerificateIcon.svg'
import * as ImagePicker from "expo-image-picker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark, faCamera } from "@fortawesome/free-solid-svg-icons";

export default function ProfileCard( props ) {
    const { formData, handleChange, auth, infoUser } = props; 
    const [image, setImage] = useState(null);
    
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            handleChange("urlImgProfile", result.assets[0].uri);
        }
      };

  return (
    
    <View style={styles.container}>
        <TouchableOpacity 
            style={styles.containerImage} 
            onPress={() => pickImage()}
        >
            <Image style={styles.profileImg}/>
            <VerificateIcon height={30} width={30} style={styles.iconVerif}/>
        </TouchableOpacity>
        <Text style={styles.txtName}>{infoUser?infoUser.name:''} {infoUser?infoUser.lastname:''}</Text>
        <Text style={styles.txtRol}>{auth.rol}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        width: '99%',
        height: 250,
        elevation: 5, // Esto agregará la sombra en Android
        shadowColor: '#000', // Esto agregará la sombra en iOS
        shadowOffset: {
        width: 0,
        height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    profileImg: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginBottom: 16,
    },
    containerImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 100,
        width: 150,
        height: 150,
    },
    iconVerif: {
        position: 'absolute',
        top: 5,
        right: 0,
    },
    txtName: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: 8,
    },
    txtRol: {
        fontSize: 16,
    }
})