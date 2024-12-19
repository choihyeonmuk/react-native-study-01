import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import PromptDetailScreen from './src/screens/PromptDetailScreen';
import FavoritesScreen from "./src/screens/FavoritesScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'LLM Prompt Dictionary' }} />
          <Stack.Screen name="PromptDetail" component={PromptDetailScreen} options={{ title: '프롬프트 상세' }} />
            <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: '즐겨찾기' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}