import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import ContactosFlatlist from './contactos-flatlist'
import React, { useState, useEffect } from 'react';
import {getAll} from './backend'

const contactold = [{Id:3,Nombre:'Juan', FechaNac:'10/5/2001'}, 
{Id:5, Nombre:'Juana', FechaNac:'11/2/2000'},
{Id:8, Nombre:'Mia', FechaNac:'21/1/2002'},

]

// /Users/leandro/Library/Android/sdk/platform-tools/adb kill-server

export default function Main({navigation}) {


  const getLocal=(setCont) => {
    setCont(contactold)
  }


  const verDetalles=(id, nombre, fecha) => {
    navigation.navigate('Detalles',{id, nombre, fecha})
  }
  const [contactos, setContactos] = useState({})
  useEffect (()=> getAll(setContactos),[])

  return (
    <View style={styles.container}>
        <View style={styles.lista}>
          <ContactosFlatlist contactos={contactos} verDetalles={verDetalles}/>
      </View>
      <Button 
         onPress={() => verDetalles()}
        title="Crear nuevo"
        color="green"
  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:10,
  },

  lista: {
    flex:1,
    marginTop:20,
    marginBottom:20,
    marginHorizontal:20,
  },

});
