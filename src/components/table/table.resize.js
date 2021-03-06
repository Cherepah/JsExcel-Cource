import {$f} from '../../core/Dom';

export function resizeHandler($root, event) {
    const $resizer = $f(event.target);
    const $parent = $resizer.parentClosest('[data-type="resizable"]');
    const coords = $parent.getCoords();
    const type = $resizer.data.resize;
    const cells = $root.findAll(`[data-col="${$parent.data.col}"]`);
    const sideProp = type === 'col' ? 'bottom' : 'right';
    let value;

    $resizer.css({
        opacity: 1,
        [sideProp]: '-1000px',
    });

    document.onmousemove = (e) => {
        if (type === 'col') {
            const delta = e.pageX - coords.right;
            value = coords.width + delta;
            $resizer.css({
                right: -delta + 'px',
            });
        } else {
            const delta = e.pageY - coords.bottom;
            value = coords.height + delta;
            $resizer.css({
                bottom: -delta + 'px',
            });
        }
    };

    document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;

        if (type === 'col') {
            $parent.css({
                width: value + 'px',
            });

            cells.forEach( (el) => {
                    el.style.width = value + 'px';
                });
        } else {
            $parent.css({
                height: value + 'px',
            });
        }

        $resizer.css({
            opacity: '',
            right: 0,
            bottom: 0,
        });
    };
}
