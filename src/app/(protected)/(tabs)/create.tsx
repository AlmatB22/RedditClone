import { useState } from 'react'
import { View, Text, Pressable, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import {AntDesign} from '@expo/vector-icons'

export default function CreateScreen() {
    const [title, setTitle] = useState<string>('');
    const [bodyText, setBodyText] = useState<string>('');

    const goBack = () => {
        setTitle('');
        setBodyText('');
        router.back();
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <AntDesign name='close' size={24} color='black' onPress={() => goBack()}/>
                <Pressable style={{marginLeft: 'auto'}}>
                    <Text style={styles.postText}>Post</Text>
                </Pressable>
            </View>
            <View style={styles.communityContainer}>
                <Text style={styles.rStyles}>r/</Text>
                <Text style={{fontWeight: 600}}>Select a Community</Text>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}
            >
                <ScrollView showsVerticalScrollIndicator={false} style={{paddingVertical: 15}}>
                    <TextInput 
                        placeholder='Title'
                        style={{fontSize: 20, fontWeight: 'bold', marginBottom: 15}}
                        multiline
                        autoCorrect={false}
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                        scrollEnabled={false}
                    />
                    <TextInput 
                        placeholder='body text (optional)'
                        multiline
                        scrollEnabled={false}
                        value={bodyText}
                        onChangeText={(text) => setBodyText(text)}
                        style={{
                            paddingBottom: 50
                        }}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    postText: {
        marginLeft: 'auto',
        paddingVertical: 2,
        paddingHorizontal: 7,
        borderRadius: 10,
        backgroundColor: '#115bca',
        color: 'white',
        fontWeight: 'bold'
    },
    communityContainer: {
        backgroundColor: '#EDEDED',
        flexDirection: 'row',
        gap: 5,
        padding: 10,
        alignSelf: 'flex-start',
        borderRadius: 20,
        marginVertical: 10,
    },
    rStyles: {
        backgroundColor: 'black',
        color: 'white',
        paddingHorizontal: 5,
        paddingVertical: 1,
        borderRadius: 10,
        fontWeight: 'bold',
    }
})