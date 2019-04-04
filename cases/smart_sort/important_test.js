import layout from "../../steps/layout.js";
import main from "../../steps/main.js";
import letters from "../../steps/letters";
import folders from "../../steps/sidebar/folders.js";

describe('Письма вне категорий умной сортировки', () => {
    it('Авторизоваться и открыть важное письмо во входящих', () => {
        main.open('https://mail.ru');
        main.login('just_for_test@list.ru', 'QualityAssurance'); // так не надо )) - оки, потом исправлю))
        layout.setPaneAndSize(3);
        folders.clickFolderByName('Входящие');
        letters.openBySubject('Подтвердите адрес электронной почты'); //
    });
});