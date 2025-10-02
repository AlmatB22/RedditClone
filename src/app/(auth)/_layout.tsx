import {View, Text} from 'react-native'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export default function AppLayout() {
    
    const {isSignedIn} = useAuth();

    if (isSignedIn) {
        return <Redirect href='/'/>
    }
    return (
        <Stack>
            <Stack.Screen name='signIn' options={{
                title: 'Sign In'
            }}/>
            <Stack.Screen name='signUp' options={{
                title: 'Sing Up'
            }}/>
        </Stack>
    )
}