//----------------------메뉴바 슬라이딩, 다른부분 회색 ----------------------
function wrapWindowByMask_menu() {
  //화면의 높이와 너비를 구한다.
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();

  //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
  $("#fade").css({ width: maskWidth, height: maskHeight });
}

/// 화면의 중앙에 레이어띄움
function showLayer_menu() {
  wrapWindowByMask_menu();

  // $("#sub_menu").css("display", "block");
  document.getElementById("sub_menu").style.width = "720px";
  $("html, body").addClass("hidden");

  $("#fade").show();
  $("#sub_menu").show();
}

function close_menu() {
  $("#fade").hide();
  document.getElementById("sub_menu").style.width = "0px";
  $("html, body").removeClass("hidden");
}

// ------------------- 나의 셀렉션 --------------------------

function wrapWindowByMask_sel() {
  //화면의 높이와 너비를 구한다.
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();

  //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
  $("#fade").css({ width: maskWidth, height: maskHeight });
}

/// 화면의 중앙에 레이어띄움
function showLayer_sel() {
  wrapWindowByMask_sel();

  document.getElementById("selection_area").style.width = "720px";
  $("#selection_area").show();
}

function close_sel() {
  document.getElementById("selection_area").style.width = "0px";
}
