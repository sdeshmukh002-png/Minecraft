// Data for Minecraft Update 26.1

// Mobs
const mobs = {
    sniffer: {
        description: 'A passive mob that helps players find ancient seeds.',
        behaviors: ['digs', 'follows player'],
        health: 10,
        drops: ['ancient seed'],
        spawnBiome: 'overworld',
    },
    camel: {
        description: 'A large, passive mob that can carry players.',
        behaviors: ['walks', 'jumps'],
        health: 20,
        drops: ['camel meat'],
        spawnBiome: 'desert',
    },
    armadillo: {
        description: 'A small mob that rolls into a ball when threatened.',
        behaviors: ['rolls'],
        health: 8,
        drops: ['armadillo shell'],
        spawnBiome: 'savanna',
    },
    breeze: {
        description: 'A friendly air creature that guides players.',
        behaviors: ['floats', 'guides'],
        health: 5,
        drops: [],
        spawnBiome: 'sky',
    },
    bogged: {
        description: 'A swamp monster that slows players down.',
        behaviors: ['attacks', 'slows'],
        health: 15,
        drops: ['bogged slime'],
        spawnBiome: 'swamp',
    }
};

// Items
const items = {
    ancientSeed: {
        description: 'A seed from ancient times, found by the Sniffer.',
        usage: ['planted', 'crafted into'],
    },
    camelMeat: {
        description: 'Meat from a camel that can be cooked.',
        usage: ['eaten', 'crafted into steak'],
    },
    armadilloShell: {
        description: 'A sturdy shell from an armadillo.',
        usage: ['crafted into armor'],
    },
    boggedSlime: {
        description: 'A slime that oozes from the Bogged mob.',
        usage: ['crafted into various items'],
    }
};

// Blocks
const blocks = {
    ancientStone: {
        description: 'A stone block that contains ancient energies.',
        hardness: 2,
        resistance: 5,
        crafting: ['smelting in furnace'],
    },
    camelHutch: {
        description: 'A block for storing and feeding camels.',
        hardness: 1,
        crafting: ['crafted from wooden planks'],
    },
};

// Crafting Recipes
const craftingRecipes = {
    camelMeatSteak: {
        ingredients: ['camel meat', 'cooking pot'],
        result: 'camel steak',
    },
    armadilloArmor: {
        ingredients: ['armadillo shell', 'leather'],
        result: 'armadillo armor',
    },
};

module.exports = { mobs, items, blocks, craftingRecipes };