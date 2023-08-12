import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import PublicacionCard from '../CardPublicaciones';

export default function PublicacionesList( props ) {
  const { publicaciones, onLongPress, setModalOptionVisible, closeModalOptions } = props;

  const renderItem = ({ item }) => (
    <PublicacionCard
      publicacion={item}
      onLongPress={onLongPress}
      setModalOptionVisible={setModalOptionVisible}
      closeModalOptions={closeModalOptions}
    />
  );

  return (
    <FlatList
        data={publicaciones}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
    container: {

    }
})