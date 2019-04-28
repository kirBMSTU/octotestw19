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

        const buttons = {
            'Настройки': dropDownButton,
            'Умная сортировка': smartSortCheckbox,
        };

        const buttonByName = name => buttons[name];

        return {
            container,
            smartSortCheckbox,
            buttonByName,
        }
    }

    toggleButtonByName(name) {
        const locator = this.locators.buttonByName(name);
        this.page.waitForVisible(locator);
        this.page.click(locator);
    }

    setSmartSort(value) {
        this.toggleButtonByName('Настройки');
        const isSmartSortEnabled = this.hasClass(this.locators.smartSortCheckbox, 'b-checkbox_checked');

        if(isSmartSortEnabled !== value) {
            this.toggleButtonByName('Умная сортировка');
        }

        this.toggleButtonByName('Настройки');
    }

}

export default new SidebarButtonPage();