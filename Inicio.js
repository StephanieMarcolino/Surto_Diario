import { Text, ImageBackground, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './Estilo';
import * as Font from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen({ navigation}) {
  
  const image = require('./assets/capa-livro.png')

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'Slackside-One': require('./assets/fonts/SlacksideOne-Regular.ttf'),
      });

      setFontLoaded(true);
    };

    loadFont();
  }, []);

  if (!fontLoaded) {
    return null; 
  }


  return (
    <ImageBackground
    source={image} 
    style={styles.backgroundImage}
  >
    
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={[styles.title, { fontFamily: 'Slackside One' }]}>Surto Diario</Text>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('Login')} 
        >
          <Text style={styles.buttonText}>Login</Text>
          <FontAwesome5 name="play" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('Cadastro')} 
        >
          <Text style={styles.buttonText}>Cadastro</Text>
          <FontAwesome5 name="play" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  </ImageBackground>
);
      
}


