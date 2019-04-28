import DefaultPage from '../default';

class FoldersPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators() {
		const container = '//div[@id="app-canvas"]//*[contains(@class,"nav-folders")]//*[contains(@class,"nav")]';
		const folder = container + `//*[contains(@class,"nav__item")]`;
		const folderByName = (folderName) =>  {
			return folder + `[//*[contains(@class,"nav__folder-name__txt")][text()="${folderName}"]]`;
		};
        const subFolder = container + `//*[contains(@class, "nav__item_child")]/*/*`;

        const subFolderByName = (subFolderName) => {
        	return subFolder + `//*[@class="nav__folder-name__txt"][contains(text(),"${subFolderName}")]/ancestor::*[contains(@class,"nav__item")]`;
        };

        const inboxFolder = '//*[contains(@class,"nav__item") and @href="/inbox/"]';

        const expandButton = folderByName('Входящие') + `//*[contains(@class,"button2")]`;
        const expandButtonClosed = expandButton + `[@title="Развернуть" or @data-title="Развернуть"]`;

        return {
			container,
			expandButton,
			expandButtonClosed,
			folderByName,
			subFolderByName,
			inboxFolder,
		}
	}

	// при открытии письма (видимо) происходит фокусировка на нем
	// в результате почему-то не получается выбрать при помощи дочерних элементов папку
	// тк data-qa-id не работает, то единственный выход - href у папки входящих
	// используется этот метод там, где до этого было открыто письмо,
	// в остальных случаях используется clickFolderByName
	clickInbox() {
    	const locator = this.locators.inboxFolder;
        this.page.waitForVisible(locator);
        this.page.click(locator);
	}

	/**
	 * Клик по любой папке, если сайдбар не узкий
	 * @param {string} folderName
	 */
	clickFolderByName(folderName) {
		const locator = this.locators.folderByName(folderName);
        this.page.waitForVisible(locator);
        this.page.click(locator);
	}

	clickSubFolder(subFolderName) {
		const locator = this.locators.subFolderByName(subFolderName);
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

	isInboxClosed() {
		const locator = this.locators.expandButtonClosed;
		const isClosed = browser.isVisible(locator);

		return isClosed;
	}

	expandInboxFolder(value) {
		const isInboxClosed = this.isInboxClosed();

		if (isInboxClosed === value) {
			// раскрываем "Входящие" если они свернуты и наоборот
            this.page.click(this.locators.expandButton);
        }
	}

}

export default new FoldersPage();
