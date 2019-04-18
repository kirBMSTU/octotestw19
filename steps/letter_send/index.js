import DefaultSteps from '../default';
import page from '../../pages/letter_send';

class LetterSendSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    sendLetter(to) {
        this.page.fillRecipientField(to);
        this.page.pressSendButton();
    }

}

export default new LetterSendSteps();