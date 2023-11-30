import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db } from './Firebase'
import { setDoc, doc } from 'firebase/firestore';
import styles from './Estilo';

const AdicionarDiario = ({ route }) => {
  const { selectedDate , user, data} = route.params;
  const [diarioText, setDiarioText] = useState('');
  const navigation = useNavigation();

  const handleSalvarDiario = async () => {
    try {
    await setDoc(doc(db, 'diarios', selectedDate), {
        note: diarioText,
        user: user
    })
    .then(() => {
        alert('Salvo com sucesso')
        navigation.navigate('Calendario', data)
    })
    } catch (error) {
      console.error('Error saving diary:', error);
    }
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={[styles.title, {marginTop:10}]}>Surto Diario</Text>
      <View style={styles.cardTexto}>
        <Text style={{color:'#71DBB8'}}>{selectedDate}</Text>
        <Text style={[styles.subtitulo,{textAlign: 'left', marginBottom:10}]}>Meu querido diário...</Text>
        <TextInput
          style={styles.textInputTexto}
          multiline
          placeholder="Escreva seu diário aqui..."
          value={diarioText}
          onChangeText={(text) => setDiarioText(text)}
        />
      </View>
      <TouchableOpacity
          style={styles.button1}
          onPress={handleSalvarDiario}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('Calendario', data)} 
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
    </View>
  );
};

export default AdicionarDiario;
