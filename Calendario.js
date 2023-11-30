import React, { useState, useEffect } from 'react';
import { Calendar} from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from './Firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { View, Text } from 'react-native';
import styles from './Estilo';

const Calendario = ({ route }) => {
  const data = route.params;
  const [nomeDeUsuario] = data.email.split('@');
  uid = data.uid
  const [markedDates, setMarkedDates] = useState({});
  const navigation = useNavigation();

  const fetchMarkedDates = async () => {
    try {
      const diariosCollection = await getDocs(collection(db, 'diarios'));

      if (diariosCollection) {
        const updatedMarkedDates = {};
        diariosCollection.forEach((doc) => {
          const date = doc.id;
          const isUserNote = doc.data().user === uid;

          updatedMarkedDates[date] = {
            marked: true,
            dotColor: isUserNote ? (doc.data().note ? '#EA9DCB' : 'transparent') : 'transparent',
          };
        });

        setMarkedDates(updatedMarkedDates);
      }
    } catch (error) {
      console.error('Error fetching marked dates:', error);
    }
  };

  useEffect(() => {
    fetchMarkedDates();
  }, [uid]);

  
  const handleDayPress = async (day) => {
    try {
      const diarioRef = doc(db, 'diarios', day.dateString);
      const diarioSnapshot = await getDoc(diarioRef);
  
      if (diarioSnapshot.exists() && diarioSnapshot.data().user === uid) {
        navigation.navigate('VisualizarDiario', { selectedDate: day.dateString, user: uid, data });
      } else {
        navigation.navigate('AdicionarDiario', { selectedDate: day.dateString, user: uid , data});
      }
    } catch (error) {
      console.error('Error checking diary existence:', error);
    }
  };

  return (
  <View>
    <Text style={[styles.title, {color: '#EA9DCB', marginTop: 20, textAlign: 'center', marginBottom:50}]}>Olá, {nomeDeUsuario}</Text>
    <Text style={styles.subtitulo} >Selecione uma data e faça seu desabafo do dia.</Text>
    

    <Calendar
      markedDates={markedDates}
      onDayPress={handleDayPress}
    />
  </View>
    
  );
};

export default Calendario;
