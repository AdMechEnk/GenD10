# API SPECIFICATION

## GenD10System Interface

```typescript
interface GenD10System {
  init(): void;
  ready(): void;
}
```

### Methods

#### init()
- **Purpose**: Initialize the system
- **Parameters**: None
- **Return**: void
- **Description**: Registers system settings and sheet classes with Foundry VTT

#### ready()
- **Purpose**: Execute when system is ready
- **Parameters**: None  
- **Return**: void
- **Description**: Triggers data preloading and performs any actions needed after system initialization

## GenD10ActorSheet Interface

```typescript
class GenD10ActorSheet extends ActorSheet {
  static get defaultOptions(): any;
  getData(): any;
}
```

### Methods

#### defaultOptions
- **Purpose**: Define default options for the actor sheet
- **Return**: Object with sheet configuration
- **Configuration**:
  - classes: ['gend10', 'sheet', 'actor']
  - template: 'systems/gend10/templates/actor-sheet.hbs'
  - width: 700
  - height: 600
  - tabs: description, skills, equipment, corruption

#### getData()
- **Purpose**: Get data for the actor sheet
- **Return**: Object with sheet data
- **Description**: Extends parent getData() method and adds custom data

## GenD10ItemSheet Interface

```typescript
class GenD10ItemSheet extends ItemSheet {
  static get defaultOptions(): any;
  getData(): any;
}
```

### Methods

#### defaultOptions
- **Purpose**: Define default options for the item sheet
- **Return**: Object with sheet configuration
- **Configuration**:
  - classes: ['gend10', 'sheet', 'item']
  - template: 'systems/gend10/templates/item-sheet.hbs'
  - width: 500
  - height: 400

#### getData()
- **Purpose**: Get data for the item sheet
- **Return**: Object with sheet data
- **Description**: Extends parent getData() method and adds custom data

## PreloadData Function

```typescript
async function preloadData(): Promise<void> {
  // Preload all data in current active directory
  // Returns void, logs progress and errors
}
```

### Parameters
- None

### Return Value
- Promise<void> - resolves when preloading is complete

### Description
- Loads actors, items, and scenes from current directory
- Provides progress feedback
- Handles errors gracefully
