import DefaultSteps from '../default';
import page from '../../pages/sidebar/folders';

class FoldersSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	clickFolderByName(folderName) {
		this.page.clickFolderByName(folderName);
	}

	clickSubFolderByName(subFolderName) {
		this.page.clickSubFolder(subFolderName);
	}

	expandInboxFolder() {
		this.page.expandInboxFolder()
	}
}

export default new FoldersSteps();
