function showHotelDetailDiv(data) {
  // console.log(data)
  document.getElementById("hotelDetailText").innerHTML = "";
  if (data) {
    document.getElementById("hotelDetailText").innerHTML = `
    
      <div class="" style="width: 350px; padding: 0px; text-align: center; font-size: larger; border: none;">
      
          <button class="button" onclick='${imageViewer360(
            data.images
          )}; showImageViewer360Div();' style=' display:block;
                  width: 50px;
                  border-radius: 50%;
                  border: 1px solid wheat;
                  position: relative;
                  top:35px;
                  float: left;
                  left: 285px;
                  color:white;
                  z-index: 1000;
                  background-color:#600060;
                  '>360</button>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img class="d-block w-100" style="height: 170px;"
                          src="${data.images[0]}"
                          alt="First slide">
                  </div>
                  <div class="carousel-item" style="height: 170px;">
                      <img class="d-block w-100" src="${
                        data.images[3]
                      }" alt="Second slide">
                  </div>
                  <div class="carousel-item" style="height: 170px;">
                      <img class="d-block w-100" src="${
                        data.images[2]
                      }" alt="Third slide">
                  </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" style="backgroundColor:black;">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
              </a>
          </div>
          <div class="row" style="padding-top: 5px; text-align:left; padding:10px;">
            <div class="col margin-left:0px">
              <h4><b>${data.name}</b></h4>
              <h6>$20 per night</h6>
              </div>
              <div class="col-4 row" style="padding-top: 15px; align-items:right; margin-right:0px padding:10px;">
              <span class="col-1 fa fa-star fa-1xl" style="padding-right: 2px;"></span> &nbsp;
              <span class="col-1 fa fa-star fa-1xl" style="padding-right: 2px;"></span> &nbsp;
              <span class="col-1 fa fa-star fa-1xl" style="padding-right: 2px;"></span> &nbsp;
              <span class="col-1 fa fa-star fa-1xl" style="padding-right: 2px;"></span> &nbsp;
              <span class="col-1 fa fa-star fa-1xl" style="padding-right: 2px;"></span>    
              </div>
              </div>
          <div class="row p-3">
              <span class="col-1 fa fa-wifi fa-3xl" style="padding-right: 5px; widt5p; height:20px;"></span>
              <span class="col-2 fa fa-shower fa-3xl" style="padding-right: 5px; wid5:20px; height:20px;"></span>
              <span class="col-3 fa fa-television fa-3xl" style="padding-right: 5px; width:20px; height:20px;"></span>
              
          </div>
          <div class="row p-4">
              <button class="col btn btn-success p-1">Details</button> &nbsp;
              <button class="col btn btn-success p-1">Book</button>
          </div>
          </div>
  
          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
              aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style="overflow-y: hidden;  width: 400px; padding: 10px; text-align: center; font-size: larger;">
              <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content" style="width: 350px; align-items: center; ">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">${
                            data.name
                          }</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="border:none; backgroundColor:white;">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                          <h5>Rs.1500 per night</h5>
                          <p>(cost includes dinner and breakfast)</p>
  
                          <div class="row">
                              <h5 class="col-7">Additional Services</h5>
                              <div class="row col-5">
                                  <span class="col-1 fa fa-star fa-2xl" style="padding-right: 2px;"></span> &nbsp;
                                  <span class="col-1 fa fa-star fa-2xl" style="padding-right: 2px;"></span> &nbsp;
                                  <span class="col-1 fa fa-star fa-2xl" style="padding-right: 2px;"></span> &nbsp;
                                  <span class="col-1 fa fa-star fa-2xl" style="padding-right: 2px;"></span> &nbsp;
                                  <span class="col-1 fa fa-star fa-2xl" style="padding-right: 2px;"></span> 
                                 
                          </div>
                          
                          <div class="row">
                              <span class="col-2 fa fa-wifi " style="padding-right: px;"></span>
                              <h5 class="col-7">WIFI: ${
                                data.facilities.wifi == "x" ? "Yes" : "No"
                              }</h5>
                              
                          </div>

                          <div class="row">
                              <span class="col-2 fa fa-phone " style="padding-right: px;"></span>
                              <h5 class="col-7">Contact Number: ${
                                data.contactPerson
                              }</h5>
                              
                          </div>
                          <div class="row">
                              <span class="col-2 fa fa-bed " style="padding-right: px;"></span>
                              <h5 class="col-8">Bedsheet Cleaning: ${
                                data.facilities.bedsheetCleaning == "D"
                                  ? "Daily"
                                  : data.facilities.bedsheetCleaning == "W3"
                                  ? "within 3 days"
                                  : data.facilities.bedsheetCleaning == "W7"
                                  ? "within 7 days"
                                  : "more than 7 days"
                              }</h5>
                              
                          </div>
                          <div class="row">
                              <span class="col-2 fa fa-bolt " style="padding-right: px;"></span>
                              <h5 class="col-8">Electricity: ${
                                data.facilities.electricity == "x"
                                  ? "Yes"
                                  : "No"
                              }</h5>
                              
                          </div>

                          <div class="row">
                              <span class="col-2 fa fa-shower" style="padding-right: px;"></span>
                              <h5 class="col-8">Electricity: ${
                                data.facilities.hotShower == "x" ? "Yes" : "No"
                              }</h5>
                          </div>
                          <div class="row">
                              <span class="col-2 fa fa-mobile" style="padding-right: px;"></span>
                              <h5 class="col-8">Mobile Pay: ${
                                data.facilities.mobilePay == "x" ? "Yes" : "No"
                              }</h5>
                          </div>
                          <div class="row">
                              <span class="col-2 fa fa-home " style="padding-right: px;"></span>
                              <h5 class="col-8">Room Insulation: ${
                                data.facilities.roomInsulation == "B"
                                  ? "Basic"
                                  : data.facilities.washingMethod == "M"
                                  ? "Moderate"
                                  : "Productive"
                              }</h5>
                          </div>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-success">Book</button>
                      </div>
                  </div>
              </div>
          </div>
  
          <div class="modal fade" id="exampleModalCenter-1" tabindex="-1" role="dialog"
              aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content" style="width: 400px; align-items: center;">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">${
                            data.name
                          }</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="lose">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <h4>Entry Date:
                          <input type="datetime-local" id="Test_DatetimeLocal">
                      </h4>
                      <h4>Leave Date:
                          <input type="datetime-local" id="Test_DatetimeLocal">
                      </h4>
                      
                      <div class="form-check text-left" style="text-align: left;">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                          <label class="form-check-label" for="flexCheckDefault">
                              Pay Cash at the Counter
                          </label>
                      </div>
                      
                      <div class="form-check text-left" >
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                          <label class="form-check-label" for="flexCheckDefault">
                              Credit Card
                          </label>
                      </div>
                      
                      <div class="form-check text-left">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                          <label class="form-check-label" for="flexCheckDefault">
                              PayPal
                          </label>
                      </div>
                      
                      <div class="modal-footer">
                          <button type="button" class="btn btn-success" id="myBtn">Confirm</button>
                      </div>
                      
                  </div>
              </div>
          </div>
      </div>
      <div class="toast" id="myToast">
          <div class="toast-header">
              <strong class="me-auto"><i class="bi-gift-fill"></i>Booking SucessFull </strong>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
              Your Booking is Sucessfull.
          </div>
      </div>
  
  
      `;
  }
  document.getElementById("hotelDetails").classList.add("show");
}

function imageViewer360(imageURLArray) {
  // console.log(imageURLArray)
  totalNoOfImages = imageURLArray.length;
  // for image management
  let sceneArray = [];
  for (let i in imageURLArray) {
    let scene = {
      title: "image_" + i.toString(),
      type: "equirectangular",
      panorama: imageURLArray[i],
    };
    sceneArray.push(scene);
  }
  panoramaViewer(sceneArray);
  // showImageViewer360Div();
}

function showImageViewer360Div() {
  document.getElementById("imageViewer360").classList.add("show");
}

function legCardGenerator(legInfo, difficulty, i) {
  const legButtonsContainer = document.getElementById(
    difficulty + "-leg-buttons"
  );
  const prevButton = document.getElementById(difficulty + "-prev-button");
  const nextButton = document.getElementById(difficulty + "-next-button");
  const legDetails = document.getElementById(difficulty + "-leg-details");
  const legDetailsText = document.getElementById(
    difficulty + "-leg-details-text"
  );

  let totalLegs = legInfo.length;
  let currentGroupIndex = 0;
  let currentActiveLegIndex = 0;
  const groupSize = 3;
  const totalGroups = Math.ceil(totalLegs / groupSize);

  function generateLegButtons() {
    legButtonsContainer.innerHTML = "";

    for (let i = 0; i < totalLegs; i++) {
      const leg = legInfo[i];
      const startElevation = getElevations(leg.start);
      const endElevation = getElevations(leg.end);

      const details = `
        <div class=" " style="background-color: transparent; color: #62626B;">
              <div>
                  <div class="row p-lg-1">
                      <div class="col-3 text-left">Start</div>
                      <div class="col-8 text-left"> ${leg.start} (${startElevation} m)</div>
                  </div>
                  <div class="row p-lg-1">
                      <div class="col-3 text-left">End</div>
                      <div class="col-8 text-left">${leg.end} (${endElevation} m)</div>
                  </div>
                  <div class="row p-lg-1">
                      <div class="col-3 text-left">Distance</div>
                      <div class="col-8 text-left">${leg.distance}</div>
                  </div>
                  <div class="row p-lg-1">
                      <div class="col-3 text-left">Elevation</div>
                      <div class="col-8 text-left">${leg.elevation}</div>
                  </div>
                  <div class="row p-lg-1">
                      <div class="col-3 text-left">Duration</div>
                      <div class="col-8 text-left">${leg.duration}</div>
                  </div>
              </div>
          </div>
          `;

      const button = document.createElement("button");
      button.id = difficulty + "Leg" + i.toString() + "Button";
      button.classList.add("leg-button");
      button.textContent = "Leg " + (i + 1).toString();
      button.addEventListener("click", () => {
        showLegView();

        legDetailsText.innerHTML = details;
        legDetails.classList.add("active");
        currentActiveLegIndex = i;
        //   highlightActiveLegButton(activeLegIndex, activeLeg, totalLegs, difficulty);
        button.style.color = "#00cccc";
        button.style.fontSize = "16px";

        // For removing the highlight of the active button
        console.log(288, currentActiveLegIndex);
        console.log(button.id);
        for (let i = 0; i < totalLegs; i++) {
          // console.log('inside loop')
          buttonObject = document.getElementById(
            difficulty + "Leg" + i.toString() + "Button"
          );
          if (i == currentActiveLegIndex) {
            // button.style.color = 'red';
            buttonObject.style.color = "#00cccc";
            buttonObject.style.background = "#fff";
            buttonObject.style.border = "none";

            // console.log('colouring leg', i, buttonObject.id)
          } else {
            // console.log('discoloring leg', i, buttonObject.id);
            // document.getElementById(difficulty + 'Leg' + i.toString() + 'buttonObject').style.color = 'black'
            buttonObject.style.color = "#5C5C5C";
            buttonObject.style.fontSize = "16px";
            buttonObject.style.background = "#F2F2F2";
          }
        }
      });

      legButtonsContainer.appendChild(button);
    }
  }

  function getElevations(villageName) {
    // Replace this with your logic to retrieve the elevation of a village
    // based on its name
    const elevationData = {
      SYABRUBESI: 1679,
      RISNGGANG: 2035,
      KHANGJIM: 2252,
      SURKA: 2399,
      "SHERPA GAU": 2599,
      RIMCHE: 2504,
      "LAMA HOTEL": 2438,
      "RIVER SIDE": 2760,
      GHODATABELA: 3022,
      THANGSYAP: 3190,
      CHAMKI: 3267,
      LANGTANG: 3431,
      MUNDU: 3542,
      SUNDUM: 3559,
      KYANGJIN: 3863,
      LANGTANGGOMPA: 3403,
      POOL: 2167,
      BAMBOO: 1985,
      PAHIRO: 1717,
      DOMEN: 1649,
      TIWARI: 1541,
      "GLA LAKE": 3993,
      KYANGJIN_RI: 4307,
    };

    return elevationData[villageName.toUpperCase()] || "Unknown";
  }

  function updateLegGroup(startIndex, endIndex, next_prev) {
    for (let i = 0; i < totalLegs; i++) {
      let id = difficulty + "Leg" + i.toString() + "Button";
      let legButton = document.getElementById(id);
      if (!legButton) continue;
      if (i >= startIndex && i < endIndex) {
        // Click the first leg button of the group
        if (
          (i === startIndex && next_prev === 1) ||
          (i === endIndex - 1 && next_prev === -1) ||
          (i === 0 && next_prev === 0)
        ) {
          legButton.click();
        }
        legButton.style.display = "";
      } else {
        legButton.style.display = "none";
      }
    }
  }

  function updateButtonVisibility() {
    prevButton.disabled = currentGroupIndex === 0;
    nextButton.disabled = currentGroupIndex === totalGroups - 1;
  }

  function showGroup(index, next_prev) {
    const startIndex = index * groupSize;
    const endIndex = Math.min(startIndex + groupSize, totalLegs);
    updateLegGroup(startIndex, endIndex, next_prev);
    updateButtonVisibility();
  }

  nextButton.addEventListener("click", () => {
    currentGroupIndex++;
    showGroup(currentGroupIndex, 1);
  });

  prevButton.addEventListener("click", () => {
    currentGroupIndex--;
    showGroup(currentGroupIndex, -1);
  });
  generateLegButtons();
  showGroup(currentGroupIndex);
}
