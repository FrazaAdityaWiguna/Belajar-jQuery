$(document).ready(function () {
  // hide - show - toggle
  // $(".btn1").click(function () {
  //   $("#box1").show();
  // });
  // $(".btn2").click(function () {
  //   $("#box1").hide();
  // });
  // $(".btn3").click(function () {
  //   $("#box1").toggle();
  // });

  // fadeIn(time) - fadeOut(time) - fadeToggle(time) - fadeTo(time, opacity)
  // $(".btn1").click(function () {
  //   $("#box1").fadeIn(2000);
  // });
  // $(".btn2").click(function () {
  //   $("#box1").fadeOut(1000);
  // });
  // $(".btn3").click(function () {
  //   $("#box1").fadeToggle(1500);
  // });
  // $(".btn3").click(function () {
  //   $("#box1").fadeTo(1500, 0.3);
  // });

  // slideUp - SlideDown - SlideToggle
  // $(".btn1").click(function () {
  //   $("#box1").slideDown(2000);
  // });

  // $(".btn2").click(function () {
  //   $("#box1").slideUp(1000);
  // });

  // $(".btn3").click(function () {
  //   $("#box1").slideToggle(1500);
  // });

  // $(".btn4").click(function () {
  //   $("#box1").stop();
  // });

  // stop animation = callback - chaining
  function selesai() {
    console.log("Selesai");
  }

  $(".btn1").click(function () {
    $("#box1").slideDown(2000, selesai).fadeTo(2000, 0.5);
  });

  $(".btn2").click(function () {
    $("#box1").slideUp(1000);
  });

  $(".btn3").click(function () {
    $("#box1").slideToggle(1500);
  });

  $(".btn4").click(function () {
    $("#box1").stop();
  });
});
