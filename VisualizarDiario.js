import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { db } from './Firebase'; 
import {doc, getDoc} from 'firebase/firestore'
import styles from './Estilo';
import { useNavigation } from '@react-navigation/native';

const VisualizarDiario = ({ route }) => {
    const { selectedDate, user , data} = route.params;
    const [diarioText, setDiarioText] = useState('');
    const navigation = useNavigation();
  
    const fetchDiarioText = async () => {
      try {
        const diarioRef = doc(db, 'diarios', selectedDate)
        const diarioSnapshot = await getDoc(diarioRef)
  
        if (diarioSnapshot.exists() && diarioSnapshot.data().user === uid) {
          const diarioData = diarioSnapshot.data();
          setDiarioText(diarioSnapshot.data().note);
        }
      } catch (error) {
        console.error('Error fetching diary text:', error);
      }
    };
  
    useEffect(() => {
      fetchDiarioText();
    }, []);
  
    return (
      <View style={{alignItems: 'center'}}>
      <Text style={[styles.title, {marginTop:10}]}>Surto Diario</Text>
      <View style={styles.cardTexto}>
        <Text style={{color:'#71DBB8'}}>{selectedDate}</Text>
        <Text style={[styles.subtitulo,{textAlign: 'left', marginBottom:10}]}>Meu querido diário...</Text>
        <Text style={[styles.subtitulo,{textAlign: 'left', marginBottom:10}]}>{diarioText}</Text>
      </View>
      
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('Calendario', data)} 
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
    </View>
    );
  };
  
  export default VisualizarDiario;