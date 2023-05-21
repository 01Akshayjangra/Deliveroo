import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Currency from 'react-currency-formatter'

const DishRow = ({id, name, description, price, image}) => {
  return (
    <TouchableOpacity>
        <View>
            <Text>{name}</Text>
            <Text style={{color: 'gray'}} >{description}</Text>
            <Text style={{color: 'gray'}}>
                <Currency quantity={price} currency='GBP' />
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default DishRow