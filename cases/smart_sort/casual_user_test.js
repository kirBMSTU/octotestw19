import layout from "../../steps/layout.js";
import main from "../../steps/main.js";
import letters from "../../steps/letters";
import folders from "../../steps/sidebar/folders.js";

describe('Письма вне категорий умной сортировки', () => {
    it('Авторизоваться и открыть письмо от обычного пользователя во входящих', () => {
        main.open('https://mail.ru');
        main.login('just_for_test@list.ru', 'QualityAssurance'); // так не надо )) - оки, потом исправлю))
        layout.setPaneAndSize(3);
        folders.clickFolderByName('Входящие');
        letters.openBySubject('14 новых пинов в категории «домашний декор»'); //
    });
});