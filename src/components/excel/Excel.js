import {$f} from '@core/Dom';
import {Emitter} from '../../core/Emitter';

export class Excel {
    constructor(selector, options) {
        this.$el = $f(selector);
        this.components = options.components || [];
        this.emitter = new Emitter();
    }

    getRoot() {
        const $root = $f.create('div', ['excel']);
        const componentOptions = {
            emitter: this.emitter,
        };

        this.components = this.components.map( (Component) => {
            const $el = $f.create('div', Component.classNames);
            const component = new Component($el, componentOptions);
            $el.html(component.toHTML());
            $root.append($el);
            return component;
        });

        return $root;
    }

    render() {
        this.$el.append(this.getRoot());

        this.components.forEach((component) => {
            component.init();
        });
    }

    destroy() {
        this.components.forEach((component) => {
            component.destroy();
        });
    }
}
