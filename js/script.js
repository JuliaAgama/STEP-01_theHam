;

/********** HOME SECTION **********/

    // 1. Search field
(() => {
    $('#magnifier-trigger').click(() => {$('#search-wrap').toggleClass('hidden')});

     // 2. Подменю со ссылкой на все разделы страницы
        // 2.1. Добавить подменю

    //$('html, body').css({scrollTop: 0});

    const $pageMenu = $('<div class="page-menu"></div>')
    $('.main-menu').after($pageMenu);
    $pageMenu.append($('<a href="#services-section" class="page-link">services</a>'));
    $pageMenu.append($('<a href="#work-section" class="page-link">portfolio</a>'));
    $pageMenu.append($('<a href="#blog-section" class="page-link">news</a>'));
    $pageMenu.append($('<a href="#about-section" class="page-link">credits</a>'));
    $pageMenu.append($('<a href="#images-section" class="page-link">images</a>'));

    const $pageLinks = $('.page-link');
    $pageLinks.mouseenter((event) => { $(event.target).css({color: '#18cfab'}) });
    $pageLinks.mouseleave((event) => { $(event.target).css({color: ''}) });

    // 2.2. При клике на пункт меню - плавно прокручивать страницу вниз до выбранного места.
    $.fn.slowScrollTo = function(speed) {
        let position = $($(`${this[0].hash}`)).offset().top;
        $('html, body').animate({scrollTop: position-100}, 1000);
    };
    $pageLinks.click(function(event) {$(this).slowScrollTo(1000)});

})();

// 3. кнопка "Наверх" с фиксированным позиционариванием. При клике на нее - плавно прокрутить страницу в самый верх

const $btnToTop = ('<div class="btn-to-top">^</div>');
$($('script')[0]).before($btnToTop);

$.fn.slowDisplay = function(speed) {
    $(window).scrollTop() > $(window).innerHeight() ? $(this).fadeIn(speed) : $(this).fadeOut(speed);
};

$(document).scroll(function() {$('.btn-to-top').slowDisplay('slow')});

$('.btn-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 'slow');
});





/********** SERVICES SECTION **********/

(() => {

    // 0. создать массив с объектами сервисов, в каждом картинка-линк и текст.

        // 0.1. создать конcтруктор объектов и объекты на его основе.
    function Service (name, picture, text) {
        this.name = name;
        this.picture = picture;
        this.text = text;
    };

    let servicesWeb = new Service (
        'web design',
        'img/services/web-design.png',
        'Tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

    let servicesGraphic = new Service (
        'graphic design',
        'img/services/graphic-design.jpg',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit cididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

    let servicesSupport = new Service (
        'online support',
        'img/services/online-support.jpg',
        'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id etur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

    let servicesApp = new Service (
        'app design',
        'img/services/app-design.jpg',
        'Iipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

    let servicesMarketing = new Service (
        'online marketing',
        'img/services/online-marketing.jpg',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt officia deseruntut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

    let servicesSeo = new Service (
        'seo services',
        'img/services/seo-service.jpg',
        'Amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in cserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum');

         // 0.2. создать массив из объектов:
    let servicesArray =[servicesWeb, servicesGraphic, servicesSupport, servicesApp, servicesMarketing, servicesSeo];


    // 1. по умолчанию выделить первый пункт и показать первый контент:

    $($('.service-item')[0]).addClass('selected');

    displayServiceContent ($('#services-content'), servicesArray[0]);

    function displayServiceContent ($where, what) {
        $where.empty();
        $(`<div class="service-pic"><img src=${what['picture']} alt="picture NO FOUND"></div><div class="service-text"><p>${what['text']}</p></div>`).appendTo($where);
    };

    // 2. установить слушателя на клик по меню сервисов:

    $('.service-item').click(function() {

        // 2.1. удалить у всех пунктов класс selected и добавить класс selected кликнутому:
        $('.services-menu > .selected').removeClass('selected');
        $(this).addClass('selected');

        // 2.2. показать нужные картинку и текст:
        let contentIndex = $('.service-item').index(this);
        displayServiceContent($('#services-content'), servicesArray[contentIndex]);
    });
})();



/********** WORK SECTION **********/

( () => {

    // 0. Создать массивы картинок под каждую категорию, из них автоматически создается один большой миксовый массив (категория и урл) - под любое количество картинок, которые могут добавить в каждую категорию.

    let galleryGraphicArray = [];
    galleryGraphicArray[0] = ['gallery-graphic', 'img/graphic-design/graphic-design1.jpg'];
    galleryGraphicArray[1] = ['gallery-graphic', 'img/graphic-design/graphic-design2.jpg'];
    galleryGraphicArray[2] = ['gallery-graphic', 'img/graphic-design/graphic-design3.jpg'];
    galleryGraphicArray[3] = ['gallery-graphic', 'img/graphic-design/graphic-design4.jpg'];
    galleryGraphicArray[4] = ['gallery-graphic', 'img/graphic-design/graphic-design5.jpg'];
    galleryGraphicArray[5] = ['gallery-graphic', 'img/graphic-design/graphic-design6.jpg'];
    galleryGraphicArray[6] = ['gallery-graphic', 'img/graphic-design/graphic-design7.jpg'];
    galleryGraphicArray[7] = ['gallery-graphic', 'img/graphic-design/graphic-design8.jpg'];
    galleryGraphicArray[8] = ['gallery-graphic', 'img/graphic-design/graphic-design9.jpg'];
    galleryGraphicArray[9] = ['gallery-graphic', 'img/graphic-design/graphic-design10.jpg'];
    galleryGraphicArray[10] = ['gallery-graphic', 'img/graphic-design/graphic-design11.jpg'];
    galleryGraphicArray[11] = ['gallery-graphic', 'img/graphic-design/graphic-design12.jpg'];
    galleryGraphicArray[12] = ['gallery-graphic', 'img/graphic-design/graphic-design13.jpg'];
    galleryGraphicArray[13] = ['gallery-graphic', 'img/graphic-design/graphic-design14.jpg'];
    galleryGraphicArray[14] = ['gallery-graphic', 'img/graphic-design/graphic-design15.jpg'];

    let galleryWebArray = [];
    galleryWebArray[0] = ['gallery-web', 'img/web-design/web-design1.jpg'];
    galleryWebArray[1] = ['gallery-web', 'img/web-design/web-design2.jpg'];
    galleryWebArray[2] = ['gallery-web', 'img/web-design/web-design3.jpg'];
    galleryWebArray[3] = ['gallery-web', 'img/web-design/web-design4.jpg'];
    galleryWebArray[4] = ['gallery-web', 'img/web-design/web-design5.jpg'];
    galleryWebArray[5] = ['gallery-web', 'img/web-design/web-design6.jpg'];
    galleryWebArray[6] = ['gallery-web', 'img/web-design/web-design7.jpg'];

    let galleryLandingArray = [];
    galleryLandingArray[0] = ['gallery-landing', 'img/landing-page/landing-page1.jpg'];
    galleryLandingArray[1] = ['gallery-landing', 'img/landing-page/landing-page2.jpg'];
    galleryLandingArray[2] = ['gallery-landing', 'img/landing-page/landing-page3.jpg'];
    galleryLandingArray[3] = ['gallery-landing', 'img/landing-page/landing-page4.jpg'];
    galleryLandingArray[4] = ['gallery-landing', 'img/landing-page/landing-page5.jpg'];
    galleryLandingArray[5] = ['gallery-landing', 'img/landing-page/landing-page6.jpg'];
    galleryLandingArray[6] = ['gallery-landing', 'img/landing-page/landing-page7.jpg'];

    let galleryWordpressArray = [];
    galleryWordpressArray[0] = ['gallery-wordpress', 'img/wordpress/wordpress1.jpg'];
    galleryWordpressArray[1] = ['gallery-wordpress', 'img/wordpress/wordpress2.jpg'];
    galleryWordpressArray[2] = ['gallery-wordpress', 'img/wordpress/wordpress3.jpg'];
    galleryWordpressArray[3] = ['gallery-wordpress', 'img/wordpress/wordpress4.jpg'];
    galleryWordpressArray[4] = ['gallery-wordpress', 'img/wordpress/wordpress5.jpg'];
    galleryWordpressArray[5] = ['gallery-wordpress', 'img/wordpress/wordpress6.jpg'];
    galleryWordpressArray[6] = ['gallery-wordpress', 'img/wordpress/wordpress7.jpg'];
    galleryWordpressArray[7] = ['gallery-wordpress', 'img/wordpress/wordpress8.jpg'];
    galleryWordpressArray[8] = ['gallery-wordpress', 'img/wordpress/wordpress9.jpg'];
    galleryWordpressArray[9] = ['gallery-wordpress', 'img/wordpress/wordpress10.jpg'];


    let galleryFullArray = [];
    for (let i = 0, length = Math.max(galleryGraphicArray.length, galleryWebArray.length, galleryLandingArray.length, galleryWordpressArray.length); i < length; i++) {
        if(galleryGraphicArray[i]) {galleryFullArray.push(galleryGraphicArray[i]);};
        if(galleryWebArray[i]) {galleryFullArray.push(galleryWebArray[i]);};
        if(galleryLandingArray[i]) {galleryFullArray.push(galleryLandingArray[i]);};
        if(galleryWordpressArray[i]) {galleryFullArray.push(galleryWordpressArray[i]);};
    };


    // 1. по умолчанию выделить первый пункт, и очистить галерею

    $($('.work-item')[0]).addClass('selected');
    $('#work-gallery').empty();


    // 2. запустить галерею по выбранному пункту  (по умолчанию - 'All')

        // 2.1. отфильтровать галерею по выбранному пункту (категории).
    let galFiltered = createFilteredGallery($('#gallery-all'));

    function createFilteredGallery ($selectedFilter) {
        let galFiltered = [];
        if ($selectedFilter[0].id === 'gallery-all') {
            galFiltered = galleryFullArray;
        } else {
            galleryFullArray.forEach( (el) => {
                if(el[0] === $selectedFilter[0].id) {galFiltered.push(el);};
            });
        };
        return galFiltered;
    };

        // 2.2. показать 12 картинок из отфильтрованной галереи
    displayPics(galFiltered);

    function displayPics (gal) {
        let indStart = 0 + $('.gallery-pic').length;
        let indFinish =  12 + $('.gallery-pic').length;
        for (let i = indStart, length = gal.length; (i < length && i < indFinish); i++) {
            let $picToDisplay = $(`<div class="gallery-pic ${gal[i][0]}"><img src="${gal[i][1]}" alt="img NOT FOUND"></div>`).appendTo($('#work-gallery'));

        // 2.3. по наведению мыши на картинку подставлять ховер-заставку, при отводе мышки - убирать ее
            coverPicture($picToDisplay);
        };

        function coverPicture ($el) {
            $el.mouseenter(function () {
                let text;
                if ($(this).hasClass('gallery-graphic')) {text = 'graphic design'};
                if ($(this).hasClass('gallery-web')) {text = 'web design'};
                if ($(this).hasClass('gallery-landing')) {text = 'landing pages'};
                if ($(this).hasClass('gallery-wordpress')) {text = 'wordpress sites'};

                $(`<div class="gallery-mouseover">
                       <div class="mouseover-buttons">
                           <a href="#" class="link-btn"><i class="fas fa-link"></i></a>
                           <div class="zoom-btn"><i class="fas fa-search-plus"></i></div>
                       </div>
                       <div class="mouseover-text">
                           <p>creative design</p>
                           <p>${text}</p>
                       </div>
                    </div>`).appendTo($(this));

        // 2.4. при нажатии на лупу на ховер-заставке - показыать увеличенное изображение
        // 2.5. при нажатии на увеличенное изображение - закрывать его.
                displayLargePic($('.zoom-btn'));
            });

            $el.mouseleave(function () {this.removeChild(this.lastChild) });
        };

        function displayLargePic ($btn) {
            $btn.click(function() {
                let $zoom = $(`<div class="zoom">${this.parentElement.parentElement.previousElementSibling.outerHTML}</div>`).insertAfter($('#work-section'));
                $('.zoom > img').click(function() {$zoom.remove() });
            });
        };

        // 2.6. показывать кнопку 'load more', если не все еще показаны

        $('.gallery-pic').length >= gal.length ? $('#load-more').hide() : $('#load-more').show();
    };


    // 3. Установить слушателя на клик по списку work-menu

    $('.work-item').click( function(event) {

        // 3.1. по клику выделить только кликнутый пункт и очистить галерею
        $('#work-menu > .selected').removeClass('selected');
        $(this).addClass('selected');
        $('#work-gallery').empty();

        // 3.2. запустить галлерею по выбранному пункту (повторить 2.)

        galFiltered = createFilteredGallery($(this));
        displayPics(galFiltered);
    });


    // 4. По клику на кнопку 'load more имитировать подгрузку - показать прелоадер на 2 сек.

    $('#load-more').click( function() {

        displayPreloader($(this));

        function displayPreloader ($but) {
            $preloader = $(`<div class="gooey"><span class="dot"></span><div class="dots"><span></span><span></span><span></span></div></div>`);
            $but.append($preloader);

            setTimeout(function() {
                $preloader.remove();


    // 5. Загружать следующие 12 картинок и (не)показывать кнопку 'load-more':

            displayPics(galFiltered);

            },2000);
        };
    });
})();


/********** ABOUT SECTION **********/

( () => {

    /// 0.1. создать массив из объектов с данными клиентов

    function Client (name, position, company, picture, cite) {
        this.name = name;
        this.position = position;
        this.company = company;
        this.picture = picture;
        this.cite = cite;
    };

    let client01 = new Client (
        'Bernard Cowly',
        'CEO',
        'UX GROUP',
        'img/about/client-1.jpg',
        'Blinteger dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'
    );
    let client02 = new Client (
        'Caroline Downfort',
        'Manager',
        'Vainy Cliearfix',
        'img/about/client-2.jpg',
        'Adig. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'
    );
    let client03 = new Client (
        'Mary White',
        'Producing Accounter',
        'Max & Co.',
        'img/about/client-3.jpg',
        'Oquam dui laoreet sem, non dictum odio nisi facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'
    );
    let client04 = new Client (
        'Hasan Ali',
        'UX Designer',
        'Mandille Inc.',
        'img/about/client-4.jpg',
        'Integer dignissim, augue tempus ucies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laorltricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.'
    );

    let clients =[client01, client02, client03, client04];


    // 0.2. Содать и вставить контент в карусель
    for (let i = 0, length = clients.length; i < length; i++) {
        let $sayingContent = (
        `<div class="saying-content client-0${i}">
                    <div class="saying-quote">
                        <img src="img/about/blockquotes.png" alt="img NOT FOUND">
                    </div>
                    <div class="saying-cite">
                        <p>${clients[i].cite}</p>
                    </div>
                    <div class="saying-name">
                        <p>${clients[i].name}</p>
                        <p>${clients[i].position}</p>
                    </div>
                    <div class="saying-pic-box">
                        <div class="saying-pic-face data-index="${i}" style="background-image: url(${clients[i].picture});"></div>
                    </div>
               </div>`);
        $('.saying-block').append($sayingContent);
    };


    // 1. Slick plugin

    $(document).ready(function(){
        $('.saying-block').slick({
            dots: true,
            fade: true,
        });
        // все нужные изменения сделаны в скрипте и стиле\темах самого слика
    });


})();



/********** IMAGES SECTION **********/

( () => {

    // 1. показать картинки :

    displayImages($('.images-container'), '.image-item');

    function displayImages ($container, selector) {

        let $imagesHidden = $(`.${$container[0].className} .hidden`);
        for (let i = 0, length = $imagesHidden.length; i < 8 && i < length; i++) {
            $($imagesHidden[i]).removeClass('hidden');

    // 2. по наведению мыши на картинку подставлять ховер-заставку
            coverPicture(($imagesHidden[i]).children);

            function coverPicture (htmlCollection) {
                let arr = Array.prototype.slice.call(htmlCollection);
                arr.forEach(function(el) {
                    $(el).mouseenter(function () {
                        $imagesMouseover = $(`<div class="images-mouseover">
                                   <div class="zoom-btn"><i class="fas fa-search-plus"></i></div>
                                   <div class="expand-btn"><i class="fas fa-expand-arrows-alt"></i></div>
                            </div>`);
                        $imagesMouseover.appendTo($(this));

    // 3. при нажатии на кнопки на ховер-заставке - показыать увеличенное изображение, при нажатии на увеличенное изображение - закрывать его.
                        displayLargePic($('.images-mouseover .zoom-btn'));
                        displayLargePic($('.images-mouseover .expand-btn'));
                    });
                    function displayLargePic ($btn) {
                        $btn.click(function() {
                            let $zoom = $(`<div class="zoom">${this.parentElement.previousElementSibling.outerHTML}</div>`).insertAfter($('#images-section'));
                            $('.zoom > img').click(function() {$zoom.remove() });
                        });
                    };
    // 4. при отводе мышки с картинки - убирать ховер-заставку
                    $(el).mouseleave(function () {this.removeChild(this.lastChild) });
                });
            };

    // 5. убрать кнопку, если нет больше непоказанных картинок
            if (i === length-1) { $(this).remove() };
        };

    // 6. показывать открытые картинки в виде кладки Masonry:
        $container.imagesLoaded().always( function() {
            $container.masonry({
                itemSelector: selector,
                fitWidth: true,
                columnWidth: 380,
                horizontalOrder: true,
                gutter: 10,
            });
        });
    };

    // 7. при клике на кнопку - имитировать подгрузку - показать прелоадер на 2 сек.

    $('.images-section .btn').click(function(){

        displayPreloader($(this));

        function displayPreloader ($but) {
            $preloader = $(`<div class="gooey"><span class="dot"></span><div class="dots"><span></span><span></span><span></span></div></div>`);
            $but.append($preloader);

            setTimeout(function() {
                $preloader.remove();

    // 8.  показать еще порцию картинок
            displayImages($('.images-container'), '.image-item');

            },2000);
        }
    });

})();

