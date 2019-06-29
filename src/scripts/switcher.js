document.addEventListener('DOMContentLoaded', () => {
    let dot_selected = 0;
    let description_image_selected = 0;
    let menu_item_selected = 0;

    let $dots = document.getElementsByClassName('dot');
    let $arrows = document.getElementsByClassName('switcher__arrow-wrapper');
    let $switcher_images = document.getElementsByClassName('slider-wrapper__item');
    let $description_images = document.getElementsByClassName('images-wrapper__item');

    let $header_menu = document.getElementsByClassName('item__radio');
    let $footer_menu = document.getElementsByClassName('footer-item__radio');

    for(let i = 0; i < $arrows.length; i++) {
        $arrows[i].onclick = () => {
            console.log('hkjhkjhs')
            $dots[dot_selected].style.r = '2'
            $dots[dot_selected].style.stroke = '#c4c4c4';
            $dots[dot_selected].style.fill = '#c4c4c4';

            $switcher_images[dot_selected].style.display = 'none';

            if (i === 0) {
                if (dot_selected !== 0) {
                    $dots[dot_selected - 1].style.r = '7';
                    $dots[dot_selected - 1].style.stroke = '#2d6b5f';
                    $dots[dot_selected - 1].style.fill = '#2d6b5f' ;
                    $switcher_images[dot_selected - 1].style.display = 'block';

                    dot_selected -= 1;
                }
                else {
                    $dots[$dots.length - 1].style.r = '7';
                    $dots[$dots.length - 1].style.stroke = '#2d6b5f';
                    $dots[$dots.length - 1].style.fill = '#2d6b5f';
                    $switcher_images[$dots.length - 1].style.display = 'block';

                    dot_selected = $dots.length - 1;
                }
            
            } else if (i === 1) {
                if (dot_selected !== $dots.length - 1) {
                    $dots[dot_selected + 1].style.r = '7';
                    $dots[dot_selected + 1].style.stroke = '#2d6b5f';
                    $dots[dot_selected + 1].style.fill = '#2d6b5f';
                    $switcher_images[dot_selected + 1].style.display = 'block';

                    dot_selected += 1;
                }
                else {
                    $dots[0].style.r = '7';
                    $dots[0].style.stroke = '#2d6b5f';
                    $dots[0].style.fill = '#2d6b5f';
                    $switcher_images[0].style.display = 'block';

                    dot_selected = 0;
                }
            }
        }
    }

    for (let i = 0; i < $description_images.length; i++) {
        $description_images[i].onclick = (item) => {
            console.log(item.target)
            $description_images[description_image_selected].classList.toggle('item--big');

            item.target.classList.toggle('item--big');
            
            description_image_selected = i;

        }
    }

    for (let i = 0; i < $header_menu.length; i++) {
        $header_menu[i].onchange = () => {
            $footer_menu[menu_item_selected].checked = 'false';
            $footer_menu[i].checked = 'true';

        }

        $footer_menu[i].onchange = () => {
            $header_menu[menu_item_selected].checked = 'false';
            $header_menu[i].checked = 'true';
        }

        menu_item_selected = i;
    }
});