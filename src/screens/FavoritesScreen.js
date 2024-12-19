import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function FavoritesScreen({ route }) {
    const { prompts } = route.params;

    const favoritePrompts = prompts.filter((prompt) => prompt.isFavorite);

    return (
        <View style={styles.container}>
            <FlatList
                data={favoritePrompts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.promptCard}>
                        <Text style={styles.promptTitle}>{item.title}</Text>
                        <Text style={styles.promptDescription}>{item.description}</Text>
                    </View>
                )}
            />
            {favoritePrompts.length === 0 && (
                <Text style={styles.noFavoritesText}>즐겨찾기가 없습니다.</Text>
            )}
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
    noFavoritesText: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginTop: 16,
    },
});