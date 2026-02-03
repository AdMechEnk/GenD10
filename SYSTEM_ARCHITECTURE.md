# SYSTEM ARCHITECTURE

## Overview
The GenD10 system is a Foundry VTT system implementation following TypeScript and modular architecture principles. It provides core functionality for a GenD10 game system including data preloading, sheet customization, and configuration management.

## Architecture Components

### Main System Class
- **GenD10System**: Main system class handling initialization and ready events

### Sheet Implementations
- **GenD10ActorSheet**: Custom actor sheet implementation
- **GenD10ItemSheet**: Custom item sheet implementation

### Data Management
- **PreloadData**: Data loading functionality for preloading all data in current active directory

## Data Flow
1. System initialization (`init()` method)
2. System ready event (`ready()` method) 
3. Data preloading execution
4. Sheet registration and rendering

## Component Relationships
```
GenD10System
├── init() - Registers settings and sheets
├── ready() - Triggers data preloading
└── PreloadData() - Loads data from current directory

GenD10ActorSheet
└── Extends ActorSheet - Custom actor interface

GenD10ItemSheet  
└── Extends ItemSheet - Custom item interface
```

## Configuration Management
- System settings are registered through Foundry VTT's game.settings API
- Sheet classes are registered through Foundry VTT's Actors.registerSheet and Items.registerSheet APIs
- All configuration is managed through system.json and package.json
