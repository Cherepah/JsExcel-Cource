import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
    static classNames = ['excel__toolbar', 'toolbar'];

    constructor($root, options) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click'],
            ...options,
        });
    }

    toHTML() {
        return `
            <div class="button toolbar__button">
                <i class="material-icons">format_align_left</i>
            </div>
            <div class="button toolbar__button">
                <i class="material-icons">format_align_center</i>
            </div>
            <div class="button toolbar__button">
                <i class="material-icons">format_align_right</i>
            </div>
            <div class="button toolbar__button">
                <i class="material-icons">format_bold</i>
            </div>
            <div class="button toolbar__button">
                <i class="material-icons">format_italic</i>
            </div>
            <div class="button toolbar__button">
                <i class="material-icons">format_underlined</i>
            </div>
        `;
    }

    onClick(event) {
        console.log(event.target);
    }
}
