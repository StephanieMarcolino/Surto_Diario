import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from '@react-native-firebase/app';
import CalendarScreen from './Calendario';
import AddNoteScreen from './AdicionarDiario';
import ViewNotesScreen from './VisualizarDiario';
import HomeScreen from './Inicio';
import LoginScreen from './Login'
import CadastroScreen from './Cadastro';

const Stack = createStackNavigator();

const Routes = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Calendario" component={CalendarScreen} />
        <Stack.Screen name="AdicionarDiario" component={AddNoteScreen} />
        <Stack.Screen name="VisualizarDiario" component={ViewNotesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
