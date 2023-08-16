import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from "react";
import ProfileImg from '../assets/images/ImgProfile.png'
import VerificateIcon from '../assets/icons/VerificateIcon.svg'
import * as ImagePicker from "expo-image-picker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark, faCamera } from "@fortawesome/free-solid-svg-icons";

export default function ProfileCard( props ) {
    const { userData } = props; 

  return (
    <View style={styles.container}>
        <View style={styles.containerImage}>
            <Image source={{uri: userData.foto}} style={styles.profileImg}/>
            <VerificateIcon height={30} width={30} style={styles.iconVerif}/>
        </View>
        <Text style={styles.txtName}>{userData.name} {userData.lastname}</Text>
        <Text style={styles.txtRol}>{userData.username}</Text>
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