// let imgBox_El = document.querySelector(".imgBox")
// let thumbImg_El = document.querySelector(".thumb-img")
let sec_El = document.querySelector(".sec");
let pepsi_El =  document.querySelector(".pepsi");
let toggleMenu_El = document.querySelector(".toggleMenu");
let siteHeaderList_El = document.querySelector(".site-header-list")



function imgSlider (anything) {
    pepsi_El.src = anything;
    console.log(pepsi_El.src);
}


function changeBgColor(color) {
    sec_El.style.backgroundColor = color;
}

function menuToggle(){
    toggleMenu_El.classList.toggle("active");
    siteHeaderList_El.classList.toggle("active");
}

