const displayDropDown = () => {
    $("#home-page-menu-dd").attr("class", "test-class")
}
$(document).ready(function() {
    $('#navbar').on('click', displayDropDown);
});