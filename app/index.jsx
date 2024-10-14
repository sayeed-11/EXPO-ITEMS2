import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Link, router } from 'expo-router'
import Button from '../components/Button'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


const Index = () => {
  return (
    <GestureHandlerRootView style={{
      flex: 1
    }}>
      <View style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>index</Text>
        <Link style={{
          backgroundColor: 'red',
          color: 'white',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 10
        }} href={{ pathname: '/(tabs)' }}>go to tabs</Link>
        
        <Pressable className="bg-slate-300 px-10 py-3 rounded-md" onPress={() => router.push('/Setting')}>
          <Text className="text-violet-700">Go to Setting</Text>
        </Pressable>
        <Pressable className="bg-slate-300 px-10 my-5 py-3 rounded-md" onPress={() => router.push('/MediaLibrary')}>
          <Text className="text-violet-700">Go to MediaLibrary</Text>
        </Pressable>
      </View>
    </GestureHandlerRootView>     
  )
}

export default Index