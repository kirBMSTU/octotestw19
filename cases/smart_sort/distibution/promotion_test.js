import folders from "../../../steps/sidebar/folders.js";
import letters from "../../../steps/letters/index";
import layout from "../../../steps/layout.js";
import main from "../../../steps/main.js";

describe('Письма в категории умной сортировки Рассылки', () => {
    it('Письмо с промоакцией находиться во вложенной папке Рассылки', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);
        layout.setPaneAndSize(3);
        folders.expandInboxFolder();
        folders.clickSubFolderByName('Рассылки');
        letters.openBySubject('Храните файлы в Облаке');
    });
});