import { View, Text, Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Alert } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark, faCamera } from "@fortawesome/free-solid-svg-icons";
import EditProfileForm from "./EditProfileForm";
import axios from "axios";

export default function ModalEditPerfil(props) {
    const { modalVisible, closeModal, formData, handleChange, auth, infoUser } = props;
    const actualizarInfo = () => {
        const urlupdateInfo=`http://192.168.1.154:2813/ch/auth/editarInfoUser/${auth.username}`
        axios({
          method: "PUT",
          url: urlupdateInfo,
          data: JSON.stringify(formData),
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
            "Content-Type": "application/json",
          },
        }).then(response => {
          console.log(response.status)
          Alert.alert('Información atualizada con éxito!','Revisa que la información se haya guardado correctamente.')
          closeModal();
        }).catch(error => {
          console.log(error);
        })
      };
    
    return (
        <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={closeModal}
        >
            <View style={styles.modalContainer} >
                <View style={styles.containerForm}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>Editar perfil</Text>
                    </View>
                    <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                        <FontAwesomeIcon
                            icon={faXmark}
                            style={styles.iconClose}
                            size={24}
                        />
                    </TouchableOpacity>
                    <KeyboardAwareScrollView style={styles.bodyModal}>
                        {/* Formulario para crear una nueva publicación */}
                        <EditProfileForm formData={formData} handleChange={handleChange} auth={auth} infoUser={infoUser}/>
                    </KeyboardAwareScrollView>
                    <View style={styles.footerModal}>
                        {/* Botones para publicar y cancelar */}
                        <TouchableOpacity style={{ ...styles.btnCancelar, ...styles.btn }} onPress={closeModal} >
                            <Text style={styles.txtBtn}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={actualizarInfo} style={{ ...styles.btnPublicar, ...styles.btn }}>
                            <Text style={styles.txtBtn}>Editar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: "center",
        alignItems: "center",
    },
    containerForm: {
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: '100%',
        height: '80%',
        backgroundColor: '#fff',
    },
    closeButton: {
        position: 'absolute',
        alignSelf: 'flex-end',
    },
    iconClose: {
        alignSelf: 'flex-end',
        marginRight: 16,
        marginTop: 16,
        color: '#075493',

    },
    headerModal: {
        paddingVertical: 16,
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
    },
    titleModal: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
    bodyModal: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 80,
    },
    footerModal: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 16,
        borderTopColor: '#E6E6E6',
        borderTopWidth: 1,
    },
    btn: {
        width: '45%',
        paddingVertical: 8,
        borderRadius: 8,
        alignItems: 'center',
    },
    btnCancelar: {
        backgroundColor: '#EA5455',
    },
    btnPublicar: {
        backgroundColor: '#075493',
    },
    txtBtn: {
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
});
