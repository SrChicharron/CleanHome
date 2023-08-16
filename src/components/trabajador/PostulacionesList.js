import { FlatList } from 'react-native'
import React from 'react'
import CardPostulaciones from './CardPostulaciones'

export default function PublicacionesList( props ) {
    const { postulaciones, activeOpacity } = props;
    
    const renderItem = ( { item } ) => (
        <CardPostulaciones 
            postulacion={item}
            activeOpacity={activeOpacity}
        />
    )

  return (
    <FlatList
        data={postulaciones}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
    />
  )
}