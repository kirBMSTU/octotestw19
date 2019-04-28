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
        assert.ok(!this.page.hasLetterBySubject(subject, 1000), 'Letter not expected here!');
	}

    checkExistsBySubject(subject) {
        assert.ok(this.page.hasLetterBySubject(subject, 1000), 'Letter expected here!');
    }

}

export default new LettersSteps();
