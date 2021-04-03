$(document).ready(function () {
  // ---Traversing---
  $("body").first().css("background", "#24245a");
  $("h1").first().css("color", "orange");
  // $("li").first().css("color", "red");
  // $("li").eq(1).css("color", "pink");
  // $("li").last().css("color", "green");

  // ---Siblings next nextUntil('param) nextAll ~ prev---
  // $(".sibling").siblings().css("color", "pink");
  // $(".sibling").next().css("color", "red");
  // $(".sibling").nextAll().css("color", "green");
  // $(".sibling").nextUntil(".rn").css("color", "green");

  // ---children dan parent jquery---
  // $("ul").children("span").css("color", "green");
  // $("ul").find("span").css("color", "green");

  // $(".sibling").parent().css("border", "5px solid green");
  // $(".sibling").parents(".container").css("border", "5px solid green");
  $(".sibling").parentsUntil("body").css("border", "5px solid green");
});
