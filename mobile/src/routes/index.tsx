import React, { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CreateAccount, Home, Login, MovieDetails, Movies } from '../screens';
import { Text } from 'react-native';
import { isAuthenticated } from '../core/utils/auth';
import HeaderBackImage from '../core/components/HeaderBackImage';
import HeaderLeft from '../core/components/HeaderLeft';
import HeaderRight from '../core/components/HeaderRight';
import { AuthContext } from '../contexts/AuthContext';
import colors from '../styles/colors';

const Stack = createStackNavigator();

export default async function Routes() {
  const { isUserLogged } = useContext(AuthContext)

  async function checkIsUserLogged() {
    const isLogged = await isAuthenticated()
    return isLogged
  }

  useEffect(() => {
    checkIsUserLogged()
  }, [isUserLogged])

  return (
    <>
      {isUserLogged ? (
        <Stack.Navigator
          screenOptions={{
            headerTitle: '',
            headerStyle: { backgroundColor: colors.yellow },
            headerBackImage: () => <HeaderBackImage />,
            headerLeft: () => <HeaderLeft />,
            headerRight: () => <HeaderRight />
          }}
        >
          <Stack.Screen
            name="Movies"
            component={Movies}
          />
          <Stack.Screen
            name="MovieDetails"
            component={MovieDetails}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerTitle: '',
            headerStyle: { backgroundColor: colors.yellow },
            headerBackImage: () => <HeaderBackImage />,
            headerLeft: () => <HeaderLeft />
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Movies"
            component={Movies}
          />
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccount}
          />
        </Stack.Navigator>
      )}
    </>
  )
}
