import React, { useEffect } from 'react';
import { initializeApp } from '@react-native-firebase/app';
import Routes from './Routes';


const App = () => {
  useEffect(() => {
    const firebaseConfig = {
    };

    initializeApp(firebaseConfig);
  }, []);

  return (
    <Routes></Routes>
  );
};

export default App;
