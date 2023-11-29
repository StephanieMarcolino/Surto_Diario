// components/Calendario.js
import React, { useState, useEffect } from 'react';
import { Calendar} from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from './Firebase';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

const Calendario = () => {
  const [markedDates, setMarkedDates] = useState({});
  const navigation = useNavigation();

  const fetchMarkedDates = async () => {
    try {
      const diariosCollection = await getDocs(collection(db, 'diarios'));

      if (diariosCollection) {
        const markedDates = {};
        diariosCollection.forEach((doc) => {
          const date = doc.id; // Assumindo que o ID do documento é a data

          markedDates[date] = {
            marked: true,
            dotColor: doc.data().note ? '#2ECC71' : 'transparent', 
          };
        });

        setMarkedDates(markedDates);
      }
    } catch (error) {
      console.error('Error fetching marked dates:', error);
    }
  };

  useEffect(() => {
    fetchMarkedDates();
  }, []);

  const handleDayPress = async (day) => {
    try {
      const diarioRef = doc(db, 'diarios', day.dateString);
      const diarioSnapshot = await getDoc(diarioRef);

      if (diarioSnapshot.exists()) {
        navigation.navigate('VisualizarDiario', { selectedDate: day.dateString });
      } else {
        navigation.navigate('AdicionarDiario', { selectedDate: day.dateString });
      }
    } catch (error) {
      console.error('Error checking diary existence:', error);
    }
  };

  return (
    <Calendar
      markedDates={markedDates}
      onDayPress={handleDayPress}
    />
  );
};

export default Calendario;
