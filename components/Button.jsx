import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({value}) => {
  return (
    <TouchableOpacity>
        <Text>{value}</Text>
    </TouchableOpacity>
  )
}

export default Button