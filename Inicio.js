import { Text, ImageBackground, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './Estilo';

export default function HomeScreen({ navigation}) {
  
  const image = require('./assets/capa-livro.png')

  return (
    <ImageBackground
    source={image} 
    style={styles.backgroundImage}
  >
    
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={styles.title}>Surto Diario</Text>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('Login')} 
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('Cadastro')} 
        >
          <Text style={styles.buttonText}>Cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ImageBackground>
);
      
}


