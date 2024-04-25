/**
 * @jest-environment jsdom
 */
import createButton from './createButton.js';

describe('create a button element', () => {
    const button = createButton({
        id: 'all',
        text: 'All',
    });

    test('NodeName -> BUTTON', () => {
        expect(button.nodeName).toEqual('BUTTON');
    });
    test('id -> all', () => {
        expect(button.id).toEqual('all');
    });
    test('innerText -> All', () => {
        expect(button.innerText).toEqual('All');
    });
    test('className -> filter-btn', () => {
        expect(button.className).toEqual('filter-btn');
    });
    test('type -> button', () => {
        expect(button.type).toEqual('button');
    });
});

// describe('create a flight component ', () => {
//     const flightDom = createFlight({
//         id: 1,
//         number: 'VQ-903',
//         name: 'VQ-903',
//         plane: 'ATR725',
//         departureDate: '2023-08-05 13:45:00',
//         origin: 'DAC',
//         arrivalDate: '2023-08-05 14:40:00',
//         destination: 'CGP',
//         stops: 0,
//     });

//     test('NodeName -> DIV', () => {
//         expect(flightDom.nodeName).toEqual('DIV');
//     });
// });
