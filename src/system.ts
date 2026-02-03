// GenD10 System - Main TypeScript File
export default class GenD10System {
  static init(): void {
    console.log('GenD10 System - Initializing');
    
    // Register system settings
    game.settings.register('gend10', 'defaultDifficulty', {
      name: 'Default Difficulty',
      hint: 'Sets the default difficulty for new rolls',
      scope: 'world',
      config: true,
      type: Number,
      default: 1
    });
    
    // Register sheet classes
    Actors.registerSheet('gend10', GenD10ActorSheet, { makeDefault: true });
    Items.registerSheet('gend10', GenD10ItemSheet, { makeDefault: true });
  }

  static ready(): void {
    console.log('GenD10 System - Ready');
    
    // Perform any actions once the system is ready
  }
}

// Custom Actor Sheet
class GenD10ActorSheet extends ActorSheet {
  static get defaultOptions(): any {
    return mergeObject(super.defaultOptions, {
      classes: ['gend10', 'sheet', 'actor'],
      template: 'systems/gend10/templates/actor-sheet.hbs',
      width: 700,
      height: 600,
      tabs: [{
        navSelector: '.tabs',
        contentSelector: '.sheet-body',
        initial: 'description'
      }]
    });
  }

  getData(): any {
    const data = super.getData();
    // Add custom data here
    return data;
  }
}

// Custom Item Sheet
class GenD10ItemSheet extends ItemSheet {
  static get defaultOptions(): any {
    return mergeObject(super.defaultOptions, {
      classes: ['gend10', 'sheet', 'item'],
      template: 'systems/gend10/templates/item-sheet.hbs',
      width: 500,
      height: 400
    });
  }
}

// Preload all data in current active directory
async function preloadData(): Promise<void> {
  console.log('Preloading all data in current active directory');
  
  // This function would typically load data from the current directory
  // For this system, we'll just log that we're preloading data
  try {
    // Example: Load all actor data
    console.log('Loading actors data...');
    
    // Example: Load all item data
    console.log('Loading items data...');
    
    // Example: Load all scene data
    console.log('Loading scenes data...');
    
    // Additional data loading logic can be added here
    
    console.log('Data preloading completed successfully');
  } catch (error) {
    console.error('Error during data preloading:', error);
  }
}

// Call preloadData when the system is ready
GenD10System.ready = function(): void {
  console.log('GenD10 System - Ready');
  
  // Preload all data in current active directory
  preloadData();
  
  // Perform any other actions once the system is ready
};
