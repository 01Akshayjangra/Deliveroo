import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity 
      style={{position: 'relative', marginRight: 10, }}
    >
      <Image source={{
        uri: imgUrl,
      }}
      style={{height: 100, width: 100, borderRadius: 5}}
      />
      <Text style={{position: 'absolute',bottom: 1, left: 3, color: 'white',fontWeight: 'bold' }} >{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard