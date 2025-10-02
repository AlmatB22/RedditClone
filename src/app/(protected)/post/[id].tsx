import {View, Text} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function PostScreen() {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>Post Details</Text>
            <Text>{id}</Text>
        </View>
    );
}