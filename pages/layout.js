import DefaultPage from './default';

class Layout extends DefaultPage {
	constructor() {
		super('layout')
	}

	get locators() {
		const container = '//*[@class="application"]';
		const sideBar = container + '//*[contains(@class,"sidebar-folders")]';
		const dropDown = sideBar + '//*[contains(@class,"settings")]//*[contains(@class,"dropdown")]';
		const dropDownButton = dropDown + '//*[contains(@class,"button2")][@title="Настройки" or @data-title="Настройки"]';
		const dropDownList = dropDown + '//*[contains(@class,"dropdown__menu")]//*[contains(@class,"list")]';
		const layoutSwitch = dropDownList + '//*[contains(@class,"list-item")][text()="Список писем с колонкой письма"]';
		const paneCheckbox = layoutSwitch + '//*[contains(@class,"b-checkbox")][contains(@class,"js-checkbox")]';
		return {
			container,
			sideBar,
			dropDown,
			dropDownButton,
			dropDownList,
			layoutSwitch,
			paneCheckbox
		}
	}

	toggleDropdownButton() {
		const button = this.locators.dropDownButton;
		this.page.waitForVisible(button);
		this.page.click(button);
	}

	setPane(pane) {
		this.toggleDropdownButton();
		this.page.waitForVisible(this.locators.dropDownList);
		
		const is3pane = this.hasClass(this.locators.paneCheckbox, 'b-checkbox_checked');

		switch (pane) {
			case 2:
				if (is3pane) {
					this.page.click(this.locators.layoutSwitch);
				} else {
					// закрываем за собой меню
					this.toggleDropdownButton();
				}
				break;
			case 3:
				if (!is3pane) {
					this.page.click(this.locators.layoutSwitch);

				} else {
					// закрываем за собой меню
					this.toggleDropdownButton();
				}
				break;
		}
	}

	setLayout (width) {
		this.currentSize = width;
		const aspect_ratio = 1.3;
		let height = width / aspect_ratio;
		if (width < Layout.sizeXS) {
			height = width * aspect_ratio;
		}

		this.page.setViewportSize({width, height});
	}

}

export default new Layout();
