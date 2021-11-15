$(function () {
  const btnToggleMenu = $("header .main-navbar .m-navbar-logo .toggle-btn");
  const wraperMenu = $("header .main-navbar .m-navbar-links");
  const rangeSlider = $(".refine-search .range-wrap .bar");
  const rangeSlideShowValue = $(".refine-search .range-wrap .input-number");
  // Collapses Function
  const collapseWrap = $(".collapse-wrap");

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
    const that = $(this);
    let collapseToggle = $(this).find(".collapse-toggle-btn");
    /* -------------------------------------------------------------------------- */
    collapseToggle.on("click", function () {
      let theCollapseMenu = $(this).next();
      theCollapseMenu.slideToggle(durationANM, function () {
        console.log($(this));
      });
      if (theCollapseMenu.hasClass("hide")) {
        $(this).find(".mdi").removeClass("mdi-menu-down");
        $(this).find(".mdi").addClass("mdi-menu-up");
        theCollapseMenu.removeClass("hide");
      } else {
        $(this).find(".mdi").addClass("mdi-menu-down");
        $(this).find(".mdi").removeClass("mdi-menu-up");
        theCollapseMenu.addClass("hide");
      }
    });
  });
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
