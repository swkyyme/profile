$(document).ready(function(){
    $(document).on("click","a#home_link",function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("body").offset().top
        },800);
    });
    $(document).on("click","a#resume_link",function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#resume").offset().top
        },800);
    });
    $(document).on("click","a#contact_link",function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#contact").offset().top
        },800);
    });
    // $(document).on("click","#back_to_top_link",function(e){
    //     e.preventDefault();
    //     $('html,body').animate({
    //         scrollTop: $("body").offset().top
    //     },800);
    // });

    // if ($("#nav_collapse")){
    //     $("#nav_collapse").click(function() {
    //         $(this).toggleClass("active");
    //         // $("#nav_bar_collapse").animate ({width: 'toggle'});
    //         // $("#nav_bar_collapse").toggle("slide", { direction: "right" }, 1000);
    //         $("#nav_bar_collapse").toggleClass("side_bar");
    //         $("#nav_bar_collapse").css("transition","1s");
    //         setTimeout( function(){
    //             $("#nav_bar_collapse").css("transition-property","none");
    //         }, 1000);

    //     });
    // }
});