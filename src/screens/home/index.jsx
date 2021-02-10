import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import MaroonVideo from '../../media/WhatLoversDo.mp4'
import BaseVideo from '../../components/baseVideo'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BaseVideo source={MaroonVideo} />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
})
