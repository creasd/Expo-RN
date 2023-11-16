import { router } from 'expo-router'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>Header</Text>
        <Button onPress={() => router.push('/welcome')} title="go welcome" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  container: {
    display: 'flex',
    padding: 20,
  },
})
