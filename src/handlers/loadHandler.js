import data from '../data.js';
import dom from '../dom.js';
import createButton from '../components/createButton.js';
import createItem from '../components/createItem.js';

const loadHandler = () => {
    data.buttons.forEach((btnData) => {
        const btn = createButton(btnData);
        dom.btnContainer.append(btn);
    });

    data.menu.forEach((itemData) => {
        const article = createItem(itemData);
        dom.sectionContainer.append(article);
    });
};

export default loadHandler;
