function myFunction(x) {
    x.classList.toggle("change");
    document.body.classList.toggle('nav-open');
    document.body.classList.toggle('nav-closed');
    
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-open');
}

function showInfo(infoId) {
    // Hide all info boxes
    var infoBoxes = document.getElementsByClassName('info-box');
    for (var i = 0; i < infoBoxes.length; i++) {
        infoBoxes[i].style.display = 'none';
    }
    // Show the clicked info box
    document.getElementById(infoId).style.display = 'block';
}