// AdicionarDiario.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db } from './Firebase'
import { setDoc, doc } from 'firebase/firestore';

const AdicionarDiario = ({ route }) => {
  const { selectedDate } = route.params;
  const [diarioText, setDiarioText] = useState('');
  const navigation = useNavigation();

  const handleSalvarDiario = async () => {
    try {
    await setDoc(doc(db, 'diarios', selectedDate), {
        note: diarioText
    })
    .then(() => {
        alert('Deu certo')
    })
    } catch (error) {
      console.error('Error saving diary:', error);
    }
  };

  return (
    <View>
      <TextInput
        multiline
        placeholder="Digite seu diário aqui..."
        value={diarioText}
        onChangeText={setDiarioText}
      />
      <Button title="Salvar" onPress={handleSalvarDiario} />
    </View>
  );
};

export default AdicionarDiario;
