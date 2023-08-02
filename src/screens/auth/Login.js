import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../../assets/logo/isotipo.svg';
import LoginForm from '../../components/LoginForm';
import ImgLogin from '../../assets/images/login.jpg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Login() {
  

  
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('cliente');

  const handleLogin = () => {
    const urlLogin ='http://localhost:2813/ch/auth/signin'
    
              const loginData={
                username:email,
                password:password
              }
              //let formData= new FormData()
              // formData.append('username',email);
              // formData.append('password',password);
              console.log(loginData);

              axios({
                        method:"POST",
                        url:urlLogin,
                        data: JSON.stringify(loginData),
                        headers: {
                          "Access-Control-Allow-Origin": "*",
                          "Access-Control-Allow-Headers":
                            "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
                          "Content-Type": "application/json",
                        },
              }).then(response=>{
                console.log(response)
              }).catch(error=>{
                
                
                console.log(error);
            })
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
