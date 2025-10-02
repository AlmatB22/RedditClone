import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { formatDistanceToNowStrict, FormatDistanceToNowStrictOptions } from 'date-fns';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { Post }from '../types';
import { Link } from 'expo-router';

type PostListItem = {
    post: Post
}

export default function PostListItem({ post }: PostListItem) {
    return (
        <Link href={`/post/${post.id}`} asChild>
            <View style={{paddingHorizontal: 17, paddingVertical: 10, gap: 7, borderBottomColor: 'lightgrey', borderBottomWidth: 0.5, backgroundColor: 'white'}}>
                <View style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                    <Image source={{uri: post.group.image}} style={styles.image}/>
                    <Text>{post.group.name}</Text>
                    <Text style={{color: 'grey'}}>{formatDistanceToNowStrict(new Date(post.created_at))}</Text>
                    <View style={{marginLeft: 'auto'}}>
                        <Text style={styles.joinButtonText}>Join</Text>
                    </View>
                </View>

                <Text style={styles.title}>{post.title}</Text>
                {post.image && 
                    <Image source={{uri: post.image}}
                        style={{
                            width: '100%', 
                            aspectRatio: 4/3, 
                            borderRadius: 15,
                        }}
                    />
                }
                { (!post.image && post.description) &&
                    <Text numberOfLines={4}>{post.description}</Text>
                }

                {/* FOOTER */}
                <View style={{flexDirection: 'row',  marginTop: 4}}>
                    <View style={{flexDirection:'row', gap: 10}}>
                        <View style={styles.iconBox}>
                            <MaterialCommunityIcons name="arrow-up-bold-outline" size={19} color="black" />
                            <Text style={{marginLeft: 5, fontWeight: '500'}}>{post.upvotes}</Text>
                            <View style={styles.verticalLine}></View>
                            <MaterialCommunityIcons name="arrow-down-bold-outline" size={19} color="black" />
                        </View>
                        <View style={styles.iconBox}>
                            <MaterialCommunityIcons name="comment-outline" size={19} color="black" />
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', gap: 10, marginLeft: 'auto'}}>
                        <View style={styles.iconBox}>
                            <MaterialCommunityIcons name="trophy-outline" size={19} color="black" />
                        </View>
                        <View style={styles.iconBox}>
                            <MaterialCommunityIcons name="share-outline" size={19} color="black" />
                        </View>
                    </View>
                </View>
            </View>
        </Link>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 20,
        height: 20,
        borderRadius: 10,
        
    },
    joinButtonText: {
        backgroundColor: '#0d469b',
        color: 'white',
        paddingVertical: 2,
        paddingHorizontal: 7,
        borderRadius: 10,
        fontWeight: 'bold'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        letterSpacing: 0.5,
    },
    iconBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#D4D4D4',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderWidth: 0.5,

    },
    verticalLine: {
        height: '80%',
        width: 1,
        backgroundColor: '#D4D4D4',
        alignSelf: 'center',
        marginHorizontal: 7,
    }
})