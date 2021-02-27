$(document).ready(function () {
    $('.small_photo').click(function(event) {
        event.preventDefault();
        let id = $(this).attr('src');
        console.log(id);
        $('.big_photo').fadeOut(function() {
            $(this).attr('src',id).fadeIn();
            console.log(this);
        })
    })
    $('.small_photo').on('mousedown', function(e) {
        e.preventDefault();
    })
    $('.small_photo').on('contextmenu', function(e) {
        e.preventDefault();
    })
    // $('.small_photo_container').on('drag', function() {
    //     $(this).scrollX++;
    // })
})

window.addEventListener('load', function() {
    const element = document.querySelector('.small_photo_container');
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const PasgaTortganda = function(e) {
        element.style.cursor = 'grabbing';
        element.style.userSelect = 'none';

        pos = {
            left: element.scrollLeft,
            top: element.scrollTop,
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', BosibYurgizilganda);
        document.addEventListener('mouseup', YuqorigaTortganda);
    };

    const BosibYurgizilganda = function(e) {
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        element.scrollTop = pos.top - dy;
        element.scrollLeft = pos.left - dx;
    };

    const YuqorigaTortganda = function() {
        element.style.cursor = 'grab';
        element.style.removeProperty('user-select');

        document.removeEventListener('mousemove', BosibYurgizilganda);
        document.removeEventListener('mouseup', YuqorigaTortganda);
    };

    element.addEventListener('mousedown', PasgaTortganda);
});