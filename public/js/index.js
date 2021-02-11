const options = {
  columns: ["Product 1", "Product 2", "Product 3"],
  methods: ["Method 1", "Method 2"],
};

const filters = [];

$(document).ready(function () {
  $(".dropdown-btn").click(function () {
    $("#filterFormDropdown").fadeToggle();
  });
  $(".close-btn").click(function (e) {
    e.preventDefault();
    $("form").trigger("reset");
    $("#filterFormDropdown").fadeToggle();
  });
  $(".add-btn").click(function (e) {
    e.preventDefault()
    const formData = $("form")
      .serializeArray()
      .reduce(function (a, x) {
        a[x.name] = x.value;
        return a;
      }, {});
    filters.push(formData);
    console.log(filters);
    // $("#filterFormDropdown").toggle();
  });

  options.columns.forEach((value) => {
    $("#column").append(`<option value="${value}">${value}</option>`);
  });
  options.methods.forEach((value) => {
    $("#method").append(`<option value="${value}">${value}</option>`);
  });
});
