const displayAccordion1 = () => {
    $("#test-test1").attr("class", "test-class")
}
$(document).ready(function() {
    $('#accordion-title-container1').on('mouseover', displayAccordion1);
    $('#accordion-title-container1').on('mouseout',removeAccordion1);
});
const removeAccordion1 = () => {
    // console.log("Is this working")
    $("test-test1").attr("class", "test-remove")
    console.log("Is this working")

}
$(document).ready(function() {
    $('#accordion-title-container1').on('mouseout', removeAccordion1);

})
const displayAccordion2 = () => {
    $("#test-test2").attr("class", "test-class")
    console.log("JS is working2")
}
$(document).ready(function() {
    $('#accordion-title-container2').on('mouseover', displayAccordion2);
});
const displayAccordion3 = () => {
    $("#test-test3").attr("class", "test-class")
    console.log("JS is working3")
}
$(document).ready(function() {
    $('#accordion-title-container3').on('mouseover', displayAccordion3);
});