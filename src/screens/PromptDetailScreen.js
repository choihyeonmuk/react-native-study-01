import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';

export default function PromptDetailScreen({ route }) {
    const { prompt } = route.params;

    const copyToClipboard = (text) => {
        Clipboard.setString(text);
        Toast.show({
            type: 'success',
            text1: '클립보드에 복사됨',
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{prompt.title}</Text>
            <TouchableOpacity onPress={() => copyToClipboard(prompt.description)}>
                <Text style={styles.description}>{prompt.description}</Text>
            </TouchableOpacity>
            <Text style={styles.favorite}>
                {prompt.isFavorite ? '★ 즐겨찾기 등록됨' : '☆ 즐겨찾기 등록되지 않음'}
            </Text>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: '#333',
        marginBottom: 16,
    },
    favorite: {
        fontSize: 18,
        color: '#ff9900',
        marginTop: 16,
    },
});