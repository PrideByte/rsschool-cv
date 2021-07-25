const skillMeterElems = document.querySelectorAll("[data-skill]");

skillMeterElems.forEach(el => {
    el.style.display = "block";
    let elNumericData = parseInt(el.dataset.skill, 10);
    let num = isNaN(elNumericData) ? "50%" : 100 - elNumericData + "%";

    let meterFiller = document.createElement("span");
    meterFiller.setAttribute("style", `display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(90deg, #f00, #ff0, #0f0);
        clip-path: inset(0 ${num} 0 0);`
    );
    el.appendChild(meterFiller);
});