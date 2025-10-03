import { Tabs } from 'expo-router'

import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'black',
        }}>
            <Tabs.Screen 
                name='index'
                options={{
                    headerTitle: 'Reddit',
                    title: 'Home',
                    headerTintColor: '#FF5700',
                    tabBarIcon: ({color}) => <AntDesign name="home" size={24} color={color} />
                }}
            />
            <Tabs.Screen 
                name='communities'
                options={{
                    title: 'Communities',
                    tabBarIcon: ({color}) => <Feather name="users" size={24} color={color} />
                }}
            />
            <Tabs.Screen 
                name='create'
                options={{
                    title: 'Create',
                    tabBarIcon: ({color}) => <AntDesign name="plus" size={24} color={color} />,
                    headerShown: false,
                    tabBarStyle: {display: 'none'}
                }}
            />
            <Tabs.Screen 
                name='chat'
                options={{
                    title: 'Chat',
                    tabBarIcon: ({color}) => <Ionicons name="chatbubble-ellipses-outline" size={24} color={color} />
                }}
            />
            <Tabs.Screen 
                name='inbox'
                options={{
                    title: "Inbox",
                    tabBarIcon: ({ color }) => <Feather name="bell" size={24} color={color} />
                }}
            />

        </Tabs>
    )
}