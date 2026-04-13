import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GameProvider } from './context/GameContext'; // Assuming you have created a context for game state
import HomeScreen from './screens/HomeScreen'; // Example screen
import GameScreen from './screens/GameScreen'; // Example screen

const App = () => {
  return (
    <GameProvider>
      <NavigationContainer>
        {/* Define your navigation structure here, e.g., Stack Navigator */}
        {/* Example: <Stack.Navigator> <Stack.Screen name="Home" component={HomeScreen} /> <Stack.Screen name="Game" component={GameScreen} /> </Stack.Navigator> */}
      </NavigationContainer>
    </GameProvider>
  );
};

export default App;
