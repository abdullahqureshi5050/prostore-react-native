import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

type props = {
  color: string
} 

// a horizontal stright line divider

export const Divider = (props: props)=>{
    return (
        <View
  style={{
    borderBottomColor: props.color ? props.color:'black',
    borderBottomWidth: 1,
  }}
/>
    )
}