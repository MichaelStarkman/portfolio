const displayProjectTextOne = () => {
    $("#project-text-one").attr("class", "test-class-project")
}
$(document).ready(function() {
    $('#project-title-one').on('click', displayProjectTextOne);
    $("#project-text-one").toggle();
});
$(document).ready(function() {
    $('#project-title-one').click(function(){
    $("#project-text-one").toggle();
    });
});
const displayProjectTextTwo = () => {
    $("#project-text-two").attr("class", "test-class-project")
}
$(document).ready(function() {
    $('#project-title-two').on('click', displayProjectTextTwo);
});

const displayProjectTextThree = () => {
    $("#project-text-three").attr("class", "test-class-project")
}
$(document).ready(function() {
    $('#project-title-three').on('click', displayProjectTextThree);
});
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