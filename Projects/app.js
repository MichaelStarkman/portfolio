const displayProjectTextOne = () => {
    $("#project-text-one").attr("class", "test-class-project")
}
$(document).ready(function() {
    $('#project-title-one').on('click', displayProjectTextOne);
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