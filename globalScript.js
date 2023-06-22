function toggleLangtangDetail() {
  document.getElementById("langtangTour").click();
}
// Add the hot spots to the viewer
let viewer = null;
if (window.innerWidth > 768) {
  // Desktop view
  viewer = pannellum.viewer("panorama", {
    type: "equirectangular",
    panorama: "https://laliguras.de/images/himalPanoramaCroppedSaledDown.webp",
    ignoreGPanoXMP: true,
    autoLoad: true,
    haov: 300 * 0.6,
    vaov: 80 * 0.6,
    vOffset: 2,
    minYaw: -76.935,
    maxYaw: 76.935,
    pitch: 0,
    minPitch: 4,
    maxPitch: 4,
    showZoomCtrl: false,
    mouseZoom: false,
    keyboardZoom: false,
    showFullscreenCtrl: false,
    hfov: 0,
    vfov: 0,
    orientationOnByDefault: true,
    hotSpots: [
      {
        pitch: 10.2,
        yaw: -2,
        type: "info",
        text: "Langtang Trek",
        cssClass: "custom-marker",
        // "cssClass": "fa fa-map-marker fa-3x",
        clickHandlerFunc: toggleLangtangDetail,
      },
    ],
  });
} else {
  // For mobile view
  viewer = pannellum.viewer("panorama", {
    type: "equirectangular",
    panorama: "https://laliguras.de/images/himalPanoramaCroppedSaledDown.webp",
    ignoreGPanoXMP: true,
    autoLoad: true,
    haov: 800 * 1.2,
    vaov: 140 * 1.2,
    vOffset: 2,
    minYaw: -76.935,
    maxYaw: 76.935,
    pitch: 0,
    minPitch: 10,
    maxPitch: 10,
    showZoomCtrl: false,
    mouseZoom: false,
    keyboardZoom: false,
    showFullscreenCtrl: false,
    hfov: 50,
    vfov: 5,
    orientationOnByDefault: true,
    hotSpots: [
      {
        cssClass: "custom-marker",
        pitch: 30,
        yaw: -10,
        type: "info",
        text: "Langtang Trek",
        clickHandlerFunc: toggleLangtangDetail,
      },
    ],
  });
}
var largeScreenMarker_Langtang = viewer.createHotSpotElement({
  pitch: 0,
  yaw: 0,
  cssClass: "hotspot-button",
  createTooltipFunc: hotspotTooltipFunc,
  sceneId: "scene2",
});

// console.log(viewer);
viewer.addHotSpot(largeScreenMarker_Langtang);
var button = document.getElementById("myButton");

// Add a click event listener
button.addEventListener("click", function () {
  // Check the screen size and perform different actions
  if (window.innerWidth < 768) {
    // Action for small screens
    console.log("Clicked on small screen");
  } else {
    // Action for larger screens
    console.log("Clicked on large screen");
  }
});
