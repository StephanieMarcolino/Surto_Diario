// components/VisualizarDiario.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { db } from './Firebase'; 
import {doc, getDoc} from 'firebase/firestore'

const VisualizarDiario = ({ route }) => {
    const { selectedDate } = route.params;
    const [diarioText, setDiarioText] = useState('');
  
    const fetchDiarioText = async () => {
      try {
        const diarioRef = doc(db, 'diarios', selectedDate)
        const diarioSnapshot = await getDoc(diarioRef)
  
        if (diarioSnapshot.exists) {
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
      <View>
        <Text>{diarioText}</Text>
      </View>
    );
  };
  
  export default VisualizarDiario;