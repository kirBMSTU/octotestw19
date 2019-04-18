import DefaultSteps from '../default';
import page from '../../pages/sidebar/folders';

class FoldersSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	clickInbox() {
		this.page.clickInbox();
	}

	clickFolderByName(folderName) {
		this.page.clickFolderByName(folderName);
	}

	clickSubFolderByName(subFolderName) {
		this.page.clickSubFolder(subFolderName);
	}

    /**
     * Скрывает или раскрывает вложенные во "Входящие" папки
     *
     * @param {boolean} value - желаемое значение (true - открыто)
     */
	expandInboxFolder(value = true) {
		this.page.expandInboxFolder(value)
	}
}

export default new FoldersSteps();
