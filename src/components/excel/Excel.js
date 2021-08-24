import {$f} from '@core/Dom';

export class Excel {
    constructor(selector, options) {
        this.$el = $f(selector);
        this.components = options.components || [];
    }

    getRoot() {
        const $root = $f.create('div', ['excel']);

        this.components = this.components.map( (Component) => {
            const $el = $f.create('div', Component.classNames);
            const component = new Component($el);
            // DEBUG
            // if (component.name) {
            //     window['c' + component.name] = component;
            // }
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
}
