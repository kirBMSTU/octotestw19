import layout from "../../../steps/layout.js";
import main from "../../../steps/main.js";
import letters from "../../../steps/letters/index";
import folders from "../../../steps/sidebar/folders.js";

describe('Письма вне категорий умной сортировки', () => {
    it('Авторизоваться и открыть письмо от обычного пользователя во входящих', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);
        layout.setPaneAndSize(3);
        folders.expandInboxFolder();

        folders.clickSubFolderByName('Социальные сети');
        letters.checkNotExistsBySubject('1 ваш пин сохранен');

        folders.clickSubFolderByName('Рассылки');
        letters.checkNotExistsBySubject('Насчет киношки');


    });
});