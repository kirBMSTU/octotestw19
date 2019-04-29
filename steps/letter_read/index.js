import DefaultSteps from '../default';
import page from '../../pages/letter_read';

class LetterReadSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    pressForwardButton() {
        this.page.pressButtonByName('Переслать');

        // если есть черновик, то при нажатии на "Переслать" вылезет попап, на котором надо тыкнуть "Новое письмо"
        if (this.page.isDropDownVisible()) {
            this.page.pressButtonByName('Новое письмо');
        }
    }

    pressDeleteButton() {
        this.page.pressButtonByName('Удалить');
    }
}

export default new LetterReadSteps();