import DefaultPage from '../default';

class LetterReadPage extends DefaultPage {
    constructor() {
        super('letter-read');
    }

    get locators () {
        const threadLetter = '//*[contains(@class,"thread__letter")]';
        const forwardButton = threadLetter + '//*[@class="letter__footer-button"]//*[contains(@class,"button2")][@title="Переслать"]';
        const dropdown = threadLetter + '//*[@class="dropdown__menu"]';
        const newLetterButton = dropdown + '//*[contains(@class,"list-item") and text()="Новое письмо"]';

        const layoutMainFrame = '//*[@class="layout__main-frame"]';
        const deleteButton = layoutMainFrame + '//*[contains(@class,"button2") and @title="Удалить"]';

        return {
            threadLetter,
            layoutMainFrame,
            newLetterButton,
            deleteButton,
            forwardButton,
            dropdown,
        }
    }

    isDropDownVisible() {
        try {
            this.page.waitForVisible(this.locators.dropdown, 1000, false);

            return true;
        } catch (err) {
            return false;
        }
    }

    pressButtonByName(name) {
        const buttons = {
            'Удалить': this.locators.deleteButton,
            'Переслать': this.locators.forwardButton,
            'Новое письмо': this.locators.newLetterButton
        };

        const button = buttons[name];
        this.page.waitForVisible(button);
        this.page.click(button);
    }
}

export default new LetterReadPage();