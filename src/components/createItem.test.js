/**
 * @jest-environment jsdom
 */

import createItem from './createItem.js';

describe('create an item element', () => {
    const item = createItem({
        id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.99,
        src: './assets/item-1.jpeg',
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    });

    test('nodeName -> ARTICLE', () => {
        expect(item.nodeName).toEqual('ARTICLE');
    });

    test('className -> menu-item breakfast', () => {
        expect(item.className).toEqual('menu-item breakfast');
    });

    test('childElementCount -> 2', () => {
        expect(item.childElementCount).toEqual(2);
    });
});
