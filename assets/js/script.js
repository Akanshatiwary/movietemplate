$(document).ready(function(){
    $('.flex-container').slick({
        prevArrow:'.prev',
        nextArrow:'.next',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $('.testimonials_inner').slick({
        prevArrow:'.left',
        nextArrow:'.right',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
  });

var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
    	var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');
        
       	if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}
function setClass(info, className, fnName) {
    for (var i = 0; i < info.length; i++) {
        info[i].classList[fnName](className);
    }
}




