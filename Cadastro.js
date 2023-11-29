import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
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

  return (
    <View style={styles.container}>
      <Text>Cadastro</Text>
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
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};



export default CadastroScreen;
