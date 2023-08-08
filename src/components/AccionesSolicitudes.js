import { View, Text,Modal, StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function AccionesSolicitudes(props) {
    //Usar toggleModal para cerrar el modal
    const {isModalVisible, toggleModal} = props;
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <>
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <TouchableOpacity style={ styles.closeButton } onPress={toggleModal}>
                    <FontAwesomeIcon
                        icon={faXmark}
                        style={styles.iconClose}
                        size={24}
                /></TouchableOpacity>

                <TouchableOpacity onPress={null} style={{...styles.buttonAceptar, ...styles.btn}}>
                    <Text style={styles.textButtons}>Aceptar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={null} style={{...styles.buttonRechazar, ...styles.btn}}>
                    <Text style={styles.textButtons}>Rechazar</Text>
                </TouchableOpacity>
            </View>
        </View>
      </>
    </Modal>
  );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.1)'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 32,
        borderRadius: 10,
        alignItems: 'center',
        width:'80%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        position: 'absolute',
        alignSelf: 'flex-end',
        top: 8,
        right: 8,
    },
    iconClose: {
        color: '#075493',
    },
    btn: {
        width:'100%',
        borderRadius:5,
        paddingVertical: 8,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonAceptar:{
        backgroundColor:'#075493',
        marginBottom: 16,
    },
    buttonRechazar:{
        backgroundColor:'#F44336',
    },
    textButtons: {
        color: '#fff',
        fontSize: 16,
        letterSpacing: 2,
        fontWeight: 'bold',
    }
})