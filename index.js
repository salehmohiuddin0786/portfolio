
document.getElementById("contactBtn").addEventListener("click", function() {
    alert("Thank you for visiting my portfolio!");
});

function scrollLeft() {
    document.getElementById("projectSlider").scrollBy({ left: -300, behavior: 'smooth' });
}
function scrollRight() {
    document.getElementById("projectSlider").scrollBy({ left: 300, behavior: 'smooth' });
}
