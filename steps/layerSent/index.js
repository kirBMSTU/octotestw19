import DefaultSteps from '../default';
import page from '../../pages/layerSent';

class LayerSentSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    pressCloseButton() {
        this.page.pressCloseButton();
    }
}

export default new LayerSentSteps();