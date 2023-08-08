import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Linking
} from "react-native";
import React, { useState } from "react";
import Room from "../../assets/images/room.jpg";
import WhatsAppIcon from "../../assets/icons/WhatsAppIcon.svg";

export default function CardPostulaciones(props) {
    const { activeOpacity, onLongPress, isAceppted, formData } = props;
    

    const openWhatsAppchat = () => {

        const urlOpenWhatsApp = `https://wa.me/${formData.phoneNumber}`;

        Linking.canOpenURL(urlOpenWhatsApp)
            .then(supported => {
                if (supported) {
                    Linking.openURL(urlOpenWhatsApp);
                } else {
                    console.log("Don't know how to open URI: " + urlOpenWhatsApp);
                }
            })
            .catch(err => console.error("An error occurred", err));
    }
    return (
        <TouchableOpacity
            style={styles.containerCard}
            activeOpacity={activeOpacity}
            onLongPress={onLongPress}
        >
            <Image source={Room} style={styles.img} />
            <View style={styles.containerInfo}>
                <Text style={styles.txtDireccion}>{formData.direccion}</Text>
                <Text style={styles.txtPropietario}>{formData.propietario}</Text>
                <View style={styles.containerDescription}>
                    <Text style={styles.txtDescripcion}>{formData.descripcion}</Text>

                </View>
                <Text style={styles.txtSueldo}>${formData.sueldo} </Text>
                <Text style={styles.txtFecha}>{formData.fechaPublicacion}</Text>
            </View>
            {/* validación si formData.isAceppted es aceptado aparezca el icono de whatsapp */}
            {isAceppted === 'aceptado' && (
                <TouchableOpacity onPress={openWhatsAppchat}>
                    <WhatsAppIcon style={styles.waIcon} width={24} height={24} />
                </TouchableOpacity>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerCard: {
        width: "99%",
        height: 130,
        margin: 2,
        marginBottom: 16,
        flexDirection: "row",
    },
    img: {
        width: "40%",
        height: 130,
        borderRadius: 8,
        resizeMode: "center",
        marginRight: 16,
    },
    containerInfo: {
        width: "55%",
        justifyContent: "space-between",
    },
    txtDireccion: {
        fontSize: 14,
        fontWeight: "bold",
    },
    txtPropietario: {
        fontSize: 12,
    },
    containerDescription: {
        maxHeight: 50,
    },
    txtDescripcion: {
        fontSize: 12,
        color: "#707070",
    },
    txtSueldo: {
        fontSize: 12,
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
    txtFecha: {
        fontSize: 12,
    },
    waIcon: {
        position: "absolute",
        right: 0,
        bottom: 0,
    }
});
