# PRELOADING SPECIFICATION

## Overview
The data preloading functionality is designed to load all system data from the current active directory when the GenD10 system initializes. This ensures that data is available immediately when the system is ready for use.

## Requirements

### Functional Requirements
1. **Data Source Discovery**: Automatically discover and load data from the current active directory
2. **Actor Data Loading**: Load all actor data from the current directory
3. **Item Data Loading**: Load all item data from the current directory  
4. **Scene Data Loading**: Load all scene data from the current directory
5. **Progress Reporting**: Provide feedback during the loading process
6. **Error Handling**: Gracefully handle loading errors without crashing the system
7. **Performance**: Load data efficiently without blocking the UI

### Technical Requirements
- **Asynchronous Operation**: Preloading must be non-blocking
- **Promise-based**: Return Promise<void> to allow proper async handling
- **Type Safety**: Follow TypeScript conventions
- **Foundry VTT Compatibility**: Work with Foundry VTT's data structures

## Interface Specification

### Function Signature
```typescript
async function preloadData(): Promise<void>
```

### Parameters
None

### Return Value
- **Promise<void>**: Resolves when preloading is complete

## Implementation Details

### Data Loading Process
1. **Initialization**: Log start of preloading process
2. **Actor Loading**: 
   - Access `game.actors` collection
   - Load actor data from current directory
   - Log number of actors loaded
3. **Item Loading**:
   - Access `game.items` collection  
   - Load item data from current directory
   - Log number of items loaded
4. **Scene Loading**:
   - Access `game.scenes` collection
   - Load scene data from current directory
   - Log number of scenes loaded
5. **Completion**: Log successful completion

### Error Handling
- Wrap all data loading operations in try/catch blocks
- Log specific error messages for debugging
- Continue processing other data types if one fails
- Provide clear error reporting

### Logging
- Log start of preloading process
- Log completion of each data type loading
- Log total counts of loaded items
- Log any errors encountered
- Log successful completion

## Configuration Options
The preloading system should support:
- **Include Actors**: Boolean flag to include actor data (default: true)
- **Include Items**: Boolean flag to include item data (default: true)  
- **Include Scenes**: Boolean flag to include scene data (default: true)
- **Batch Size**: Number of items to load at once for performance (default: 100)

## Performance Considerations
- Use asynchronous loading to prevent UI blocking
- Implement batch loading for large datasets
- Cache loaded data to avoid re-loading
- Provide progress indicators for long operations
