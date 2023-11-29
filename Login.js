// Importações necessárias
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, TouchableOpacity  } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import styles from './Estilo'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user
        console.log('Login Pressed');
    })
    .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        alert(errorMessage)
    })
    
  };
  const image = require('./assets/capa-livro.png')

  return (
    <ImageBackground
    source={image} 
    style={styles.backgroundImage}
  >
    <View style={[styles.container, {justifyContent: 'flex-end'}]}>
      <View style={styles.card2}>
      <Text style={{fontSize: 40, textAlign: 'left'}}>Login </Text>
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
        
      <TouchableOpacity
          style={styles.button1}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};


export default LoginScreen;
