# CONFIGURATION SPECIFICATION

## Overview
This document specifies the configuration requirements and structure for the GenD10 system, including all configuration files and their contents.

## System Configuration Files

### 1. system.json
The main system configuration file that defines the system's metadata and settings.

#### Key Properties
- **id**: "gend10" - System identifier
- **title**: "GenD10 System" - Human-readable system name
- **description**: Description of the system
- **version**: "1.0.0" - System version
- **authors**: Array of author information
- **url**: GitHub repository URL
- **license**: License file reference
- **readme**: README file path
- **bugs**: Bug tracking URL
- **changelog**: Changelog file path
- **manifest**: System manifest URL
- **download**: System download URL
- **minimumCoreVersion**: Minimum Foundry VTT core version
- **compatibleCoreVersion**: Compatible Foundry VTT core version
- **scripts**: Array of JavaScript files to load
- **styles**: Array of CSS files to load
- **packs**: Array of compendium packs
- **languages**: Array of language configurations
- **grid**: Grid configuration
- **primaryToken**: Primary token image path
- **secondaryToken**: Secondary token image path
- **flags**: System flags
- **settings**: Array of system settings
  - **name**: "defaultDifficulty"
  - **label**: "Default Difficulty"
  - **hint**: "Sets the default difficulty for new rolls"
  - **type**: "number"
  - **default**: 1

### 2. package.json
Node.js package configuration file.

#### Key Properties
- **name**: "gend10" - Package name
- **version**: "1.0.0" - Package version
- **description**: System description
- **main**: "index.js" - Main entry point
- **scripts**: 
  - **test**: "echo \"Error: no test specified\" && exit 1"
  - **build**: "tsc && npm run build:less"
  - **watch**: "tsc -w & npm run watch:less"
  - **build:less**: "lessc styles/actor-sheet.less dist/actor-sheet.css && lessc styles/item-sheet.less dist/item-sheet.css && lessc styles/system.less dist/system.css"
  - **watch:less**: "lessc styles/actor-sheet.less dist/actor-sheet.css && lessc styles/item-sheet.less dist/item-sheet.css && lessc styles/system.less dist/system.css"
- **repository**: Git repository information
- **keywords**: System keywords
- **author**: Author information
- **license**: License type
- **type**: "commonjs"
- **devDependencies**: Development dependencies including TypeScript and Foundry VTT types

### 3. tsconfig.json
TypeScript compilation configuration.

#### Key Properties
- **compilerOptions**:
  - **target**: "ES2020"
  - **module**: "commonjs"
  - **lib**: ["ES2020"]
  - **types**: ["jquery", "@league-of-foundry-developers/foundry-vtt-types"]
  - **moduleResolution**: "node"
  - **esModuleInterop**: true
  - **allowSyntheticDefaultImports**: true
  - **strict**: true
  - **skipLibCheck**: true
  - **forceConsistentCasingInFileNames**: true
  - **resolveJsonModule**: true
  - **outDir**: "./dist"
  - **rootDir**: "./src"
  - **declaration**: true
  - **declarationMap**: true
  - **sourceMap**: true
  - **removeComments**: true
  - **noImplicitAny**: false
  - **strictNullChecks**: false
  - **strictFunctionTypes**: false
  - **noImplicitReturns**: false
  - **noImplicitThis**: false
  - **noImplicitUseStrict**: false
  - **noFallthroughCasesInSwitch**: false
  - **noUncheckedIndexedAccess**: false
  - **noUnusedLocals**: false
  - **noUnusedParameters**: false
  - **exactOptionalPropertyTypes**: false
  - **useUnknownInCatchVariables**: false
  - **strictBindCallApply**: false
  - **strictPropertyInitialization**: false
  - **noPropertyAccessFromIndexSignature**: false
  - **allowUnreachableCode**: false
  - **allowUnusedLabels**: false
  - **importsNotUsedAsValues**: "remove"
  - **preserveConstEnums**: true
  - **stripInternal**: true
  - **suppressImplicitAnyIndexErrors**: false
  - **suppressExcessPropertyErrors**: false
  - **downlevelIteration**: true
  - **newLine**: "lf"
  - **maxNodeModuleJsDepth**: 2
  - **preserveSymlinks**: false
  - **allowJs**: false
  - **checkJs**: false
  - **jsx**: "preserve"
  - **noLib**: false
  - **useDefineForClassFields**: true
- **include**: ["src/**/*"]
- **exclude**: ["node_modules", "dist", "**/*.test.ts"]

## Configuration Management

### System Settings
The system maintains a single setting:
- **defaultDifficulty**: A numeric setting (default 1) that controls the default difficulty for rolls

### File Structure
- **assets/**: System assets
- **src/**: TypeScript source files
- **styles/**: LESS/CSS style files
- **templates/**: Handlebars template files
- **dist/**: Compiled output files (created during build)

### Build Process Configuration
- TypeScript compilation targets ES2020
- LESS compilation to CSS
- Output files placed in dist/ directory
- Source maps enabled for debugging
