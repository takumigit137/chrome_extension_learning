(function () {
    const warning = document.createElement("div");
    warning.textContent = "You must login!!";
    warning.style.position = "fixed";
    warning.style.top = "10px";
    warning.style.left = "10px";
    warning.style.backgroundColor = "red";
    warning.style.color = "white";
    warning.style.padding = "10px";
    warning.style.zIndex = "9999";
    warning.style.fontSize = "20px";
    document.body.appendChild(warning);
})();