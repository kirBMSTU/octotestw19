import layout from "../../steps/layout.js";
import main from "../../steps/main.js";
import letters from "../../steps/letters/index";
import folders from "../../steps/sidebar/folders.js";
import settings from "../../steps/sidebar/settings.js";

describe('Письма вне категорий умной сортировки', () => {

    before(() => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);
        layout.setPaneAndSize(3);

        settings.setSmartGrouping(true);

        folders.expandInboxFolder();
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

    it('Пересланное письмо с рассылкой не попало в "Рассылки", "Соцсети"', () => {
        const subject = 'Fwd: 3 ваших пина сохранены';

        folders.clickSubFolderByName('Социальные сети');
        letters.checkNotExistsBySubject(subject);

        folders.clickSubFolderByName('Рассылки');
        letters.checkNotExistsBySubject(subject);
    });

    it('Проверить, что письмо с несколькими получателями находится во "Входящих"', () => {
        folders.clickFolderByName('Входящие');
        letters.checkExistsBySubject('Пара через минуту отменяется');
    });

    it('Проверить, что письмо от обычного пользователя не попало в "Рассылки", "Соцсети"', () => {
        const subject = 'Насчет киношки';

        folders.clickSubFolderByName('Социальные сети');
        letters.checkNotExistsBySubject(subject);

        folders.clickSubFolderByName('Рассылки');
        letters.checkNotExistsBySubject(subject);
    });

    it('Проверить, что письмо-оповещение не попало в "Рассылки", "Соцсети"', () => {
        const subject = 'Подтвердите адрес электронной почты';

        folders.clickSubFolderByName('Социальные сети');
        letters.checkNotExistsBySubject(subject);

        folders.clickSubFolderByName('Рассылки');
        letters.checkNotExistsBySubject(subject);
    });
});