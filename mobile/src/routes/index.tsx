import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CreateAccount, Home, Login, MovieDetails, Movies } from '../screens';
import { Text } from 'react-native';
import { isAuthenticated } from '../core/utils/auth';
import colors from '../styles/colors';

const Stack = createStackNavigator();

export default async function Routes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: '',
                headerStyle: { backgroundColor: colors.yellow },
                headerLeft: () => <Text>MovieFlix</Text>
            }}
        >
            {await isAuthenticated() ? (
        <>
          <Stack.Screen
            name="Movies"
            component={ Movies }
          />
            <Stack.Screen
            name="MovieDetails"
            component={ MovieDetails }
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={ Home }
          />
            <Stack.Screen
            name="Login"
            component={ Login }
          />
            <Stack.Screen
                name="Movies"
                component={Movies}
            />
            <Stack.Screen
            name="CreateAccount"
            component={ CreateAccount }
          />
        </>
      )}
        </Stack.Navigator>
    )
}
