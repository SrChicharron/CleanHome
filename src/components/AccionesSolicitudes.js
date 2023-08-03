import { View, Text,Modal, StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'

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
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>

            <TouchableOpacity onPress={toggleModal} style={styles.buttonX}>
              <Text style={{fontSize:22,color:'#000',textAlign:'center'}}>x</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleModal} style={styles.buttonAceptar}>
              <Text style={styles.textButtons}>Aceptar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleModal} style={styles.buttonRechazar}>
              <Text style={styles.textButtons}>Rechazar</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
  )
}

const styles=StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width:'90%',
        height:'30%'
      },
      buttonAceptar:{
        width:'90%',
        height:'30%',
        backgroundColor:'#075493',
        borderRadius:5,
        margin:15,
        justifyContent:'center',
        alignItems:'center'
      },
      buttonRechazar:{
        width:'90%',
        height:'30%',
        backgroundColor:'#E73C3C',
        borderRadius:5,
        margin:10,
        justifyContent:'center',
        alignItems:'center'
      },
      buttonX:{
        width:'8%',
        backgroundColor:'#E6E6E6',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end',
      },
      textButtons:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FFF',
        textAlign:'center'
      }
})