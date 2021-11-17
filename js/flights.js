$(function () {
  const btnToggleMenu = $("header .main-navbar .m-navbar-logo .toggle-btn");
  const wraperMenu = $("header .main-navbar .nav-items-wrap");
  const rangeTags = $(".range-time-item .rtime-range input");
  const calendersTag = $(".calendar");
  // Collapses Function
  const collapseWrap = $(".collapse-wrap");
  const dropdownsWrap = $(".dropdown-wrap");
  const wrapTabs = $(".nav-tabs-wrap");

  let durationANM = 700;

  /* ------------------------------- Main Navbar ------------------------------ */
  btnToggleMenu.on("click", () => {
    $(wraperMenu).slideToggle(durationANM);
  });
  /* ------------------------------ Tabs Function ----------------------------- */
  wrapTabs.each(function () {
    const buttonsTab = $(this).find(".tab-buttons .tab-btn-item");
    buttonsTab.each(function () {
      $(this).on("click", function () {
        let distination = $(this).data("tab-distination");
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(`.${distination}`).slideDown(durationANM);
        $(`.${distination}`).siblings().slideUp(durationANM);
        $(`.${distination}`).siblings().removeClass("active");
      });
    });
  });
  /* ---------------------- Add function to range slider ---------------------- */

  rangeTags.slider({
    range: true,
    value: [0, 535],
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
        $(this).find("i.mdi").removeClass("mdi-menu-down");
        $(this).find("i.mdi").addClass("mdi-menu-up");
        menueList.removeClass("hide");
        collapseToggle.removeAttr("style");
      } else {
        // Change Border
        if (changeBorder) {
          collapseToggle.css({
            borderRadius: "5px 5px 0 0",
          });
        }
        $(this).find("i.mdi").addClass("mdi-menu-down");
        $(this).find("i.mdi").removeClass("mdi-menu-up");
        menueList.addClass("hide");
      }
    });
  }
  /* ------------------------------- Handle Date ------------------------------ */
  calendersTag.datepicker({
    dateFormat: "D dd/mm",
  });
});
