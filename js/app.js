$(function () {
  const btnToggleMenu = $("header .main-navbar .m-navbar-logo .toggle-btn");
  const wraperMenu = $("header .main-navbar .m-navbar-links");
  const rangeSlider = $(".refine-search .range-wrap .bar");
  const rangeSlideShowValue = $(".refine-search .range-wrap .input-number");
  // Collapses Function
  const collapseWrap = $(".collapse-wrap");
  const dropdownsWrap = $(".dropdown-wrap");

  let durationANM = 700;

  /* ------------------------------- Main Navbar ------------------------------ */
  btnToggleMenu.on("click", () => {
    $(wraperMenu).slideToggle(durationANM);
  });
  /* ---------------------- Add function to range slider ---------------------- */
  let rageInstance = rangeSlider.slider({
    min: 7,
    max: 535,
    range: true,
    value: [7, 535],
    ticks_labels: [`7£`, "535£"],
  });

  rageInstance.on("slideStart", (event) => {
    rangeSlideShowValue.slideDown(durationANM);
  });
  rageInstance.on("slideStop", (event) => {
    rangeSlideShowValue.delay(800).slideUp();
  });
  rageInstance.on("change", ({ value }) => {
    let newValue = value.newValue;
    rangeSlideShowValue.text(`${newValue[0]} - ${newValue[1]}`);
  });

  /* ----------------------------- Hanlde Collapse ---------------------------- */
  collapseWrap.each(function () {
    let collapseToggle = $(this).find(".collapse-toggle-btn");
    /* -------------------------------------------------------------------------- */
    collapseDropdowns(collapseToggle);
  });

  dropdownsWrap.each(function () {
    let collapseToggle = $(this).find(".dropdown-toggle-btn");
    /* -------------------------------------------------------------------------- */
    collapseDropdowns(collapseToggle, true);
  });

  function collapseDropdowns(toggleBTN, changeBorder = false) {
    let collapseToggle = toggleBTN;
    collapseToggle.on("click", function () {
      let menueList = $(this).next();
      menueList.slideToggle(durationANM / 4);
      if (menueList.hasClass("hide")) {
        $(this).find(".mdi").removeClass("mdi-menu-down");
        $(this).find(".mdi").addClass("mdi-menu-up");
        menueList.removeClass("hide");
        collapseToggle.removeAttr("style");
      } else {
        // Change Border
        if (changeBorder) {
          collapseToggle.css({
            borderRadius: "5px 5px 0 0",
          });
        }
        $(this).find(".mdi").addClass("mdi-menu-down");
        $(this).find(".mdi").removeClass("mdi-menu-up");
        menueList.addClass("hide");
      }
    });
  }
  /* ------------------------------- Handle Date ------------------------------ */
  $("#checkinID").datepicker({
    dateFormat: "D dd/mm",
  });
  $("#checkoutID").datepicker({
    dateFormat: "D dd/mm",
  });
  let availableTags = ["Egypt", "Cairo", "Camel", "Suria", "Suadi"];
  $(".search-form").autocomplete({
    source: availableTags,
  });
});
