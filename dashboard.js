function showPopUp() {
    const modalBg = document.getElementById("modalBg");
    modalBg.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", () => {
    const modalBg = document.getElementById("modalBg");
    modalBg.addEventListener("click", (event) => {
        if (event.target === modalBg) {
            modalBg.style.display = "none";
        }
    });
});



function openCo2Calculator() {
  var link = "https://calculator.carbonfootprint.com/calculator.aspx";
  var width = 710;
  var height = 1300;

  // Calculate the center position for the new window
  var left = (window.innerWidth - width) / 2;
  var top = (window.innerHeight - height) / 2;

  // Open the link in a new window with the provided dimensions and centered position
  window.open(link, "_blank", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top + ",scrollbars=no");
}

function openPlasticTracker(){
    var link = "https://www.earthday.org/plastic-pollution-calculator-2/";
    
    window.open(link, "_blank");
}

function openWaterTracker(){
    var link = "https://www.watercalculator.org/";

    window.open(link,"_blank");
}


function openNewsPage(){
    var link = "https://www.sciencedaily.com/news/earth_climate/";

    window.open(link,"_blank");
}


function openDonation(){
    // var link = "https://sadsindia.org/";
    var link = "donation_page.html" ;

    window.open(link,"_blank");
}
function openForum(){
    var link = "forum_page.html" ;

    window.open(link,"_blank");
}

function openSuggestions(){
    var link = "suggestions_page.html";

    window.open(link,"_blank");
}
function openTheOceanCleanup(){
    var link = "https://theoceancleanup.com/plastic-tracker/";

    window.open(link,"_blank");
}