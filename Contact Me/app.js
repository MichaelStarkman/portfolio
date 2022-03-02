const displayDropDown = () => {
    $("#home-page-menu-dd").attr("class", "test-class")
}
$(document).ready(function() {
    $('#hp-ham').on('click', displayDropDown);
});
 $(document).ready(function(){
    $("#hp-ham").click(function(){
      $("#home-page-menu-dd").toggle();
    });
  });