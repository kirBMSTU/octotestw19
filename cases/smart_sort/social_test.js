import main from '../../steps/main';
import layout from '../../steps/layout'
import folders from '../../steps/sidebar/folders';
import settings from '../../steps/sidebar/settings';
import letters from '../../steps/letters/index';
import letterSend from '../../steps/letter_send/index';
import letterRead from '../../steps/letter_read/index';
import layerSend from '../../steps/layerSent/index';

describe('Письма в категории умной сортировки "Cоцсети"', () => {
    before(() => {
        main.open('https://mail.ru');
        main.login(process.env.SOCIAL_LOGIN, process.env.SOCIAL_PASSWORD);
        layout.setPaneAndSize(3);

        settings.setSmartGrouping(true);

        folders.expandInboxFolder();
    });

    it('Авторизоваться и проверить письмо-оповещение от VK', () => {
        folders.clickSubFolderByName('Социальные сети');
        letters.checkExistsBySubject('У Вас 4 новых личных сообщения');
    });

    it('Переслать самому себе письмо от соцсети и проверить, что оно попало во входящие', () => {

        // setup: тут мы отправляем сами себе письмо, закрываем модалку
        const letterToResend = 'У Вас 4 новых личных сообщения';
        folders.clickSubFolderByName('Социальные сети');
        letters.openBySubject(letterToResend);
        letterRead.pressForwardButton();
        letterSend.sendLetter(process.env.SOCIAL_LOGIN);
        layerSend.pressCloseButton();

        // test: проверяем что письмо попало во "Входящие"
        const newSubject = `Fwd: ${letterToResend}`;
        folders.clickInbox();
        letters.checkExistsBySubject(newSubject);

        // teardown: удаляем за собой письмо
        letters.openBySubject(newSubject);
        letterRead.pressDeleteButton();
    });
});