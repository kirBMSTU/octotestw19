import DefaultPage from '../default';
import {
	distributionFolderID,
	socialFolderID,
} from '../qaAtrrsConfig.js'


class LettersPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators () {
		const container = '//*[contains(@class,"letter-list")]//*[contains(@class,"dataset__items")]';
		const letter = container + '//*[contains(@class,"js-letter-list-item")]';
		const scrollableLetterList = '//*[contains(@class,"letter-list")]//*[contains(@class,"scrollable")]';
		return {
			container,
			metathreadByID: (id) => container + `//*[@data-metathread="${id}"]`,
			letterBySubject: (subject) => letter + `[//*[contains(@class,"llct__subject")][@title="${subject}"]]`,
			scrollableLetterList,
		}
	}

	/**
	 * Проверяет есть ли письмо с темой
	 *
	 * @param {string} subject
	 * @param {boolean} reverse
	 * @returns {boolean}
	 */
	hasLetterBySubject (subject, reverse = false) {
		try {
			this.page.waitForVisible(this.locators.letterBySubject(subject), null, reverse);

			return true;
		} catch (err) {
			return false;
		}
	}

	/**
	 * Открыть письмо по теме
	 * @param  {string} subject
	 */
	openBySubject (subject) {
		this.page.click(this.locators.letterBySubject(subject));
	}

	openMetathreadByName (name) {
		switch (name) {
			case 'Рассылки':
                this.page.click(this.locators.metathreadByID(distributionFolderID));
                break;
			case 'Соцсети':
				this.page.click(this.locators.metathreadByID(socialFolderID));
				break
		}
	}

}

export default new LettersPage();
