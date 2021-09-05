import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CreateAccount, Home, Login, MovieDetails, Movies } from '../screens';
import colors from '../styles/colors';
import { Text } from 'react-native';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: '',
                headerStyle: { backgroundColor: colors.yellow },
                headerLeft: () => <Text>MovieFlix</Text>
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
                name="CreateAccount"
                component={CreateAccount}
            />
            <Stack.Screen
                name="Movies"
                component={Movies}
            />
            <Stack.Screen
                name="MovieDetails"
                component={MovieDetails}
            />
        </Stack.Navigator>
    )
}
