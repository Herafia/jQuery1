let slide1 = $('#slide1');
let slide2 = $('#slide2');
let slide3 = $('#slide3');
let slide4 = $('#slide4');

let current = slide1;

slide1.show();
slide2.hide();
slide3.hide();
slide4.hide();

$(document).ready(boucle());

function next()
{
    switch (current)
    {
        case slide1 :
            current = slide2;
            break;
        case slide2 :
            current = slide3;
            break;
        case slide3 :
            current = slide4;
            break;
        case slide4 :
            current = slide1;
            break;
    }

    $('.slide').hide();
    current.show();

}

function boucle()
{
    setTimeout(function ()
    {
        next();
        boucle();
    }, 3500)
}

$('#next').on('click', function () {
    next();
});


function prev()
{
    switch (current)
    {
        case slide1 :
            current = slide4;
            break;
        case slide4 :
            current = slide3;
            break;
        case slide3 :
            current = slide2;
            break;
        case slide2 :
            current = slide1;
            break;
    }

    $('.slide').hide();
    current.show();

}


$('#prev').on('click', function () {
    prev();
});