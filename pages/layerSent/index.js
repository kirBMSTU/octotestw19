import DefaultPage from '../default';

class LayerSentPage extends DefaultPage {
    constructor() {
        super('layer-sent');
    }

    get locators () {
        const layerWindow = '//*[@class="layer-window"]';
        const layerSent = layerWindow + '//*[@class="layer-sent-page"]';
        const closeButton = layerSent + '//*[contains(@class,"button2")][@title="Закрыть"]';
        return {
            closeButton,
        }
    }

    pressCloseButton() {
        const button = this.locators.closeButton;
        this.page.waitForVisible(button);
        this.page.click(button);
    }
}

export default new LayerSentPage();