$(function() {
  $(".projects .gallery .all").hover(function() {
    $(this).find(".myshadow").css({ display: "inline-block"});
  },function(){
    $(this).find(".myshadow").css({ display: "none" });
  });

  $(".projects .myGallery ul li").click(function() {
    $(this).addClass("active");
    $(this)
      .siblings()
      .removeClass("active");
  });
  $(".projects .myGallery ul li.all").click(function() {
    $(".projects .firstOne .all").fadeIn(1500);
  });
  $(".projects .myGallery ul li.mobile").click(function() {
    $(".projects .firstOne .mobile").fadeIn(1500).parent().children(".coffee,.video,.fashion").fadeOut(1500)
  });
  $(".projects .myGallery ul li.coffee").click(function() {
    $(".projects .firstOne .coffee").fadeIn(1500).parent().children(".mobile,.video,.fashion").fadeOut(1500)
  });
  $(".projects .myGallery ul li.video").click(function() {
    $(".projects .firstOne .video").fadeIn(1500).parent().children(".mobile,.coffee,.fashion").fadeOut(1500)
  });

  $(".projects .myGallery ul li.fashion").click(function() {
    $(".projects .firstOne .fashion").fadeIn(1500).parent().children(".mobile,.coffee,.video").fadeOut(1500)
  });
});
