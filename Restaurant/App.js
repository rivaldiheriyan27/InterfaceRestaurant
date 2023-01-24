// import 'expo-dev-menu';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {store} from './app/store'
import WelcomeScreen from './screens/welcomeScreens';
import FoodList from './screens/FoodList/FoodList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}>
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            <Stack.Screen name='FoodList' component={FoodList} />
            {/* <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options={{
                    headerShown: false
                }}
            /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

    // <View style={styles.container}>
    //   <Text>Ini bau</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
