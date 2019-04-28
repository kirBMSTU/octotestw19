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

        const buttons = {
            'Удалить': deleteButton,
            'Переслать': forwardButton,
        };

        const buttonsByName = name => buttons[name];

        return {
            threadLetter,
            layoutMainFrame,
            newLetterButton,
            buttonsByName,
        }
    }

    isNewLetterButtonVisible() {
        try {
            this.page.waitForVisible(this.locators.newLetterButton, 1000, false);

            return true;
        } catch (err) {
            return false;
        }
    }

    pressNewLetterButton() {
        if (this.isNewLetterButtonVisible()) {
            const locator = this.locators.newLetterButton;
            this.page.click(locator);
        }
    }

    pressButtonByName(name) {
        const button = this.locators.buttonsByName(name);
        this.page.waitForVisible(button);
        this.page.click(button);
    }
}

export default new LetterReadPage();