import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { FontAwesome } from "@expo/vector-icons"; // Importa la librería de íconos FontAwesome
import HomeTrabajador from "../screens/trabajador/Home";
import HomeCliente from "../screens/cliente/Home";
import CuentaTrabajador from "../screens/trabajador/Cuenta";
import CuentaCliente from "../screens/cliente/Cuenta";
import PostulacionesTrabajador from "../screens/trabajador/Postulaciones";
import SolicitudesCliente from "../screens/cliente/Solicitudes";
import PropiedadesCliente from "../screens/cliente/Propiedades";
import NavigationTrabajador from "./NavigationTrabajador";
import NavigationCliente from "./NavigationCliente";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faHouse,
    faUser,
    faPaperPlane,
    faHouseChimneyMedical,
} from "@fortawesome/free-solid-svg-icons";

export default function BottomNavigation({ userRole }) {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: styles.mainContainer,
                tabBarLabelStyle: ({ focused }) => ({
                    fontSize: focused ? 14 : 12,
                    color: focused ? "#075493" : "#A3A3A3", // Cambiar el color cuando la pantalla esté enfocada o no
                }),
            }}
        >
            {userRole === "ROLE_EMPLEADO" ? (
                <>
                    <Tab.Screen
                        name="HomeTrabajador"
                        component={NavigationTrabajador}
                        options={{
                            tabBarLabel: "Inicio",
                            tabBarIcon: ({ focused }) => (
                                <FontAwesomeIcon
                                    icon={faHouse}
                                    style={{ color: focused ? "#075493" : "#a3a3a3" }}
                                    size={24}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="PostulacionesTrabajador"
                        component={PostulacionesTrabajador}
                        options={{
                            tabBarLabel: "Postulaciones",
                            tabBarIcon: ({ focused, color, size }) => (
                                <FontAwesomeIcon
                                    icon={faPaperPlane}
                                    style={{ color: focused ? "#075493" : "#a3a3a3" }}
                                    size={24}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="CuentaTrabajador"
                        component={CuentaTrabajador}
                        options={{
                            tabBarLabel: "Cuenta",
                            tabBarIcon: ({ focused, color, size }) => (
                                <FontAwesomeIcon
                                    icon={faUser}
                                    style={{ color: focused ? "#075493" : "#a3a3a3" }}
                                    size={24}
                                />
                            ),
                        }}
                    />
                </>
            ) : (
                <>
                    <Tab.Screen
                        name="HomeCliente"
                        component={NavigationCliente}
                        options={{
                            tabBarLabel: "Inicio",
                            tabBarIcon: ({ focused }) => (
                                <FontAwesomeIcon icon={faHouse} style={{ color: focused ? '#075493' : '#a3a3a3', }} size={24} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="PropiedadesCliente"
                        component={PropiedadesCliente}
                        options={{
                            tabBarLabel: "Propiedades",
                            tabBarIcon: ({ focused, color, size }) => (
                                <FontAwesomeIcon icon={faHouseChimneyMedical} style={{ color: focused ? '#075493' : '#a3a3a3', }} size={24} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="SolictudesCliente"
                        component={SolicitudesCliente}
                        options={{
                            tabBarLabel: "Solicitudes",
                            tabBarIcon: ({ focused, color, size }) => (
                                <FontAwesomeIcon icon={faPaperPlane} style={{ color: focused ? '#075493' : '#a3a3a3', }} size={24} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="CuentaCliente"
                        component={CuentaCliente}
                        options={{
                            tabBarLabel: "Cuenta",
                            tabBarIcon: ({ focused, color, size }) => (
                                <FontAwesomeIcon icon={faUser} style={{ color: focused ? '#075493' : '#a3a3a3', }} size={24} />
                            ),
                        }}
                    />
                </>
            )}
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 55,
        paddingTop: 7,
    },
    icon: {
        color: "#075493",
        fontSize: 24,
    },
});
