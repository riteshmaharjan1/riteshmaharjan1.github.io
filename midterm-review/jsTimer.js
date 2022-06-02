$(function () {

    let clickButton = document.getElementById("button");
    clickButton.onclick = clicked;

    let clickButton2 = document.getElementById("button2");
    clickButton2.onclick = clicked;

    let initial = "block"

    function clicked() {
        console.log(this);

        let fn = function (element) {
            if (initial == "block") {
                element.style.display = "none";
                initial = "none";
            } else {
                element.style.display = "block";
                initial = "block";
            }
        }
        let intervalId = setInterval(fn, 1000, this);
        setTimeout(function () {
            clearInterval(intervalId);
        }, 5000)
    }



})
