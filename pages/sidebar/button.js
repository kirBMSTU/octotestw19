import DefaultPage from '../default';

class SidebarButtonPage extends DefaultPage {
    constructor() {
        super('settings-button')
    }

    get locators() {
        const container = '//*[@class="application"]';
        const sideBar = container + '//*[contains(@class,"sidebar-folders")]';
        const dropDown = sideBar + '//*[contains(@class,"settings")]//*[contains(@class,"dropdown")]';
        const dropDownButton = dropDown + '//*[contains(@class,"button2")][@title="Настройки" or @data-title="Настройки"]';
        const dropDownList = dropDown + '//*[contains(@class,"dropdown__menu")]//*[contains(@class,"list")]';
        const smartSortSwitch = dropDownList + '//*[contains(@class,"list-item")][text()="Умная сортировка писем"]';
        const smartSortCheckbox = smartSortSwitch + '//*[contains(@class,"b-checkbox")][contains(@class,"js-checkbox")]';
        return {
            container,
            smartSortCheckbox,
            dropDownButton,
        }
    }

    toggleSmartSortButton() {
        const locator = this.locators.smartSortCheckbox;
        this.page.waitForVisible(locator);
        this.page.click(locator);
    }

    toggleDropdownButton() {
        const button = this.locators.dropDownButton;
        this.page.waitForVisible(button);
        this.page.click(button);
    }

    setSmartSort(value) {
        this.toggleDropdownButton();
        const isSmartSortEnabled = this.hasClass(this.locators.smartSortCheckbox, 'b-checkbox_checked');

        if(isSmartSortEnabled !== value) {
            this.toggleSmartSortButton();
        }

        this.toggleDropdownButton();
    }

}

export default new SidebarButtonPage();