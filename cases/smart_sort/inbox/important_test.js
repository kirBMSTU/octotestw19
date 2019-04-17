import layout from "../../../steps/layout.js";
import main from "../../../steps/main.js";
import letters from "../../../steps/letters/index";
import folders from "../../../steps/sidebar/folders.js";

describe('Письма вне категорий умной сортировки', () => {
    it('Авторизоваться и открыть важное письмо во входящих', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);
        layout.setPaneAndSize(3);
        folders.clickFolderByName('Входящие');
        letters.openBySubject('Подтвердите адрес электронной почты'); //
    });
});