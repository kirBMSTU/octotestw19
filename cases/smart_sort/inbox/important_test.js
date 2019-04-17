import layout from "../../../steps/layout.js";
import main from "../../../steps/main.js";
import letters from "../../../steps/letters/index";
import folders from "../../../steps/sidebar/folders.js";

describe('Письма вне категорий умной сортировки', () => {
    it('Проверить, что письмо-оповещение не попало в "Рассылки", "Соцсети"', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);
        layout.setPaneAndSize(3);

        folders.expandInboxFolder();

        const subject = 'Подтвердите адрес электронной почты';

        folders.clickSubFolderByName('Социальные сети');
        letters.checkNotExistsBySubject(subject);

        folders.clickSubFolderByName('Рассылки');
        letters.checkNotExistsBySubject(subject);
    });
});