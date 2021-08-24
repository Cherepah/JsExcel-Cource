import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
    static classNames = ['excel__header', 'header'];

    toHTML() {
        return `
            <input class="header__input" type="text" value="Новая таблица">
            <div class="header__buttons-bar">
            <div class="button header__button">
                <i class="material-icons">delete</i>
            </div>
            <div class="button header__button">
                <i class="material-icons">exit_to_app</i>
            </div>
            </div>
        `;
    }
}
