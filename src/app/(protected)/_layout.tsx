import { Redirect, Stack, router } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'
import {AntDesign, MaterialIcons, Entypo} from '@expo/vector-icons'

import {View, Text} from 'react-native'

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth()

  if (!isSignedIn) {
    return <Redirect href={'/(auth)/signIn'} />
  }

  return (
    <Stack>
        <Stack.Screen name='(tabs)' options={{
            headerShown: false,
            headerTitle: 'Home'
        }}/>
        <Stack.Screen name='post/[id]' options={{
            headerTitle: '',
            headerStyle: {
                backgroundColor: '#FF5700'
            },
            headerLeft: () => 
                <View>
                    <AntDesign name='close' size={24} color='white' onPress={() => router.back()} />
                </View>,
            headerRight: () => 
                <View style={{flexDirection: 'row', gap: 10}}>
                    <AntDesign name='search' size={24} color="white" />
                    <MaterialIcons name="sort" size={27} color="white" />
                    <Entypo name="dots-three-horizontal" size={24} color="white" />
                </View>,
            animation: 'slide_from_bottom',
            headerBackButtonDisplayMode: 'minimal'
        }} />
    </Stack>
  )
}