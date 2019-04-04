import DefaultSteps from '../default';
import page from '../../pages/letters';

class LettersSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	openBySubject(subject) {
		this.page.hasLetterBySubject(subject);
		this.page.openBySubject(subject);
	}

	openMetathreadByName(name) {
		this.page.openMetathreadByName(name)
	}

}

export default new LettersSteps();
