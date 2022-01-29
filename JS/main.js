let imgBox_El = document.querySelector(".imgBox")
let pepsi_El =  document.querySelector(".pepsi");
let thumbImg_El = document.querySelector(".thumb-img")
let sec_El = document.querySelector(".sec")

function imgSlider (anything) {
    pepsi_El.src = anything;
    console.log(pepsi_El.src);
}


function changeBgColor(color) {
    sec_El.style.backgroundColor = color;
}

// thumbImg_El.addEventListener("click", imgSlider){
//     pepsi_El.style.display = "none"
//    console.log(1);
// }

