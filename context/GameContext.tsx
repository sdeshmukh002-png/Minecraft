import React, { createContext, useState, useCallback } from 'react';
import { io } from 'socket.io-client';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [gameState, setGameState] = useState({
        playerPosition: { x: 0, y: 0, z: 0 },
        inventory: [],
        blocks: [],
        players: [],
        mobs: [],
        isMultiplayer: false,
        socket: null,
    });

    const initializeMultiplayer = useCallback((serverUrl) => {
        try {
            const socket = io(serverUrl);
            socket.on('connect', () => {
                console.log('Connected to multiplayer server');
                setGameState(prev => ({ ...prev, socket, isMultiplayer: true }));
            });
            socket.on('playerUpdate', (data) => {
                console.log('Player update received:', data);
                setGameState(prev => ({ ...prev, players: prev.players.map(p => p.id === data.id ? data : p) }));
            });
            socket.on('blockUpdate', (data) => {
                console.log('Block update received:', data);
                setGameState(prev => ({ ...prev, blocks: [...prev.blocks, data] }));
            });
            socket.on('mobUpdate', (data) => {
                console.log('Mob update received:', data);
                setGameState(prev => ({ ...prev, mobs: prev.mobs.map(m => m.id === data.id ? data : m) }));
            });
            socket.on('error', (error) => {
                console.error('Socket error:', error);
            });
            return socket;
        } catch (error) {
            console.error('Failed to initialize multiplayer:', error);
            return null;
        }
    }, []);

    const updatePlayerPosition = useCallback((position) => {
        setGameState(prev => ({ ...prev, playerPosition: position }));
        if (gameState.socket) {
            gameState.socket.emit('playerMove', position);
        }
    }, [gameState.socket]);

    const addBlockToWorld = useCallback((block) => {
        setGameState(prev => ({ ...prev, blocks: [...prev.blocks, block] }));
        if (gameState.socket) {
            gameState.socket.emit('placeBlock', block);
        }
    }, [gameState.socket]);

    const removeBlockFromWorld = useCallback((blockId) => {
        setGameState(prev => ({ ...prev, blocks: prev.blocks.filter(b => b.id !== blockId) }));
        if (gameState.socket) {
            gameState.socket.emit('breakBlock', blockId);
        }
    }, [gameState.socket]);

    const addItemToInventory = useCallback((item) => {
        setGameState(prev => ({ ...prev, inventory: [...prev.inventory, item] }));
    }, []);

    const removeItemFromInventory = useCallback((itemId) => {
        setGameState(prev => ({ ...prev, inventory: prev.inventory.filter(i => i.id !== itemId) }));
    }, []);

    const value = {
        gameState,
        initializeMultiplayer,
        updatePlayerPosition,
        addBlockToWorld,
        removeBlockFromWorld,
        addItemToInventory,
        removeItemFromInventory,
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};