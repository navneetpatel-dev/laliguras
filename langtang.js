$(window).on("load", function () {
  $("#myModal").modal("show");
});

$(function () {
  $(".openModal").click(function () {
    setTimeout(function () {
      var h = $(".modal-body .first-content p").height();
      $(".modal-body").css("height", h + 80 + "px");
      $(".modal-body .first-content p").css("height", h + "px");
    }, 250);
  });
  $(".first-button").on("click", function () {
    $(".first-content").animate({ width: "toggle" }, function () {
      $(".second-content").animate({ width: "toggle" });
      var h = $(".modal-body .second-content p").height();
      $(".modal-body").css("height", h + 80 + "px");
      $(".modal-body .second-content p").css("height", h + "px");
    });
  });
  $(".second-button").on("click", function () {
    $(".second-content").animate({ width: "toggle" }, function () {
      $(".first-content").animate({ width: "toggle" });
      var h = $(".modal-body .first-content p").height();
      $(".modal-body").css("height", h + 80 + "px");
      $(".modal-body .first-content p").css("height", h + "px");
    });
  });
});

//  For opening the leg card box, highlighting first route

function checkIfLegButtonReady(final, buttonId) {
  if (final) return 1;
  if (document.getElementById(buttonId)) {
    console.log("Button ready");
    document.getElementById(buttonId).click();
    document.getElementById("beginner-btn").click();

    setTimeout(() => {
      checkIfLegButtonReady(true, buttonId);
    }, 5000);
  } else {
    console.log("timeout again");
    setTimeout(() => {
      checkIfLegButtonReady(false, buttonId);
    }, 3000);
  }
}

checkIfLegButtonReady(false, "beginnerLeg0Button");
checkIfLegButtonReady(false, "advancedLeg0Button");
checkIfLegButtonReady(false, "expertLeg0Button");

// Navneet

// Hide and Display leg Start
const show_legContent = document.getElementById("show_icon");
const hide_legContent = document.getElementById("hide_icon");

const p_displayB = document.getElementById("beginner-leg-details");
const p_displayA = document.getElementById("advanced-leg-details");
const p_displayE = document.getElementById("expert-leg-details");

const showLegView = () => {
  p_displayB.style.display = "block";
  p_displayA.style.display = "block";
  p_displayE.style.display = "block";

  show_legContent.style.display = "none";
  hide_legContent.style.display = "block";
};

const hideLegView = () => {
  p_displayB.style.display = "none";
  p_displayA.style.display = "none";
  p_displayE.style.display = "none";

  show_legContent.style.display = "block";
  hide_legContent.style.display = "none";

  //   margin top for show icon
  show_legContent.style.marginTop = "0px";
};

show_legContent.addEventListener("click", (e) => {
  showLegView();
});

hide_legContent.addEventListener("click", (e) => {
  hideLegView();
});
// Hide and Display leg End
