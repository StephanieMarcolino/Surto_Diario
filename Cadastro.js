import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import styles from './Estilo'

const CadastroScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {navigation.navigate('Login');})
    .catch((error) => {alert(error.message)})
    console.log('Cadastro Pressed');
  };

  const image = require('./assets/capa-livro.png')

  return (
    <ImageBackground
    source={image} 
    style={styles.backgroundImage}
  >
    <View style={[styles.container, {justifyContent: 'flex-end'}]}>
      <View style={styles.card2}>
      <Text style={{fontSize: 40, textAlign: 'left'}}>Cadastro </Text>
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
          onPress={handleCadastro}
        >
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
    
  );
};



export default CadastroScreen;
