import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../../assets/logo/isotipo.svg';
import LoginForm from '../../components/LoginForm';
import ImgLogin from '../../assets/images/login.jpg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('cliente');

  const handleLogin = () => {
    // Lógica para realizar la autenticación
    console.log('Iniciar sesión:', email, password);
    if (userRole === 'cliente') {
      navigation.navigate('NavigationCliente');
    } else if (userRole === 'trabajador') {
      navigation.navigate('NavigationTrabajador');
    } else {
      // Manejo para cuando el rol no es válido o la autenticación falla.
    }
  };

  return (
    <SafeAreaView>
      <Image source={ImgLogin} style={styles.imgBack}/>
      <View style={styles.container}>
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
          keyboardShouldPersistTaps="handled"
        >
          <BlurView intensity={100} tint="light" style={styles.blurContainer}>
            <Logo style={styles.logo} width={150} height={150}/>
            <Text style={styles.title}>Bienvenido a{"\n"}CLEAN HOME</Text>
            <Text style={styles.introText}>Encuentra a la persona perfecta para limpiar tu hogar en un solo lugar</Text>
            
            <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} />

          </BlurView>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  blurContainer: {
    flex: 1,
    paddingHorizontal: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  imgBack: {
    width: '100%',
    height: '115%',
    resizeMode: 'cover',
    marginTop: -50,
},
  logo: {
    width: 100,
    height: 100,
    marginTop: -30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    letterSpacing: 4,
  },
  introText: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    letterSpacing: 1,
  },
});
