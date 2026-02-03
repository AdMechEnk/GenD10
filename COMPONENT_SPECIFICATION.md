# COMPONENT SPECIFICATION

## System Initialization Component

### GenD10System Class

#### Purpose
The main system class that handles initialization and ready events for the GenD10 system.

#### Methods
- **init()**: Registers system settings and sheet classes
- **ready()**: Handles system ready events and data preloading

#### Settings Registration
- **defaultDifficulty**: Number setting with default value of 1
  - Name: "Default Difficulty"
  - Hint: "Sets the default difficulty for new rolls"
  - Scope: "world"
  - Config: true
  - Type: Number

#### Sheet Registration
- **ActorSheet**: Registers `GenD10ActorSheet` as the default actor sheet
- **ItemSheet**: Registers `GenD10ItemSheet` as the default item sheet

## Actor Sheet Component

### GenD10ActorSheet Class

#### Purpose
Custom actor sheet implementation for the GenD10 system.

#### Configuration
- **Template**: `systems/gend10/templates/actor-sheet.hbs`
- **Dimensions**: 700×600 pixels
- **Tabs**: 
  - description (initial)
  - skills
  - equipment  
  - corruption

#### Extends
- `ActorSheet` from Foundry VTT

## Item Sheet Component

### GenD10ItemSheet Class

#### Purpose
Custom item sheet implementation for the GenD10 system.

#### Configuration
- **Template**: `systems/gend10/templates/item-sheet.hbs`
- **Dimensions**: 500×400 pixels

#### Extends
- `ItemSheet` from Foundry VTT

## Data Preloading Component

### PreloadData Function

#### Purpose
Load and preload all data from the current active directory.

#### Interface
```typescript
async function preloadData(): Promise<void>
```

#### Functionality
- Loads actors from current directory
- Loads items from current directory
- Loads scenes from current directory
- Provides logging for progress and completion
- Handles errors gracefully
