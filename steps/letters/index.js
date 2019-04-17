import DefaultSteps from '../default';
import page from '../../pages/letters';

var assert = require('assert');

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

	checkNotExistsBySubject(subject) {
        assert.strictEqual(this.page.hasLetterBySubject(subject), false);
	}

}

export default new LettersSteps();
