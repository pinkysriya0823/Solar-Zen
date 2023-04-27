$(window).scroll(function(){
    var scrollPos =$(this).scrollTop();
    $(".back").css({
        'background-size' : 100 + scrollPos +'%'
    });
});

$(".button").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
  });
