import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationIntro from './src/navigation/NavigationIntro';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavigation from './src/navigation/BottomNavigation';

export default function App() {
  const [userRole, setUserRole] = React.useState('cliente');
  
  return (
    <SafeAreaProvider >
      <NavigationContainer>
        {userRole ? (
            <BottomNavigation userRole={userRole} />
          ) : (
            <NavigationIntro/>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
