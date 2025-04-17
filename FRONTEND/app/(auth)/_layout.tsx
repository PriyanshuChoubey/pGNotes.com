import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router/stack';

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name='signin' options = {{title: "Sign-in"}} />
        <Stack.Screen name='signup'  />
    </Stack>
  )
}

export default _layout