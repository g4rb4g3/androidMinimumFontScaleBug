import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';

export default function App() {
  const [ number, setNumber ] = useState(0);
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={{backgroundColor: 'white', height: 30}}>
      {number > 0 ? (
        <Text
          adjustsFontSizeToFit={true}
          allowFontScaling={true}
          minimumFontScale={0.8571428571428571}
          numberOfLines={2}
          style={styles.text}
        >
          {number} Open up App.js to start working on your app!
        </Text>
        ) : null}
        <Button onPress={() => setNumber((s) => s + 1)} title='+' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Inter_400Regular',
    fontSize: 21,
    fontWeight: '400',
    textAlign: 'center'
  },
});
