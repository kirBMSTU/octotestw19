import main from '../../../steps/main';
import layout from '../../../steps/layout'
import folders from '../../../steps/sidebar/folders';
import settings from '../../../steps/sidebar/settings';
import letters from '../../../steps/letters';

describe('socials test smart grouping', () => {
    after('Отключить умную сортировку', () => {
        settings.setSmartGrouping(false);
    });

    it('Авторизоваться и проверить письмо-оповещение от VK', () => {
        main.open('https://mail.ru');
        main.login(process.env.SOCIAL_LOGIN, process.env.SOCIAL_PASSWORD);
        layout.setPaneAndSize(3);

        settings.setSmartGrouping(true);

        folders.expandInboxFolder();

        folders.clickSubFolderByName('Социальные сети');
        letters.checkExistsBySubject('У Вас 4 новых личных сообщения');
    });
});