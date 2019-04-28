import DefaultPage from '../default';
import { foldersIDs } from "../../store";


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
	 * @param {number|null} timeout - wait timeout in ms
	 * @param {boolean} reverse
	 * @returns {boolean}
	 */
	hasLetterBySubject (subject, timeout = null, reverse = false) {
		try {
			this.page.waitForVisible(this.locators.letterBySubject(subject), timeout, reverse);

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
		const id = foldersIDs[name];
        const locator = this.locators.metathreadByID(id);
        this.page.waitForVisible(locator);
        this.page.click(locator);
	}

}

export default new LettersPage();