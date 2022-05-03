import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';
import React, { useState, useEffect } from 'react';
import {PutContact, PostContact, DeleteContact} from './backend'
 




// /Users/leandro/Library/Android/sdk/platform-tools/adb kill-server

export default function Detalle({route, navigation}) {

  const crearDato=() => {
    alert("se crea")
    PostContact(nombreOut, fechaOut)
  }


  const actualizarDato=() => {
    alert("se actualiza")
    PutContact(idOut, nombreOut, fechaOut)
  }

  const borrarDato=() => {
    alert("se borra")    
    DeleteContact(idOut)
    navigation.navigate("Principal")
  }

  const { id, nombre, fecha } = route.params;
  const [nombreOut, onChangeNombre] =  useState(nombre);
  const [fechaOut, onChangeFecha] =  useState(fecha);
  const [idOut, setIdOut] =  useState(id);

  useEffect(()=>{if (!id) setIdOut('NEW') }
            ,[])
  return (
    <View style={styles.container}>

        <Text> ID: {idOut} </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNombre}
          value={nombreOut}
          placeholder="Nombre y Apellido"
      />


        <TextInput
          style={styles.input}
          onChangeText={onChangeFecha}
          value={fechaOut}
          placeholder="Fecha Nacimiento"
      />


      { idOut=='NEW' &&
      <Button 
         onPress={() =>crearDato()}
        title="Crear"
        color="green"
    />
    }
    { idOut!='NEW' &&
      <View style={{ flexDirection:'row', justifyContent:'space-around'}}>
        <Button 
        onPress={() =>actualizarDato()}
        title="Actualizar"
        color="green"
        />
      <Button 
         onPress={() =>borrarDato()}
        title="Borrar"
        color="red"
    />
        </View>
    }


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

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});
