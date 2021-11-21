$(function(){
    $('.burger-menu').on('click', function(){
        hamburger();
    });
    $('.nav a').on('click', function(){
        hamburger();
    });
});
function hamburger(){
    $('.bars').toggleClass('active');
    if($('.bars').hasClass('active')){
        $('.nav').addClass('active');
    }else {
        $('.nav').removeClass('active');
    }
}
