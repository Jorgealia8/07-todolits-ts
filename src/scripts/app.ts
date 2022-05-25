import { Footer } from '../components/footer.js';
import { Header } from '../components/header.js';
import { Menu } from '../components/menu.js';

(() => {
    document.addEventListener('DOMContentLoaded', app);
})();

function app() {
    new Header('div.header');
    new Menu('slot.menu');
    new Footer('footer');
}
