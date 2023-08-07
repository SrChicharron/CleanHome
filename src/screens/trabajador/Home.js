import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';

import PubLimpiezaprofunda from './Home-tipolimpieza/PubLimpiezaprofunda';
import PubEspacioscomerciales from './Home-tipolimpieza/PubEspacioscomerciales';
import PubOrganizacionyorden from './Home-tipolimpieza/PubOrganizacionyorden';

export default function Home() {
  const [activeOption, setActiveOption] = useState('Limpiezaprofunda');

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };
  

 

  return (
    <View style={styles.container}>
      <View style={styles.containerFilter}>
        <ScrollView contentContainerStyle={styles.scrollContent} horizontal>
        <TouchableOpacity
  style={[
    styles.containerTextFilter,
    activeOption === 'Limpiezaprofunda' && styles.activeOptionBtnFilter,
  ]}
  onPress={() => handleOptionClick('Limpiezaprofunda')}
>
  <Text style={[styles.textFilter, activeOption === 'Limpiezaprofunda' && styles.activeOptionTxtBtnFilter]}>
    Limpieza profunda
  </Text>
</TouchableOpacity>
<TouchableOpacity
  style={[
    styles.containerTextFilter,
    activeOption === 'Espacioscomerciales' && styles.activeOptionBtnFilter,
  ]}
  onPress={() => handleOptionClick('Espacioscomerciales')}
>
  <Text style={[styles.textFilter, activeOption === 'Espacioscomerciales' && styles.activeOptionTxtBtnFilter]}>
    Espacio comercial
  </Text>
</TouchableOpacity>
<TouchableOpacity
  style={[
    styles.containerTextFilter,
    activeOption === 'Organizacionyorden' && styles.activeOptionBtnFilter,
  ]}
  onPress={() => handleOptionClick('Organizacionyorden')}
>
  <Text style={[styles.textFilter, activeOption === 'Organizacionyorden' && styles.activeOptionTxtBtnFilter]}>
    Organización y orden
  </Text>
</TouchableOpacity>
        </ScrollView>
      </View>
      {activeOption === 'Limpiezaprofunda' && <PubLimpiezaprofunda />}
      {activeOption === 'Espacioscomerciales' && <PubEspacioscomerciales />}
      {activeOption === 'Organizacionyorden' && <PubOrganizacionyorden/>}

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  containerFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingBottom: 10,
    width: '100%',
  },
  containerTextFilter: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    width: '30%',
    marginHorizontal: 20,
    alignItems: 'center',
    flex: 1,
  },
  activeOptionBtnFilter: {
    color: '#E6E6E6',
  },
  activeOptionTxtBtnFilter: {
    color: '#075493',
    fontWeight: 'bold',
  },
  textFilter: {
    textAlign: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    paddingBottom: 20,
  },
});
