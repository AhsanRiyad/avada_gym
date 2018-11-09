//Jquery starts here


$(document).ready(function () {

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});







/* goto top button / invistible button starts */
$(window).scroll(function() {
    if ($(this).scrollTop() < 100 || $(this).scrollTop() > $(document).height() - $(window).height()) {
        $('.scrollToTop').fadeOut();
    } else {
        $('.scrollToTop').fadeIn();
    }
});

//Click event to scroll to top
$('.scrollToTop').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});

    /*invisible button jquery ends */









});








var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}




