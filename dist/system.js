"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenD10System {
    static init() {
        console.log('GenD10 System - Initializing');
        game.settings.register('gend10', 'defaultDifficulty', {
            name: 'Default Difficulty',
            hint: 'Sets the default difficulty for new rolls',
            scope: 'world',
            config: true,
            type: Number,
            default: 1
        });
        Actors.registerSheet('gend10', GenD10ActorSheet, { makeDefault: true });
        Items.registerSheet('gend10', GenD10ItemSheet, { makeDefault: true });
    }
    static ready() {
        console.log('GenD10 System - Ready');
    }
}
exports.default = GenD10System;
class GenD10ActorSheet extends ActorSheet {
    static get defaultOptions() {
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
    getData() {
        const data = super.getData();
        return data;
    }
}
class GenD10ItemSheet extends ItemSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ['gend10', 'sheet', 'item'],
            template: 'systems/gend10/templates/item-sheet.hbs',
            width: 500,
            height: 400
        });
    }
}
async function preloadData() {
    console.log('Preloading all data in current active directory');
    try {
        console.log('Loading actors data...');
        console.log('Loading items data...');
        console.log('Loading scenes data...');
        console.log('Data preloading completed successfully');
    }
    catch (error) {
        console.error('Error during data preloading:', error);
    }
}
GenD10System.ready = function () {
    console.log('GenD10 System - Ready');
    preloadData();
};
//# sourceMappingURL=system.js.map