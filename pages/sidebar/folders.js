import DefaultPage from '../default';

class FoldersPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators() {
		const container = '//*[contains(@class,"nav-folders")]//*[contains(@class,"nav")]';
		const folder = container + `//*[contains(@class,"nav__item")]`;
		const folderByName = (folderName) =>  {
			return folder + `[//*[contains(@class,"nav__folder-name__txt")][text()="${folderName}"]]`;
		};
        const subFolder = container + `//*[contains(@class, "nav__item_child")]`;

        // промучался час, пытаясь выбрать не блок с названием подпапки,
		// а именно весь блок папки, как это реализовано в folderByName
		// но xpath усердно игнорирует всю часть со вложеными элементами.
		// Именно на подпапках. Не смог разобраться с чем связано
        const subFolderByName = (subFolderName) => {
        	return subFolder + `//*[@class="nav__folder-name__txt"][contains(text(),"${subFolderName}")]`;
        };
        const expandButton = folderByName('Входящие') + `//*[contains(@class,"button2")]`;
        const expandButtonClosed = expandButton + `[@title="Развернуть" or @data-title="Развернуть"]`;

        return {
			container,
			expandButton,
			expandButtonClosed,
			folderByName,
			subFolderByName,
		}
	}

	/**
	 * Клик по любой папке, если сайдбар не узкий
	 * @param {string} folderName
	 */
	clickFolderByName(folderName) {
		const locator = this.locators.folderByName(folderName);
		// browser.debug();
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

	expandInboxFolder() {
		const isInboxClosed = this.isInboxClosed();

		if (isInboxClosed) {
			// раскрываем "Входящие" если они свернуты
            this.page.click(this.locators.expandButton);
        }
	}

}

export default new FoldersPage();
