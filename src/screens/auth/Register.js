import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../../assets/logo/isotipo.svg';
import ImgLogin from '../../assets/images/login.jpg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RegisterForm from '../../components/RegisterForm';

export default function Register() {
  return (
    <SafeAreaView>
      <Image source={ImgLogin} style={styles.imgBack} />
      <View style={styles.container}>
        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
          keyboardShouldPersistTaps="handled"
        >
          <BlurView intensity={100} tint="light" style={styles.blurContainer}>
            <RegisterForm />
          </BlurView>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  )
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
    paddingTop: 120,

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
