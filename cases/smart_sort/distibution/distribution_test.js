import layout from "../../../steps/layout.js";
import main from "../../../steps/main.js";
import letters from "../../../steps/letters/index";
import folders from "../../../steps/sidebar/folders.js";

describe('Письма в категории умной сортировки Рассылки', () => {
    it('Письмо с рассылкой находится во вложенной папке Рассылки', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);
        layout.setPaneAndSize(3);
        folders.expandInboxFolder();
        folders.clickSubFolderByName('Рассылки');
        letters.openBySubject('Вас ждут 18 новых пинов');
    });
});