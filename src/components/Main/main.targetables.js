// @see
const interceptComponent = MainComponent => {
    // Execute our JSX manipulation
    MainComponent.addImport("FreeGift from 'src/FreeGift/freeGift.js'");
    MainComponent.insertBeforeJSX('Header', '<FreeGift />');
};

exports.interceptComponent = interceptComponent;
