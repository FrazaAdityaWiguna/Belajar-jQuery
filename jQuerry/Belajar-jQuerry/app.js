$(document).ready(function () {
  // --------------Selection--------------
  // $("h1").css("color", "orange");
  // $("#box1").css("color", "green");

  // Spesifikasi Selection
  // $(".boxes:first").css("color", "red");

  // Jika menggunakan eq dimulai dari 0
  // $(".boxes:eq(1)").css("color", "purple");
  // $(".boxes:last").css("color", "pink");

  // --------------Event--------------
  // $("h1").click(function () {
  //   $("h1").css("color", "black");
  //   $("h1").css("cursor", "pointer");
  // });

  // $("h1").mouseenter(function () {
  //   $("h1").css("color", "purple");
  //   $("h1").css("cursor", "pointer");
  // });

  // $("h1").mouseleave(function () {
  //   $("h1").css("color", "pink");
  // });

  // $(".boxes").mouseenter(function () {
  //   $(this).css("color", "pink");
  //   $(this).css("cursor", "pointer");
  // });

  // $(".boxes").mouseleave(function () {
  //   $(this).css("color", "#000");
  // });

  // --------------get dan set nilai--------------
  // $("form").submit(function () {
  //   var input = $("#inputText").val();
  // $("h1").text(input);
  // $("h1").html(input);

  // Mencegah sifat bawaan
  // event.preventDefault();
  // });

  // --------------add and remove element--------------
  // prepand dan append add element didalam conteinernya
  // $("#boxes_wrap").prepend("<div>Awal Element</div>");
  // $("#boxes_wrap").append("<div>Akhir Element</div>");

  // before dan after add element diluar conteinernya
  // $("#boxes_wrap").before("<div>before Element</div>");
  // $("#boxes_wrap").after("<div>after Element</div>");

  // remove menghapus element and empty: mengosongkan isi element
  // $("#boxes_wrap").remove();
  // $("#boxes_wrap").empty();

  // --------------CSS--------------
  // $("h1").click(function () {
  // css
  // $("h1").css({
  //   color: "orange",
  //   background: "black",
  //   fontSize: "20px",
  // });

  //  ADD CLASS
  // $("h1").addClass("change");
  // $("h1").removeClass("remove");
  // $("h1").toggleClass("change");
  // });

  // --------------Dimensi Width and Height--------------
  // Width dan Height = kontent
  var dimensi = `Width= ${$("#boxes_wrap").width(200)} and height= ${$("#boxes_wrap").height(200)}`;

  // innerWidth dan innerHeight = padding + margin + kontent
  // var dimensi = `Width= ${$("#boxes_wrap").innerWidth()} and height= ${$("#boxes_wrap").innerHeight()}`;

  // outerWidth dan outerHeight = kontent +padding + margin + border
  // var dimensi = `Width= ${$("#boxes_wrap").outerWidth()} and height= ${$("#boxes_wrap").outerHeight()}`;
  $("#box1").text(dimensi);
});
