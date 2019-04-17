import DefaultSteps from '../default';
import page from '../../pages/sidebar/button';

class SettingsSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    setSmartGrouping(value) {
        this.page.setSmartSort(value);
    }

}

export default new SettingsSteps();