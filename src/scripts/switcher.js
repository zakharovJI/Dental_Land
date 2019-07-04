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
            $dots[dot_selected].setAttribute('r', '2');
            $dots[dot_selected].style.stroke = '#c4c4c4';
            $dots[dot_selected].style.fill = '#c4c4c4';

            $switcher_images[dot_selected].style.display = 'none';

            if (i === 0) {
                if (dot_selected !== 0) {
                    $dots[dot_selected - 1].setAttribute('r', '7');
                    $dots[dot_selected - 1].style.stroke = '#2d6b5f';
                    $dots[dot_selected - 1].style.fill = '#2d6b5f' ;
                    $switcher_images[dot_selected - 1].style.display = 'block';

                    dot_selected -= 1;
                }
                else {
                    $dots[$dots.length - 1].setAttribute('r', '7');
                    $dots[$dots.length - 1].style.stroke = '#2d6b5f';
                    $dots[$dots.length - 1].style.fill = '#2d6b5f';
                    $switcher_images[$dots.length - 1].style.display = 'block';

                    dot_selected = $dots.length - 1;
                }
            
            } else if (i === 1) {
                if (dot_selected !== $dots.length - 1) {
                    $dots[dot_selected + 1].setAttribute('r', '7');
                    $dots[dot_selected + 1].style.stroke = '#2d6b5f';
                    $dots[dot_selected + 1].style.fill = '#2d6b5f';
                    $switcher_images[dot_selected + 1].style.display = 'block';

                    dot_selected += 1;
                }
                else {
                    $dots[0].setAttribute('r', '7');
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

    let $menu_toggler = document.getElementsByClassName('header__menu-toggler')[0];
    let $menu_toggler__close = document.getElementsByClassName('header__menu-toggler--close')[0];
    let $header = document.getElementsByClassName('header')[0];
    console.log($menu_toggler)

    let menu_collapsed = true;
    $menu_toggler.onclick = () => {
        console.log('dsfdsf')
        if (menu_collapsed) {
            $menu_toggler__close.style.display = 'block';
            $menu_toggler.style.display = 'none';
            $header.classList.toggle('header--menu-show');
            // $header.style.backgroundColor = 'rgba(0,0,0,0)';
            document.getElementsByClassName('title-wrapper')[0].className = 'title-wrapper hidden'
            document.getElementsByClassName('menu-wrapper')[0].className.replace('menu-showed', '');
            document.getElementsByClassName('menu-wrapper')[0].className = 'menu-wrapper menu-showed';
        }

        menu_collapsed = !menu_collapsed;
    }

    $menu_toggler__close.onclick = () => {
        if (!menu_collapsed) {
            $menu_toggler__close.style.display = 'none';
            $menu_toggler.style.display = 'block';
            $header.classList.toggle('header--menu-show');
            // $header.style.backgroundColor = '#fff';
            document.getElementsByClassName('title-wrapper')[0].className = 'title-wrapper showed';
            document.getElementsByClassName('menu-wrapper')[0].className = 'menu-wrapper menu-hidden';
        }

        menu_collapsed = !menu_collapsed;
    }

    let $map_buttons = document.getElementsByClassName('unsocial__button');
    let map_showed = 0;
    let myMap = undefined;

    document.getElementsByClassName('map-wrapper')[0].onclick = (event) => {
        document.getElementsByClassName('map-wrapper')[0].style.display = 'none';
        
    }

    document.getElementsByClassName('map-container')[0].onclick = (event) => {
        event.stopPropagation();
    }


    $map_buttons[0].onclick = () => {
        if (myMap === undefined) {
            ymaps.ready(init([45.028566, 38.912117]));
            document.getElementsByClassName('map-wrapper')[0].style.display = 'flex';
        } else {
            myMap.setCenter([45.028566, 38.912117]);
            document.getElementsByClassName('map-wrapper')[0].style.display = 'flex';
        }
    }

    $map_buttons[1].onclick = () => {
        
        if (myMap === undefined) {
            ymaps.ready(init([45.008234, 39.039174]));
            document.getElementsByClassName('map-wrapper')[0].style.display = 'flex';
        } else {
            myMap.setCenter([45.008234, 39.039174]);
            document.getElementsByClassName('map-wrapper')[0].style.display = 'flex';
        }
    }



    function init(coords) {
        console.log('Init is colled!')
        
        myMap = new ymaps.Map("map-container", {
            center: coords,
            zoom: 15
        });
    
        
        var myPlacemark = new ymaps.Placemark([45.028566, 38.912117]);
        myMap.geoObjects.add(myPlacemark);
        myPlacemark = new ymaps.Placemark([45.008234, 39.039174]);
        myMap.geoObjects.add(myPlacemark);

    }

    document.getElementsByClassName('feedback__done-btn')[0].onclick = () => {
        var formData = new FormData(); 
        let $inputs = document.getElementsByClassName('feedback__text-input');
        for(var i=0; i<$inputs.length; i++)
        {
            formData.append($inputs[i].name, elements[i].value);
        }
        var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function()
            {
                if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
                {
                    alert(xmlHttp.responseText);
                }
            }
            xmlHttp.open("post", "http://mrthefirst.bget.ru/form.php"); 
            xmlHttp.send(formData); 
    }
    





});