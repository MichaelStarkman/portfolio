const displayDropDown = () => {
    $("#home-page-menu-dd").attr("class", "test-class")
}
$(document).ready(function() {
    $('#hp-ham').on('click', displayDropDown);
});
function toggleFunction() {
    let element = document.getElementById("home-page-menu-dd");
    element.classList.toggle("test-class");
 }