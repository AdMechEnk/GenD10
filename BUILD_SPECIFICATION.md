# BUILD SPECIFICATION

## Overview
This document specifies the build process requirements and tooling for the GenD10 system, ensuring consistent compilation and deployment across all environments.

## Build Process

### Build Scripts
The system uses npm scripts for build automation:

1. **build**: Primary build command
   - Compiles TypeScript files using tsc
   - Compiles LESS files using lessc
   - Outputs to dist/ directory

2. **watch**: Watch mode for development
   - Watches TypeScript files for changes
   - Watches LESS files for changes
   - Automatically rebuilds on changes

3. **build:less**: LESS compilation only
   - Compiles actor-sheet.less to dist/actor-sheet.css
   - Compiles item-sheet.less to dist/item-sheet.css
   - Compiles system.less to dist/system.css

4. **watch:less**: Watch mode for LESS files only
   - Watches and compiles LESS files on changes

## Build Tool Requirements

### TypeScript Compiler (tsc)
- **Target**: ES2020
- **Module**: CommonJS
- **Strict Mode**: Enabled with skipLibCheck for external libraries
- **Output Directory**: ./dist
- **Source Directory**: ./src
- **Declaration Files**: Generated
- **Source Maps**: Generated for debugging

### LESS Compiler (lessc)
- **Input Files**: 
  - styles/actor-sheet.less
  - styles/item-sheet.less
  - styles/system.less
- **Output Files**:
  - dist/actor-sheet.css
  - dist/item-sheet.css
  - dist/system.css

## Build Output Structure

### Dist Directory Contents
- **dist/system.js**: Compiled TypeScript output
- **dist/actor-sheet.css**: Compiled actor sheet styles
- **dist/item-sheet.css**: Compiled item sheet styles  
- **dist/system.css**: Compiled system styles

## Development Environment

### Prerequisites
- Node.js (version specified in package.json)
- npm (package manager)
- TypeScript compiler
- LESS compiler

### Development Workflow
1. Make changes to source files in src/ directory
2. Run `npm run watch` for continuous development
3. Run `npm run build` to create production build
4. Files are automatically compiled to dist/ directory

## Continuous Integration

### Automated Build Process
- All build scripts are designed to be run in CI/CD environments
- Build process should be reproducible across different machines
- Dependencies are managed through package.json
- Build artifacts are placed in predictable locations

## Version Control Integration

### Git Integration
- Build artifacts are excluded from version control (in .gitignore)
- Source files are tracked in version control
- Build scripts are versioned along with source code
- Package.json contains dependency specifications

## Performance Considerations

### Build Optimization
- Incremental compilation for faster rebuilds
- Minification of CSS output
- Source map generation for debugging
- Parallel compilation where possible

### Memory Management
- Build process should not consume excessive memory
- Temporary files are cleaned up appropriately
- Large file compilation is handled efficiently

## Error Handling

### Build Errors
- Compilation errors are reported clearly
- Build process fails fast on critical errors
- Non-critical warnings are logged but don't block build
- Error messages include actionable information
