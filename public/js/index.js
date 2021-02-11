$(document).ready(function () {
  $(".dropdown-btn").click(function () {
    $("#filterFormDropdown").toggle();
  });
  $(".close-btn").click(function (e) {
    e.preventDefault();
    $("#filterFormDropdown").toggle();
  });
});
