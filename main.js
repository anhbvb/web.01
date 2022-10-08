const menuliderbar = document.querySelectorAll(".site-na")
menuliderbar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
       menu.classList.toggle("block")
    })
})

const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
       menu.classList.toggle("block")
    })
})

const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem,X){
   imgItem.addEventListener("click",function(){
        bigImg.src= imgItem.src
    })
})

function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
    if(!container.hasClass('active')){
         container.addClass('active');
        evt.preventDefault();
    }
    else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
    }
}

var offset = 500;
var duration = 500;
$(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset)
            $('#top-up').fadeIn(duration);
        else
            $('#top-up').fadeOut(duration);
    });
    $('#top-up').click(function () {
        $('body,html').animate({scrollTop: 0}, duration);
    });
});