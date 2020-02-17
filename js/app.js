$(function(){
    // Img
    function ibg(){

        $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
        $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
        });
        }
        
        ibg();
        
    // Fixed header

    let header = $("#header"),
        introH = $("#intro").innerHeight();
        scrollofsize = $(window).scrollTop();

        CheckScroll(scrollofsize,introH);

    $(window).on("scroll resize", function(){
        scrollofsize = $(this).scrollTop();

        CheckScroll(scrollofsize,introH);
    });

    function CheckScroll(scrollofsize,introH){
        if(scrollofsize > introH){
            header.addClass("fixed");
        }

        else{
            header.removeClass("fixed");
        }
    }

    // Smooth scroll

    $("[data-scroll]").on("click" , function(event){
        event.preventDefault();

        let scrollId = $(this).data("scroll");
        let elementOffset = $(scrollId).offset().top;

        $("html,body").animate({
            scrollTop: elementOffset - 70
        },700);

        $("#nav-toggle").removeClass("active");
        $("#nav").removeClass("active");
    });

    // Burger

    $("#nav-toggle").on("click",function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    // DataFilter

    
$(function(){
    let filter = $("[data-filter]");

    filter.on("click", function(event){
        event.preventDefault();

        let cat = $(this).data("filter");

        if(cat == "All"){
            $("[data-cat]").removeClass("hide");
        }

        else{
            $("[data-cat]").each(function(){
                let workCat = $(this).data("cat");
    
                if(workCat != cat){
                    $(this).addClass("hide");
                }
    
                else{
                    $(this).removeClass("hide");
                }
            });
        }

        });
    });

    // SlickSlider

    $('.command__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots:true
      });

      $('.reviews__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots:true
      });
});