import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { GameContext } from '../context/GameContext';

const ServerManagementScreen = () => {
    const [serverName, setServerName] = useState('');
    const [maxPlayers, setMaxPlayers] = useState(10);
    const [difficulty, setDifficulty] = useState('normal');
    const [gameMode, setGameMode] = useState('survival');
    const { createSMPServer, createDedicatedServer, joinServer, deleteServer } = useContext(GameContext);

    const handleCreateSMP = async () => {
        try {
            await createSMPServer({ serverName, maxPlayers, difficulty, gameMode });
            Alert.alert('Success', 'SMP Server created!');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const handleCreateDedicated = async () => {
        try {
            await createDedicatedServer({ serverName, maxPlayers, difficulty, gameMode });
            Alert.alert('Success', 'Dedicated Server created!');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const handleJoinServer = async (serverId) => {
        try {
            await joinServer(serverId);
            Alert.alert('Success', 'Joined server!');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const handleDeleteServer = async (serverId) => {
        try {
            await deleteServer(serverId);
            Alert.alert('Success', 'Server deleted!');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Server Management</Text>
            <TextInput
                style={styles.input}
                placeholder="Server Name"
                value={serverName}
                onChangeText={setServerName}
            />
            <TextInput
                style={styles.input}
                placeholder="Max Players"
                keyboardType="numeric"
                value={String(maxPlayers)}
                onChangeText={(text) => setMaxPlayers(Number(text))}
            />
            <TextInput
                style={styles.input}
                placeholder="Difficulty"
                value={difficulty}
                onChangeText={setDifficulty}
            />
            <TextInput
                style={styles.input}
                placeholder="Game Mode"
                value={gameMode}
                onChangeText={setGameMode}
            />
            <Button title="Create SMP Server" onPress={handleCreateSMP} />
            <Button title="Create Dedicated Server" onPress={handleCreateDedicated} />
            {/* Additional buttons for joining and deleting servers can be added here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
});

export default ServerManagementScreen;
