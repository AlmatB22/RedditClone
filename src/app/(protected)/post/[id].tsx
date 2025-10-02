import {View, Text} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import posts from '../../../../assets/data/posts.json';

import PostListItem from '../../../components/PostListItem';

export default function PostScreen() {
    const { id } = useLocalSearchParams();

    const detailedPost = posts.find((post) => post.id === id);

    if (!detailedPost) {
        return <Text>Post not Found</Text>
    }

    return (
        <View>
            <PostListItem post={detailedPost} detailedPost/>
        </View>
    );
}