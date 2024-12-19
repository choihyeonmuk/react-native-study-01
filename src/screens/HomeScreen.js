import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import prompts from '../data/prompts';

export default function HomeScreen({ navigation }) {
    const [promptList, setPromptList] = useState(prompts);

    const toggleFavorite = (id) => {
        setPromptList((prevPrompts) =>
            prevPrompts.map((prompt) =>
                prompt.id === id ? { ...prompt, isFavorite: !prompt.isFavorite } : prompt
            )
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={promptList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PromptDetail', { prompt: item })}
                        style={styles.promptCard}
                    >
                        <View>
                            <Text style={styles.promptTitle}>{item.title}</Text>
                            <Text style={styles.promptDescription}>{item.description}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => toggleFavorite(item.id)}
                            style={styles.favoriteButton}
                        >
                            <Text style={styles.favoriteText}>
                                {item.isFavorite ? '★' : '☆'}
                            </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    promptCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        marginBottom: 8,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        elevation: 2,
    },
    promptTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    promptDescription: {
        fontSize: 12,
        color: '#555',
    },
    favoriteButton: {
        marginLeft: 16,
    },
    favoriteText: {
        fontSize: 18,
        color: '#f00',
    },
});