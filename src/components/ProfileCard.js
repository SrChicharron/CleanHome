import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import ProfileImg from '../assets/images/ImgProfile.png'
import VerificateIcon from '../assets/icons/VerificateIcon.svg'

export default function ProfileCard( props ) {
    const { nombre, apellido, foto, rol } = props;
  return (
    <View style={styles.container}>
        <View style={styles.containerImage}>
            <Image source={ProfileImg} style={styles.profileImg}/>
            <VerificateIcon height={30} width={30} style={styles.iconVerif}/>
        </View>
        <Text style={styles.txtName}>{nombre}Carlos Ricardo {apellido}Espinoza Pliego</Text>
        <Text style={styles.txtRol}>{rol}Trabajador</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
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