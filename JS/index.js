addEventListener('load', (event) => {});

onload = (event) => { 

    let ic = document.querySelector("#face-logo")

    var style = getComputedStyle(document.body);

    ic.style.borderColor = style.getPropertyValue('--github');

};