// *Otp
var otp_inputs = document.querySelectorAll(".otp__digit")
var mykey = "0123456789".split("")
otp_inputs.forEach((_) => {
    _.addEventListener("keyup", handle_next_input)
})
function handle_next_input(event) {
    let current = event.target
    let index = parseInt(current.classList[1].split("__")[2])
    current.value = event.key

    if (event.keyCode == 8 && index > 1) {
        current.previousElementSibling.focus()
    }
    if (index < 6 && mykey.indexOf("" + event.key + "") != -1) {
        var next = current.nextElementSibling;
        next.focus()
    }
    var _finalKey = ""
    for (let { value } of otp_inputs) {
        _finalKey += value
    }
    if (_finalKey.length == 6) {
        document.querySelector("#_otp").classList.replace("_notok", "_ok")
        document.querySelector("#_otp").innerText = _finalKey
    } else {
        document.querySelector("#_otp").classList.replace("_ok", "_notok")
        document.querySelector("#_otp").innerText = _finalKey
    }
}



// *Swiper Slider

var swiper = new Swiper(".cardslider", {
    slidesPerView: 3,
    spaceBetween: 15,
    center:true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.1": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@1.25": {
            slidesPerView: 2,
        },
        "@1.50": {
            slidesPerView: 3,
        },
    },

});