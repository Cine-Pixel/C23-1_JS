$(".parent li").hover(
  function () {
    $(">ul.child", this).slideDown(500);
  },
  function () {
    $(">ul.child", this).slideUp(500);
  }
);

let prev = "";

$(".slide").hover(function () {
  if (prev) {
    prev.css("opacity", "1");
  }
  $(this).css("opacity", "0.5");
  $(".main-slide img").attr("src", $(this).find("img").attr("src"));
  $(".main-slide h4").text($(this).find("h4").text());
  prev = $(this);
});
