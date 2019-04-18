import DefaultPage from '../default';

class LetterSendPage extends DefaultPage {
    constructor() {
        super('letter-send');
    }

    get locators () {
        const container = '//*[contains(@class,"compose-windows")]';
        const recipientField = container + '//*[@data-type="to"]//input[@type="text"]';
        const sendButtonBlock = container + '//*[contains(@class,"compose-app__buttons")]//*[contains(@class,"button2")]';
        const sendButton = sendButtonBlock + '//*[@class="button2__txt"][text()="Отправить"]/ancestor::*[contains(@class,"button2")]';
        return {
            container,
            recipientField,
            sendButton
        }
    }

    fillRecipientField(value) {
        const field = this.locators.recipientField;
        this.page.waitForVisible(field);
        this.page.click(field);
        this.page.setValue(field, value);
    }

    pressSendButton() {
        const button = this.locators.sendButton;
        this.page.waitForVisible(button);
        this.page.click(button);
    }

}

export default new LetterSendPage();