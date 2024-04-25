/**
 * Create item elements
 * @param {object} itemData  - The item object data.
 * @returns {HTMLElement} - The item element.
 */

const createItem = (itemData) => {
    //create article
    const article = document.createElement('article');
    article.classList.add('menu-item', itemData.category);
    //article.classList.add('hide');

    //create img
    const img = document.createElement('img');
    img.classList.add('photo');
    img.src = itemData.src;
    img.alt = itemData.title;

    //create div "item-info"
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('item-info');

    //create header
    const header = document.createElement('header');

    //create h4 - title
    const title = document.createElement('h4');
    title.innerText = itemData.title;

    //create h4 - price
    const price = document.createElement('h4');
    price.classList.add('price');
    price.innerText = `$${itemData.price}`;

    header.append(title, price);

    //create p - description - item-text
    const description = document.createElement('p');
    description.classList.add('item-text');
    description.innerText = itemData.desc;

    infoContainer.append(header, description);

    article.append(img, infoContainer);

    return article;
};

export default createItem;
