import filterHandler from '../handlers/filterHandler.js';

/**
 * Create a button element.
 *
 * @param {object} btnData - the button object data.
 * @returns {HTMLElement} The button element.
 */

const createButton = (btnData) => {
    //create buttons
    const btn = document.createElement('button');
    btn.classList.add('filter-btn');
    btn.type = 'button';
    btn.id = btnData.id;
    btn.innerText = btnData.text;

    btn.addEventListener('click', () => {
        const { id } = btn;
        filterHandler(id);
    });
    return btn;
};

export default createButton;
