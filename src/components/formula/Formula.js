import {ExcelComponent} from '@core/ExcelComponent';
import {$f} from '../../core/Dom';

export class Formula extends ExcelComponent {
    static classNames = ['excel__formula', 'formula'];

    constructor($root, options) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'keydown'],
            ...options,
        });
    }

    toHTML() {
        return `
            <div class="formula__info">fx</div>
            <div class="formula__input" contenteditable spellcheck="false"></div>
        `;
    }

    init() {
        super.init();

        this.$formula = this.$root.find('.formula__input');

        this.$on('table:select', ($cell) => {
            this.$formula.text($cell.text());
        });

        this.$on('table:input', ($cell) => {
            this.$formula.text($cell.text());
        });
    }

    onInput(event) {
        this.$emit('formula:input', $f(event.target).text());
    }

    onKeydown(event) {
        const keys = ['Enter', 'Tab'];
        if (keys.includes(event.key)) {
            event.preventDefault();

            this.$emit('formula:done');
        }
    }
}
