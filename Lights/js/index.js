document.addEventListener("DOMContentLoaded", function () {
    let lights = document.querySelectorAll(".trafficLight");
    let nightBut = document.querySelector("#Do");
    lights.forEach(elem =>{
        strobo =() =>{
            elem.classList.toggle(elem.classList.toggle("yellow"))
        }
        let yellowInt = setInterval(strobo, 1000);
        elem.addEventListener("click", function () {
            clearInterval(yellowInt)
            if (elem.classList.contains("yellow")){
                elem.classList.remove("yellow");
                elem.classList.add("green");
                return
            } else {
                elem.classList.add("green");
            };
            if (elem.classList.contains("green")){
                elem.classList.remove("green");
                elem.classList.add("red");
            }
        })
    })
    nightBut.addEventListener("click", function () {
        clearInterval()
    })
})
