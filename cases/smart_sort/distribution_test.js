import layout from "../../steps/layout.js";
import main from "../../steps/main.js";
import letters from "../../steps/letters/index";
import folders from "../../steps/sidebar/folders.js";
import settings from "../../steps/sidebar/settings.js";


describe('Письма в категории умной сортировки Рассылки', () => {
    before(() => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);
        layout.setPaneAndSize(3);

        settings.setSmartGrouping(true);
        });

    after('Отключить умную сортировку', () => {
        settings.setSmartGrouping(false);
    });

    beforeEach(() => {
        folders.expandInboxFolder(true);
    });

    afterEach(() => {
        folders.expandInboxFolder(false);
    });

    it('Письмо с промоакцией находится во вложенной папке Рассылки', () => {
        folders.clickSubFolderByName('Рассылки');
        letters.checkExistsBySubject('Храните файлы в Облаке');
    });

    it('Письмо с рассылкой находится в метатреде Рассылки', () => {
        folders.clickFolderByName('Входящие');
        letters.openMetathreadByName('Рассылки');
        letters.checkExistsBySubject('Вас ждут 18 новых пинов'); //
    });

    it('Письмо с рассылкой находится во вложенной папке Рассылки', () => {
        folders.clickSubFolderByName('Рассылки');
        letters.checkExistsBySubject('Вас ждут 18 новых пинов');
    });

});