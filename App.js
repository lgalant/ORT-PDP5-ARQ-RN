import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import Main from './main'
import Detalle from './detalle'
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const contactold = [{Id:3,Nombre:'Juan', FechaNac:'10/5/2001'}, 
{Id:5, Nombre:'Juana', FechaNac:'11/2/2000'},
{Id:8, Nombre:'Mia', FechaNac:'21/1/2002'},

]


const Stack = createNativeStackNavigator();



// /Users/leandro/Library/Android/sdk/platform-tools/adb kill-server

export default function App() {
 
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Principal" component={Main} />
        <Stack.Screen name="Detalles" component={Detalle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:10,
  }

});
