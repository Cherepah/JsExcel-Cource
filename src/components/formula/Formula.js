import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    static classNames = ['excel__formula', 'formula'];

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click'],
        });
    }

    toHTML() {
        return `
            <div class="formula__info">fx</div>
            <div class="formula__input" contenteditable spellcheck="false"></div>
        `;
    }

    onInput(event) {
        console.log('Formula: onInput', event.target.textContent.trim());
    }

    onClick() {
        console.log('click');
    }
}
