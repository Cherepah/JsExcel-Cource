import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeHandler} from './table.resize';
import {shouldResize} from './table.functions';

export class Table extends ExcelComponent {
    static classNames = ['excel__table', 'table'];

    constructor($root) {
        super($root,
            {
                name: 'Table',
                listeners: ['mousedown'],
            },
        );
        this.clicked = false;
        this.moveCount = 0;
        this.initTarget;
    }

    toHTML() {
        return createTable(40);
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event);
        }
    }
}
